import { 
  users, type User, type InsertUser,
  contactMessages, type ContactMessage, type InsertContactMessage,
  projects, type Project, type InsertProject
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Contact message methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  getContactMessage(id: number): Promise<ContactMessage | undefined>;
  markContactMessageAsRead(id: number): Promise<void>;

  // Project methods
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<boolean>;
}

// Memory storage implementation (for development/testing)
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private projects: Map<number, Project>;
  private userCurrentId: number;
  private messageCurrentId: number;
  private projectCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.projects = new Map();
    this.userCurrentId = 1;
    this.messageCurrentId = 1;
    this.projectCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact message methods
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.messageCurrentId++;
    const now = new Date();
    const contactMessage: ContactMessage = { 
      ...message, 
      id, 
      createdAt: now,
      isRead: false
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    return this.contactMessages.get(id);
  }

  async markContactMessageAsRead(id: number): Promise<void> {
    const message = this.contactMessages.get(id);
    if (message) {
      message.isRead = true;
      this.contactMessages.set(id, message);
    }
  }

  // Project methods
  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const id = this.projectCurrentId++;
    const now = new Date();
    const { title, description, skills, skillCategory, icon, gradient, sortOrder, githubLink } = project;
    
    const newProject: Project = { 
      id,
      title,
      description, 
      skills,
      skillCategory,
      icon,
      gradient,
      sortOrder,
      githubLink: githubLink || null,
      createdAt: now,
      updatedAt: now
    };
    
    this.projects.set(id, newProject);
    return newProject;
  }

  async updateProject(id: number, projectUpdate: Partial<InsertProject>): Promise<Project | undefined> {
    const project = this.projects.get(id);
    if (!project) return undefined;
    
    const updatedProject: Project = { 
      ...project, 
      ...projectUpdate,
      updatedAt: new Date()
    };
    this.projects.set(id, updatedProject);
    return updatedProject;
  }

  async deleteProject(id: number): Promise<boolean> {
    return this.projects.delete(id);
  }
}

// Database storage implementation
export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Contact message methods
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [contactMessage] = await db.insert(contactMessages).values(message).returning();
    return contactMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
  }

  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    const [message] = await db.select().from(contactMessages).where(eq(contactMessages.id, id));
    return message;
  }

  async markContactMessageAsRead(id: number): Promise<void> {
    await db.update(contactMessages)
      .set({ isRead: true })
      .where(eq(contactMessages.id, id));
  }

  // Project methods
  async getProjects(): Promise<Project[]> {
    return db.select().from(projects).orderBy(projects.sortOrder);
  }

  async getProject(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }

  async createProject(project: InsertProject): Promise<Project> {
    const { title, description, skills, skillCategory, icon, gradient, sortOrder, githubLink } = project;
    
    const projectToInsert = {
      title,
      description,
      skills,
      skillCategory,
      icon, 
      gradient,
      sortOrder,
      githubLink: githubLink || null
    };
    
    const [newProject] = await db.insert(projects).values(projectToInsert).returning();
    return newProject;
  }

  async updateProject(id: number, projectUpdate: Partial<InsertProject>): Promise<Project | undefined> {
    // Handle updates safely, especially for githubLink which might be null
    const updateData: Record<string, any> = {};
    
    if (projectUpdate.title !== undefined) updateData.title = projectUpdate.title;
    if (projectUpdate.description !== undefined) updateData.description = projectUpdate.description;
    if (projectUpdate.skills !== undefined) updateData.skills = projectUpdate.skills;
    if (projectUpdate.skillCategory !== undefined) updateData.skillCategory = projectUpdate.skillCategory;
    if (projectUpdate.icon !== undefined) updateData.icon = projectUpdate.icon;
    if (projectUpdate.gradient !== undefined) updateData.gradient = projectUpdate.gradient;
    if (projectUpdate.sortOrder !== undefined) updateData.sortOrder = projectUpdate.sortOrder;
    if (projectUpdate.githubLink !== undefined) updateData.githubLink = projectUpdate.githubLink || null;
    
    // Add updatedAt timestamp
    updateData.updatedAt = new Date();
    
    const [updatedProject] = await db
      .update(projects)
      .set(updateData)
      .where(eq(projects.id, id))
      .returning();
      
    return updatedProject;
  }

  async deleteProject(id: number): Promise<boolean> {
    await db
      .delete(projects)
      .where(eq(projects.id, id));
    return true; // In PostgreSQL via Drizzle ORM, we assume success if no errors are thrown
  }
}

// Use database storage in production
export const storage = new DatabaseStorage();

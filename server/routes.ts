import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertProjectSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact message routes
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const parsed = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(parsed);
      return res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ error: error.message });
      }
      console.error("Error creating contact message:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json(messages);
    } catch (error) {
      console.error("Error getting contact messages:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.get("/api/contact/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID" });
      }
      const message = await storage.getContactMessage(id);
      if (!message) {
        return res.status(404).json({ error: "Message not found" });
      }
      return res.status(200).json(message);
    } catch (error) {
      console.error("Error getting contact message:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.patch("/api/contact/:id/read", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID" });
      }
      await storage.markContactMessageAsRead(id);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error marking contact message as read:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Project routes
  app.get("/api/projects", async (req: Request, res: Response) => {
    try {
      const projects = await storage.getProjects();
      return res.status(200).json(projects);
    } catch (error) {
      console.error("Error getting projects:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.get("/api/projects/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID" });
      }
      const project = await storage.getProject(id);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      return res.status(200).json(project);
    } catch (error) {
      console.error("Error getting project:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.post("/api/projects", async (req: Request, res: Response) => {
    try {
      const parsed = insertProjectSchema.parse(req.body);
      const project = await storage.createProject(parsed);
      return res.status(201).json(project);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ error: error.message });
      }
      console.error("Error creating project:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.patch("/api/projects/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID" });
      }
      const project = await storage.updateProject(id, req.body);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      return res.status(200).json(project);
    } catch (error) {
      console.error("Error updating project:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.delete("/api/projects/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID" });
      }
      const success = await storage.deleteProject(id);
      if (!success) {
        return res.status(404).json({ error: "Project not found" });
      }
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error deleting project:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

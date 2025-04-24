import { scrollToSection } from "@/lib/utils";

export default function Footer() {
  return (
    <footer style={{ 
      background: "#1e293b", 
      color: "white", 
      padding: "40px 0",
      marginTop: "20px"
    }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "0 20px" 
      }}>
        <div style={{ 
          textAlign: "center", 
          marginBottom: "30px" 
        }}>
          <h3 style={{ 
            fontSize: "24px", 
            fontWeight: "bold", 
            marginBottom: "8px" 
          }}>
            <span style={{ color: "#5FA8D3" }}>Neha</span> Bagaswar
          </h3>
          <p style={{ color: "#cbd5e1" }}>
            Business & Data Analyst
          </p>
        </div>
        
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "30px", 
          marginBottom: "30px",
          flexWrap: "wrap"
        }}>
          <button 
            onClick={() => scrollToSection('about')} 
            style={{ 
              background: "transparent", 
              border: "none", 
              color: "#cbd5e1", 
              cursor: "pointer" 
            }}
            onMouseOver={(e) => e.currentTarget.style.color = "#5FA8D3"}
            onMouseOut={(e) => e.currentTarget.style.color = "#cbd5e1"}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            style={{ 
              background: "transparent", 
              border: "none", 
              color: "#cbd5e1", 
              cursor: "pointer" 
            }}
            onMouseOver={(e) => e.currentTarget.style.color = "#5FA8D3"}
            onMouseOut={(e) => e.currentTarget.style.color = "#cbd5e1"}
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            style={{ 
              background: "transparent", 
              border: "none", 
              color: "#cbd5e1", 
              cursor: "pointer" 
            }}
            onMouseOver={(e) => e.currentTarget.style.color = "#5FA8D3"}
            onMouseOut={(e) => e.currentTarget.style.color = "#cbd5e1"}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            style={{ 
              background: "transparent", 
              border: "none", 
              color: "#cbd5e1", 
              cursor: "pointer" 
            }}
            onMouseOver={(e) => e.currentTarget.style.color = "#5FA8D3"}
            onMouseOut={(e) => e.currentTarget.style.color = "#cbd5e1"}
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            style={{ 
              background: "transparent", 
              border: "none", 
              color: "#cbd5e1", 
              cursor: "pointer" 
            }}
            onMouseOver={(e) => e.currentTarget.style.color = "#5FA8D3"}
            onMouseOut={(e) => e.currentTarget.style.color = "#cbd5e1"}
          >
            Contact
          </button>
        </div>
        
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "24px", 
          marginBottom: "30px" 
        }}>
          <a 
            href="mailto:nehabagaswar28@gmail.com" 
            style={{ 
              width: "40px", 
              height: "40px", 
              borderRadius: "50%", 
              backgroundColor: "#374151", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              color: "white",
              textDecoration: "none"
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#3b82f6"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#374151"}
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/neha-bagaswar" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              width: "40px", 
              height: "40px", 
              borderRadius: "50%", 
              backgroundColor: "#374151", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              color: "white",
              textDecoration: "none"
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0077b5"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#374151"}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a 
            href="https://github.com/nehabagaswar"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              width: "40px", 
              height: "40px", 
              borderRadius: "50%", 
              backgroundColor: "#374151", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              color: "white",
              textDecoration: "none"
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#1f2937"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#374151"}
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        
        <div style={{ 
          textAlign: "center", 
          fontSize: "14px", 
          color: "#94a3b8", 
          borderTop: "1px solid #334155", 
          paddingTop: "24px" 
        }}>
          <p>© 2025 Neha Bagaswar • All Rights Reserved</p>
          <p style={{ marginTop: "8px", fontSize: "12px" }}>Data-driven • Detail-oriented • Results-focused</p>
        </div>
        
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          marginTop: "24px" 
        }}>
          <button
            onClick={() => scrollToSection('hero')}
            style={{ 
              backgroundColor: "#5FA8D3", 
              height: "40px", 
              width: "40px", 
              borderRadius: "50%", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              border: "none",
              cursor: "pointer"
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#4a95c0"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#5FA8D3"}
          >
            <i className="fas fa-arrow-up" style={{ color: "white" }}></i>
          </button>
        </div>
      </div>
    </footer>
  );
}

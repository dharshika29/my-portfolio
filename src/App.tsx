import { useState } from "react";

// Global Effects
import CustomCursor from "./components/ui/CustomCursor";
import MouseSpotlight from "./components/ui/MouseSpotlight";

// Layout
import RightSidebar from "./components/layout/RightSidebar";

// Pages
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Services from "./components/home/Services";
import TechStack from "./components/home/TechStack";
import Projects from "./components/home/Projects";
import Experience from "./components/home/Experience";
import Education from "./components/home/Education";
import Certifications from "./components/home/Certifications";
import Contact from "./components/home/Contact";

import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home": return <Hero key="home" setActiveTab={setCurrentPage} />;
      case "about": return <About key="about" />;
      case "services": return <Services key="services" />;
      case "techstack": return <TechStack key="techstack" />;
      case "projects": return <Projects key="projects" />;
      case "experience": return <Experience key="experience" />;
      case "education": return <Education key="education" />;
      case "certifications": return <Certifications key="certifications" />;
      case "contact": return <Contact key="contact" />;
      default: return <Hero key="home" setActiveTab={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <main className="relative bg-background h-screen w-full overflow-hidden text-foreground">
        <CustomCursor />
        <MouseSpotlight />
        <RightSidebar activeTab={currentPage} setActiveTab={setCurrentPage} />
        
        <div className="w-full h-full lg:pr-24">
          {renderPage()}
        </div>
      </main>
    </ThemeProvider>
  );
}

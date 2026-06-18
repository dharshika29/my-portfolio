import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Layers, Code2, FolderOpen, Briefcase, GraduationCap, Award, Mail, Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import profileImage from "../image/DHARSHIKA.png";

const navItems = [
  { icon: Home, label: "Home", id: "home" },
  { icon: User, label: "About", id: "about" },
  { icon: Layers, label: "Services", id: "services" },
  { icon: Code2, label: "Tech Stack", id: "techstack" },
  { icon: FolderOpen, label: "Projects", id: "projects" },
  { icon: Briefcase, label: "Experience", id: "experience" },
  { icon: GraduationCap, label: "Education", id: "education" },
  { icon: Award, label: "Certifications", id: "certifications" },
  { icon: Mail, label: "Contact", id: "contact" },
];

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function MobileNav({ activeTab, setActiveTab }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Bar for Mobile */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-[110] px-4 py-4 flex items-center justify-between bg-background/80 backdrop-blur-xl border-b border-border shadow-sm">
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/50">
            <img 
              src={profileImage} 
              alt="Dharshika Logo" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          <span className="text-base font-heading font-bold text-foreground leading-none">
            Dharshika<span className="text-primary">.dev</span>
          </span>
        </button>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="text-foreground hover:text-primary transition-colors">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsOpen(true)}
            className="p-2 bg-card rounded-md border border-border text-foreground hover:text-primary transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[120] bg-background/95 backdrop-blur-2xl flex flex-col items-center pt-24 pb-8 px-6 overflow-y-auto"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 bg-card rounded-full border border-border text-foreground hover:text-primary transition-colors shadow-lg"
            >
              <X size={24} />
            </button>

            {/* Profile Image & Name */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_15px_rgba(255,74,87,0.3)] mb-4">
                <img 
                  src={profileImage} 
                  alt="Dharshika S" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h2 className="text-xl font-heading font-bold text-foreground">Dharshika S</h2>
              <p className="text-sm text-primary font-medium tracking-wide">Full Stack Engineer</p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col w-full gap-3 max-w-sm mx-auto">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                      isActive 
                        ? "bg-primary/20 text-primary border border-primary/30 shadow-md" 
                        : "bg-card border border-border/50 text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium text-lg">{item.label}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Download Resume Button */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              download="Dharshika_S_Resume.pdf"
              className="mt-8 px-8 py-3 w-full max-w-sm text-center bg-primary text-white font-medium rounded-xl shadow-lg hover:shadow-primary/20 transition-all"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

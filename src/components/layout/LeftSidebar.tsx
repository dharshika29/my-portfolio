import { Home, User, Code2, FolderOpen, Briefcase, GraduationCap, Award, Mail } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, label: "Home", id: "home" },
  { icon: User, label: "About", id: "about" },
  { icon: Code2, label: "Tech Stack", id: "techstack" },
  { icon: FolderOpen, label: "Projects", id: "projects" },
  { icon: Briefcase, label: "Experience", id: "experience" },
  { icon: GraduationCap, label: "Education", id: "education" },
  { icon: Award, label: "Certifications", id: "certifications" },
  { icon: Mail, label: "Contact", id: "contact" },
];

interface LeftSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function LeftSidebar({ activeTab, setActiveTab }: LeftSidebarProps) {
  return (
    <div className="fixed left-0 top-0 h-full w-24 z-[100] hidden lg:flex flex-col items-center py-8 bg-card/50 backdrop-blur-2xl border-r border-border/50 shadow-2xl">
      
      {/* Profile Image */}
      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_15px_rgba(255,74,87,0.3)] mb-12">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" 
          alt="Dharshika" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-6 flex-1 w-full items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative group p-3 flex items-center justify-center w-full transition-all cursor-pointer"
            >
              {isActive && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-l-full shadow-[0_0_10px_rgba(255,74,87,0.8)]"
                />
              )}
              
              <div className={`p-2 rounded-xl transition-all duration-300 ${
                isActive ? "bg-primary/20 text-primary scale-110 shadow-[0_0_15px_rgba(255,74,87,0.3)]" : "text-muted hover:text-foreground hover:bg-foreground/5"
              }`}>
                <Icon size={20} />
              </div>

              {/* Tooltip */}
              <span className="absolute left-full ml-4 bg-card border border-border text-foreground px-3 py-1.5 rounded text-xs font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-xl">
                {item.label}
                <span className="absolute top-1/2 -left-1 -translate-y-1/2 border-4 border-transparent border-r-card" />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

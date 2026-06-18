import { Home, User, Layers, Code2, FolderOpen, Briefcase, GraduationCap, Award, Mail, Moon, Sun } from "lucide-react";
import profileImage from "../image/DHARSHIKA.png";
import { useTheme } from "../../context/ThemeContext";

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

interface RightSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function RightSidebar({ activeTab, setActiveTab }: RightSidebarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed right-0 top-0 h-full w-24 z-[100] hidden lg:flex flex-col items-center py-8 bg-card/50 backdrop-blur-2xl border-l border-border/50 shadow-2xl">
      
      {/* Profile Image */}
      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_15px_rgba(255,74,87,0.3)] mb-12 shrink-0">
        <img 
          src={profileImage} 
          alt="Dharshika S" 
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-6 flex-1 w-full items-center overflow-y-auto overflow-x-hidden no-scrollbar">
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
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full shadow-[0_0_10px_rgba(255,74,87,0.8)]" />
              )}
              
              <div className={`p-2 rounded-xl transition-all duration-300 ${
                isActive ? "bg-primary/20 text-primary scale-110 shadow-[0_0_15px_rgba(255,74,87,0.3)]" : "text-muted hover:text-foreground hover:bg-foreground/5"
              }`}>
                <Icon size={20} />
              </div>

              {/* Tooltip */}
              <span className="absolute right-full mr-4 bg-card border border-border text-foreground px-3 py-1.5 rounded text-xs font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-xl">
                {item.label}
                <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-card" />
              </span>
            </button>
          );
        })}
      </div>

      {/* Theme Toggle */}
      <div className="mt-auto pt-6 w-full flex justify-center shrink-0">
        <button
          onClick={toggleTheme}
          className="relative group p-3 flex items-center justify-center transition-all cursor-pointer"
        >
          <div className="p-2 rounded-xl transition-all duration-300 text-muted hover:text-primary hover:bg-primary/10">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </div>
          <span className="absolute right-full mr-4 bg-card border border-border text-foreground px-3 py-1.5 rounded text-xs font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-xl">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-card" />
          </span>
        </button>
      </div>
    </div>
  );
}

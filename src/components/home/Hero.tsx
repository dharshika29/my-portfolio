"use client";
import { motion } from "framer-motion";
import { Download, Info, Mail, Globe, Code2, Layout, FileText } from "lucide-react";
import TypewriterText from "../ui/TypewriterText";
import LoopingTypewriter from "../ui/LoopingTypewriter";
import heroImage from "../image/DHARSHIKA.png";

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

export default function Hero({ setActiveTab }: HeroProps) {
  return (
    <motion.section 
      className="relative min-h-screen flex items-start md:items-center justify-center overflow-x-hidden py-10 md:py-0"
    >

      {/* Vertical Tech Ticker on Left Edge (Desktop Only) */}
      <div className="absolute left-0 top-0 h-full w-20 md:w-24 border-r border-border/50 bg-foreground/10 backdrop-blur-md z-20 hidden md:flex flex-col items-center overflow-hidden py-10">
        <div className="flex flex-col gap-16 h-max animate-marquee-vertical opacity-60 hover:opacity-100 transition-opacity duration-300">
          {[
            "https://cdn.simpleicons.org/react/61DAFB",
            "https://cdn.simpleicons.org/nextdotjs/white",
            "https://cdn.simpleicons.org/nodedotjs/339933",
            "https://cdn.simpleicons.org/mongodb/47A248",
            "https://cdn.simpleicons.org/tailwindcss/06B6D4",
            "https://cdn.simpleicons.org/express/white",
            "https://cdn.simpleicons.org/javascript/F7DF1E",
            "https://cdn.simpleicons.org/react/61DAFB",
            "https://cdn.simpleicons.org/nextdotjs/white",
            "https://cdn.simpleicons.org/nodedotjs/339933",
            "https://cdn.simpleicons.org/mongodb/47A248",
            "https://cdn.simpleicons.org/tailwindcss/06B6D4",
            "https://cdn.simpleicons.org/express/white",
            "https://cdn.simpleicons.org/javascript/F7DF1E",
          ].map((src, i) => (
            <img key={i} src={src} alt="Tech" className="w-8 h-auto grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 md:pl-32 relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 my-auto pt-10 md:pt-0">
        
        {/* Left Side: Profile Image & Floating Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          {/* Main Image Container */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-[450px] md:h-[450px] border-[4px] border-card rounded-full overflow-hidden relative shadow-[0_0_50px_rgba(255,74,87,0.3)] group-hover:shadow-[0_0_80px_rgba(255,74,87,0.6)] transition-all duration-500 z-10 mx-auto"
          >
            <div className="absolute inset-0 border-[6px] border-primary rounded-full animate-[spin_10s_linear_infinite] border-dashed opacity-50"></div>
            <img 
              src={heroImage} 
              alt="Dharshika S" 
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            />
            {/* Social Overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-5 bg-card/80 backdrop-blur-md px-6 py-3 rounded-full border border-border shadow-xl">
              <a href="#" className="text-foreground hover:text-primary transition-colors hover:scale-110" title="GitHub"><Code2 size={18} /></a>
              <a href="#" className="text-foreground hover:text-primary transition-colors hover:scale-110" title="LinkedIn"><Globe size={18} /></a>
              <a href="mailto:contact@example.com" className="text-foreground hover:text-primary transition-colors hover:scale-110" title="Email"><Mail size={18} /></a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download="Dharshika_S_Resume.pdf" className="text-foreground hover:text-primary transition-colors hover:scale-110" title="Resume"><FileText size={18} /></a>
            </div>
          </motion.div>

          {/* Floating Badges (Extra Content) */}
          <motion.div 
            animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-2 -right-2 sm:-top-6 sm:-right-6 md:-top-10 md:-right-10 bg-card border border-border px-3 py-1.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl z-20 flex items-center gap-2 sm:gap-3 backdrop-blur-md"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-foreground font-bold text-xs sm:text-sm">1+ Years</p>
              <p className="text-muted text-[10px] sm:text-xs">Experience</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-2 -left-2 sm:-bottom-6 sm:-left-6 md:-bottom-10 md:-left-10 bg-card border border-border px-3 py-1.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl z-20 flex items-center gap-2 sm:gap-3 backdrop-blur-md"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Layout className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-foreground font-bold text-xs sm:text-sm">30+ Projects</p>
              <p className="text-muted text-[10px] sm:text-xs">Completed</p>
            </div>
          </motion.div>

        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Open to New Opportunities
          </div>

          <TypewriterText text1="Hi, I'm" text2="Dharshika S" />
          <h2 className="text-xl md:text-2xl text-muted font-medium mb-6 flex justify-center md:justify-start items-center gap-3 min-h-[60px] md:min-h-[32px]">
            <LoopingTypewriter 
              words={[
                "Full Stack Developer",
                "MERN Stack Developer",
                "React.js Developer",
                "Frontend Developer",
                "Web Developer",
                "JavaScript Developer",
                "Node.js Developer",
                "Backend Developer (Node.js / Express.js)",
                "UI Developer"
              ]} 
              typingSpeed={50} 
              deletingSpeed={20} 
              pauseDelay={1500} 
            />
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-10 border-l-4 border-primary/50 pl-5">
            I engineer high-performance, scalable web applications specializing in the MERN stack. My focus lies in bridging the gap between pixel-perfect frontend interfaces and robust backend architectures to deliver seamless, impact-driven user experiences.
          </p>
          
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download="Dharshika_S_Resume.pdf" className="px-8 py-3 bg-card border border-border text-foreground font-medium hover:bg-primary hover:border-primary transition-all rounded flex items-center gap-2 shadow-lg hover:shadow-primary/20">
              <Download size={18} />
              Download CV
            </a>
            <button onClick={() => setActiveTab('about')} className="px-8 py-3 bg-transparent border border-border text-foreground font-medium hover:bg-foreground/5 transition-all rounded flex items-center gap-2 cursor-pointer">
              <Info size={18} />
              More Info
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

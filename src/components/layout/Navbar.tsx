import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

interface NavbarProps {
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ setActiveTab }: NavbarProps) {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 150 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl"
    >
      <div className="bg-card/80 backdrop-blur-xl border border-border shadow-2xl rounded-full px-6 py-4 flex items-center justify-between">
        
        {/* Logo with Image */}
        <button onClick={() => setActiveTab('home')} className="flex items-center gap-3 group text-left cursor-pointer">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-colors shadow-[0_0_15px_rgba(255,74,87,0.3)]">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" 
              alt="Dharshika Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-heading font-bold tracking-tighter text-foreground leading-none">
              Dharshika<span className="text-primary">.dev</span>
            </span>
            <span className="text-[10px] text-muted font-medium uppercase tracking-widest mt-0.5">Full Stack Eng.</span>
          </div>
        </button>

        {/* Let's Talk Button */}
        <button
          onClick={() => setActiveTab('contact')}
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-card px-6 py-1 text-sm font-medium text-foreground backdrop-blur-3xl hover:bg-card/80 transition-all">
            Let's Talk
          </span>
        </button>

      </div>
    </motion.header>
  );
}

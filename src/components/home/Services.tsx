"use client";
import { motion } from "framer-motion";
import { Monitor, Server, Layers, Database, ShieldCheck, Smartphone, Cloud, Settings, ArrowUpRight } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Frontend Development",
    icon: Monitor,
    description: "Creating responsive, interactive, and user-friendly web interfaces using modern frontend technologies.",
    techStack: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
  },
  {
    id: 2,
    title: "Backend Development",
    icon: Server,
    description: "Building robust server-side applications and RESTful APIs with secure authentication and efficient business logic.",
    techStack: ["Node.js", "Express.js", "REST APIs", "JWT"]
  },
  {
    id: 3,
    title: "Full Stack Development",
    icon: Layers,
    description: "Developing complete web applications from frontend UI to backend services and database integration.",
    techStack: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB"]
  },
  {
    id: 4,
    title: "Database Development",
    icon: Database,
    description: "Designing and managing scalable NoSQL databases with optimized data structures and queries.",
    techStack: ["MongoDB", "Mongoose", "CRUD Operations"]
  },
  {
    id: 5,
    title: "Auth & Authorization",
    icon: ShieldCheck,
    description: "Implementing secure login systems, protected routes, and role-based access control.",
    techStack: ["JWT", "Authentication", "Authorization", "User Management"]
  },
  {
    id: 6,
    title: "Responsive Web Apps",
    icon: Smartphone,
    description: "Ensuring seamless user experiences across desktop, tablet, and mobile devices.",
    techStack: ["Responsive Design", "Flexbox", "CSS Grid", "Media Queries"]
  },
  {
    id: 7,
    title: "Deployment & Version Control",
    icon: Cloud,
    description: "Managing code repositories, team collaboration, and application deployment workflows.",
    techStack: ["Git", "GitHub", "Netlify", "Vercel"]
  },
  {
    id: 8,
    title: "Web App Maintenance",
    icon: Settings,
    description: "Optimizing performance, debugging issues, and maintaining scalable applications.",
    techStack: ["Performance Optimization", "Debugging", "Cross-Browser Compatibility"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Services() {
  return (
    <motion.section className="w-full h-full overflow-y-auto py-24 relative bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4"
          >
            What I <span className="text-primary">Offer</span>
          </motion.h2>
          <p className="text-muted text-lg">Services I provide — from pixel-perfect UI to scalable backend architectures.</p>
        </div>

        {/* 4-Column Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12"
        >
          {servicesData.map((service) => (
            <motion.div 
              key={service.id}
              variants={cardVariants}
              className="bg-card border border-border/50 rounded-3xl p-8 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,74,87,0.05)] transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            >
              {/* Subtle gradient hover effect inside the card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-14 h-14 bg-foreground/5 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                  <service.icon size={28} />
                </div>
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted group-hover:border-primary/50 group-hover:text-primary transition-colors">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors relative z-10">
                {service.title}
              </h3>
              
              <p className="text-muted text-sm leading-relaxed mb-8 flex-1 relative z-10">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {service.techStack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-foreground/5 text-foreground text-[10px] font-bold uppercase tracking-wider rounded-full border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}

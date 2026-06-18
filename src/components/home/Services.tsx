"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Server, Layers, Database, ShieldCheck, Smartphone, Cloud, Settings, ArrowUpRight, X } from "lucide-react";

interface ServiceData {
  id: number;
  title: string;
  icon: any;
  description: string;
  techStack: string[];
  details: string;
}

const servicesData: ServiceData[] = [
  {
    id: 1,
    title: "Frontend Development",
    icon: Monitor,
    description: "Creating responsive, interactive, and user-friendly web interfaces using modern frontend technologies.",
    techStack: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    details: "I specialize in translating UI/UX designs into pixel-perfect, highly responsive frontend interfaces. My expertise spans across modern libraries and frameworks like React and Next.js, ensuring optimized performance, state management, and seamless user interactions across all devices."
  },
  {
    id: 2,
    title: "Backend Development",
    icon: Server,
    description: "Building robust server-side applications and RESTful APIs with secure authentication and efficient business logic.",
    techStack: ["Node.js", "Express.js", "REST APIs", "JWT"],
    details: "I design and build scalable backend architectures that power modern web applications. From creating robust RESTful APIs to handling complex business logic and secure authentication flows, I ensure your application's data layer is efficient, secure, and reliable."
  },
  {
    id: 3,
    title: "Full Stack Development",
    icon: Layers,
    description: "Developing complete web applications from frontend UI to backend services and database integration.",
    techStack: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB"],
    details: "As a Full Stack developer, I bridge the gap between frontend and backend. I deliver end-to-end solutions, seamlessly connecting user-facing interfaces with server-side logic and database management, ensuring a cohesive and performant application."
  },
  {
    id: 4,
    title: "Database Development",
    icon: Database,
    description: "Designing and managing scalable NoSQL databases with optimized data structures and queries.",
    techStack: ["MongoDB", "Mongoose", "CRUD Operations"],
    details: "I have strong experience in designing efficient database schemas using MongoDB. I focus on data integrity, scalable structures, and optimized queries to ensure fast data retrieval and reliable storage for complex applications."
  },
  {
    id: 5,
    title: "Auth & Authorization",
    icon: ShieldCheck,
    description: "Implementing secure login systems, protected routes, and role-based access control.",
    techStack: ["JWT", "Authentication", "Authorization", "User Management"],
    details: "Security is paramount. I implement robust authentication and authorization mechanisms using JWT and secure password hashing. I build protected routes and role-based access controls to safeguard sensitive data and application features."
  },
  {
    id: 6,
    title: "Responsive Web Apps",
    icon: Smartphone,
    description: "Ensuring seamless user experiences across desktop, tablet, and mobile devices.",
    techStack: ["Responsive Design", "Flexbox", "CSS Grid", "Media Queries"],
    details: "I ensure your web application looks and functions flawlessly on any device. Utilizing modern CSS techniques like Flexbox and Grid, along with media queries, I create adaptive layouts that provide an optimal viewing experience for every user."
  },
  {
    id: 7,
    title: "Deployment & Version Control",
    icon: Cloud,
    description: "Managing code repositories, team collaboration, and application deployment workflows.",
    techStack: ["Git", "GitHub", "Netlify", "Vercel"],
    details: "I manage source code using Git, ensuring clean commit histories and smooth collaboration. I am proficient in deploying applications using platforms like Vercel and Netlify, setting up continuous integration to streamline the release process."
  },
  {
    id: 8,
    title: "Web App Maintenance",
    icon: Settings,
    description: "Optimizing performance, debugging issues, and maintaining scalable applications.",
    techStack: ["Performance Optimization", "Debugging", "Cross-Browser Compatibility"],
    details: "Beyond initial development, I provide ongoing maintenance. I diagnose and resolve bugs, optimize rendering performance, ensure cross-browser compatibility, and update dependencies to keep your application running smoothly over time."
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
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

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
                <button 
                  onClick={() => setSelectedService(service)}
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-background hover:border-primary hover:scale-110 hover:animate-none group-hover:border-primary/50 group-hover:text-primary transition-all duration-300 cursor-pointer animate-pulse"
                  title="View Details"
                >
                  <ArrowUpRight size={16} />
                </button>
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

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border/50 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 text-muted hover:text-primary transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>

              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <selectedService.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {selectedService.title}
              </h3>
              
              <p className="text-muted leading-relaxed mb-8">
                {selectedService.details}
              </p>

              <div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Core Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-foreground/5 text-foreground text-xs font-bold uppercase tracking-wider rounded-full border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.section>
  );
}


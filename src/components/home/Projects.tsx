"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const allProjects = [
  {
    id: 1,
    date: "Jun 2024",
    title: "Hospital Management",
    category: "Full Stack",
    image: "/projects/hospital.png",
    description: "A comprehensive hospital management system handling patient records, appointments, and staff management securely.",
    link: "https://hospital-management-nova.netlify.app/"
  },
  {
    id: 2,
    date: "May 2024",
    title: "Healthcare Cyber Security",
    category: "Security",
    image: "/projects/cyber.png",
    description: "Cybersecurity dashboard dedicated to protecting healthcare data, monitoring vulnerabilities and network threats in real-time.",
    link: "https://hospital-cyber-nova.netlify.app/dashboard"
  },
  {
    id: 3,
    date: "Apr 2024",
    title: "AI Stock Predictor",
    category: "FinTech",
    image: "/projects/stock.png",
    description: "Interactive AI-powered stock market dashboard providing real-time financial data, portfolio tracking, and candlestick charts.",
    link: "https://ai-stock-pg.netlify.app/"
  },
  {
    id: 4,
    date: "Mar 2024",
    title: "Real Estate Platform",
    category: "Full Stack",
    image: "/projects/realestate.png",
    description: "A premium real estate web application allowing users to search, filter, and view luxury properties and apartments.",
    link: "https://real-estate-20.netlify.app/"
  },
  {
    id: 5,
    date: "Feb 2024",
    title: "Nova Firewall Security",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    description: "Advanced firewall management interface for configuring network security rules and monitoring inbound/outbound traffic.",
    link: "https://nova-firewall.netlify.app/"
  },
  {
    id: 6,
    date: "Jan 2024",
    title: "Anti-Phishing System",
    category: "Cyber Security",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=800&auto=format&fit=crop",
    description: "AI-driven anti-phishing security dashboard detecting and mitigating email and web-based phishing attacks.",
    link: "https://phishing-attacks-nova.netlify.app/dashboard"
  },
  {
    id: 7,
    date: "Dec 2023",
    title: "Web App Fingerprinting",
    category: "Security Tools",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    description: "A tool designed to analyze and fingerprint web applications to identify underlying technologies and vulnerabilities.",
    link: "https://web-applications-fingerprint-nova.netlify.app/"
  },
  {
    id: 8,
    date: "Nov 2023",
    title: "Student Prediction AI",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    description: "An AI model dashboard predicting student performance and dropout rates based on academic and behavioral metrics.",
    link: "https://student-prediction-ai.netlify.app/dashboard"
  },
  {
    id: 9,
    date: "Oct 2023",
    title: "Sky Eagle Logistics",
    category: "Corporate",
    image: "/projects/sky_eagle.png",
    description: "Corporate website for a logistics and freight forwarding company operating out of Singapore.",
    link: "https://sky-eagle-singapore.netlify.app/"
  },
  {
    id: 10,
    date: "Sep 2023",
    title: "ProctorGuard AI",
    category: "AI & Security",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    description: "AI-powered proctoring system for monitoring academic integrity during online exams with real-time alerts.",
    link: "https://proctorguardai-ug.netlify.app/"
  },
  {
    id: 11,
    date: "Aug 2023",
    title: "Cloud File Storage",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
    description: "Secure cloud-based file storage solution with user authentication, seamless upload/download, and file management capabilities.",
    link: "https://cloud-file-storage-nova.netlify.app/"
  },
  {
    id: 12,
    date: "Jul 2023",
    title: "VisionSafe AI",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800&auto=format&fit=crop",
    description: "An AI-driven application for intelligent visual monitoring, threat detection, and advanced safety analysis.",
    link: "https://visionsafe-ai.netlify.app/"
  },
  {
    id: 13,
    date: "Jun 2023",
    title: "Finally Waste Management",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop",
    description: "A digital solution for optimizing waste management, tracking daily disposals, and promoting local recycling initiatives.",
    link: "https://finally-waste.netlify.app/"
  },
  {
    id: 14,
    date: "May 2023",
    title: "AI Certificate Generator",
    category: "Utilities",
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=800&auto=format&fit=crop",
    description: "Automated certificate generation system leveraging AI to dynamically create, assign, and verify student certificates.",
    link: "https://ai-certificate.netlify.app/"
  },
  {
    id: 15,
    date: "Apr 2023",
    title: "Financify",
    category: "FinTech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    description: "Advanced finance management dashboard for tracking expenses, calculating investments, and long-term financial planning.",
    link: "https://financify-pg.netlify.app/"
  },
  {
    id: 16,
    date: "Mar 2023",
    title: "Smart Face Attendance",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
    description: "Automated attendance tracking system utilizing advanced facial recognition technology for secure access control.",
    link: "https://nova-smart-attendance-system-face.netlify.app/"
  },
  {
    id: 17,
    date: "Feb 2023",
    title: "Intelligent CRM Portal",
    category: "Enterprise",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    description: "A smart Customer Relationship Management portal for managing sales funnels, tracking clients, and automating workflows.",
    link: "https://crmintelligent-portal.netlify.app/"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Projects() {
  return (
    <motion.section className="w-full h-full overflow-y-auto py-24 relative bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4"
          >
            My <span className="text-primary">Work</span>
          </motion.h2>
          <p className="text-muted text-lg">A showcase of my recent full stack applications and security dashboards.</p>
        </div>

        {/* 3-Column Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12"
        >
          {allProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={cardVariants}
              className="bg-card border border-border/50 rounded-2xl overflow-hidden group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,74,87,0.1)] transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Image */}
              <div className="w-full h-56 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1 relative">
                {/* Decorative glowing dot */}
                <div className="absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(255,74,87,1)] transition-all duration-300" />

                <p className="text-xs text-muted mb-3 font-bold uppercase tracking-wider">
                  {project.date} <span className="mx-2">•</span> <span className="text-primary/80">{project.category}</span>
                </p>
                
                <h3 className="text-xl font-bold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-foreground/5 hover:bg-primary hover:text-white text-foreground text-sm font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-auto w-full group/btn"
                >
                  Visit Project <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}

"use client";
import { motion } from "framer-motion";
import { Award, ShieldCheck, ExternalLink, Calendar, Key } from "lucide-react";

export default function Certifications() {
  return (
    <motion.section className="w-full h-full overflow-y-auto py-24 px-6 relative">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4"
          >
            Professional <span className="text-primary">Certification</span>
          </motion.h2>
          <p className="text-muted text-lg">Verified technical credential and expertise.</p>
        </div>

        {/* Borderless Floating Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20 mt-20 relative">
          
          {/* Huge Background Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-foreground pointer-events-none -z-10">
            <Award size={600} />
          </div>

          {/* Left Side: Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex flex-col items-center lg:items-start relative"
          >
            {/* The Badge */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/40 to-purple-500/40 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70"></div>
              <div className="w-40 h-40 bg-background border-2 border-primary/30 rounded-full flex flex-col items-center justify-center text-primary relative z-10 shadow-[0_0_50px_rgba(255,74,87,0.2)]">
                <Award size={60} className="mb-2" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-foreground">Verified</span>
              </div>
            </div>

            <div className="mt-12 text-center lg:text-left border-l-2 border-primary/30 pl-6">
              <h4 className="text-primary font-black tracking-widest uppercase text-sm mb-2">Issued By</h4>
              <p className="text-foreground text-2xl font-bold mb-4">SOFTNOVA Technology</p>
              
              <div className="flex flex-col gap-1">
                <p className="text-xs text-muted uppercase font-bold tracking-widest">Date of Issue</p>
                <p className="text-foreground font-medium flex items-center gap-2 justify-center lg:justify-start">
                  <Calendar size={14} className="text-primary" /> May 2024
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Typography & Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 font-bold uppercase tracking-wider text-xs flex items-center gap-2 w-max">
                <ShieldCheck size={14} /> Official Credential
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Frontend Developer Certification
            </h3>
            
            <p className="text-muted text-xl leading-relaxed mb-12 border-l-4 border-foreground/10 pl-6 py-2">
              A comprehensive professional certification validating advanced proficiency in modern web development architectures, UI/UX implementation, and high-performance frontend engineering.
            </p>

            <div>
              <h5 className="text-foreground font-bold mb-8 uppercase tracking-widest text-sm flex items-center gap-4">
                Key Competencies Acquired
                <div className="h-[1px] flex-1 bg-gradient-to-r from-border to-transparent"></div>
              </h5>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                {[
                  "Advanced React.js & Hooks",
                  "Modern JavaScript (ES6+)",
                  "Responsive UI Architecture",
                  "State Management (Redux/Context)",
                  "RESTful API Integration",
                  "Performance Optimization"
                ].map((skill, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors text-muted">
                      <Key size={14} />
                    </div>
                    <span className="text-foreground font-medium pt-1 group-hover:text-primary transition-colors">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}

"use client";
import { motion } from "framer-motion";
import { Briefcase, Terminal } from "lucide-react";

const experiences = [
  {
    period: "JUL 2024 - PRESENT",
    role: "Full Stack Developer",
    company: "SOFTNOVA Technology Pvt Ltd",
    location: "Peravurani, Thanjavur",
    description: [
      "Architecting and developing end-to-end, highly scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Designing and implementing secure RESTful APIs, incorporating JWT authentication and robust database schemas.",
      "Translating complex UI/UX designs into pixel-perfect, responsive frontend interfaces with optimized client-side rendering.",
      "Managing the full software development lifecycle, ensuring seamless integration between frontend components and backend services.",
      "Optimizing application performance and deploying full-stack web applications using modern platforms like Vercel and Netlify."
    ],
    tech: [
      "React.js", "Next.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap",
      "Node.js", "Express.js", "MongoDB", "REST API", "JWT Auth",
      "GitHub", "VS Code", "Figma", "Netlify", "Vercel"
    ],
    type: "Full-Stack Engineering"
  },
  {
    period: "DEC 2023 - JUN 2024",
    role: "Full Stack Developer Intern",
    company: "SOFTNOVA Technology Pvt Ltd",
    location: "Peravurani, Thanjavur",
    description: [
      "Started with a strong frontend foundation and successfully transitioned into full-stack development by mastering backend technologies from scratch during the internship.",
      "Intensively learned and implemented server-side architecture, focusing heavily on Node.js and Express.js to build robust, scalable RESTful APIs.",
      "Gained deep hands-on experience in database management by designing efficient MongoDB schemas, performing complex aggregations, and optimizing queries.",
      "Successfully implemented secure user authentication and authorization mechanisms using JWT and bcrypt, ensuring high data security standards.",
      "Actively collaborated with senior developers to bridge the gap between frontend interfaces and backend services, mastering the complete MERN stack."
    ],
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB basics", "GitHub", "Vercel"],
    type: "Internship & Backend Training"
  }
];

export default function Experience() {
  return (
    <motion.section className="w-full h-full overflow-y-auto py-24 px-6 relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4"
          >
            Professional <span className="text-primary">Experience</span>
          </motion.h2>
          <p className="text-muted text-lg">My professional journey and technical growth.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Full Stack Developer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            {/* Header aligned perfectly with timeline */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 flex justify-center shrink-0">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-widest uppercase">
                Current Role
              </h3>
            </div>
            
            <div className="relative group flex-1 flex flex-col">
              {/* Timeline Line */}
              <div className="absolute top-0 bottom-0 left-[19px] w-[2px] bg-foreground/10" />
              
              {/* Timeline Node */}
              <span className="absolute left-[9px] top-10 w-[22px] h-[22px] rounded-full bg-card border-[4px] border-primary group-hover:bg-primary transition-all duration-300 shadow-[0_0_15px_rgba(var(--primary),0.3)] group-hover:shadow-[0_0_25px_rgba(var(--primary),0.8)] z-10" />

              <div className="pl-12 pb-8 flex-1 flex flex-col transition-all duration-300">
                <div className="p-6 md:p-8 rounded-2xl border border-transparent group-hover:border-border group-hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden flex-1 flex flex-col">
                  
                  {/* Subtle Gradient background on hover */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="flex flex-col gap-1 mb-6">
                      <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2">{experiences[0].period}</span>
                      <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                        {experiences[0].role}
                      </h4>
                      <span className="text-muted font-medium text-lg">{experiences[0].company}</span>
                      <span className="text-muted text-sm mt-1">{experiences[0].location}</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {experiences[0].description.map((desc, i) => (
                        <li key={i} className="text-muted leading-relaxed text-sm md:text-base flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-primary/60" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <h5 className="text-foreground text-sm font-bold mb-4 flex items-center gap-2">
                        <Terminal size={16} className="text-primary" /> Tech Stack
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {experiences[0].tech.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-4 py-1.5 bg-foreground/5 text-muted text-xs font-semibold tracking-wide rounded-full border border-border hover:bg-primary hover:text-foreground hover:border-primary transition-all cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Full Stack Developer Intern */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            {/* Header aligned perfectly with timeline */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 flex justify-center shrink-0">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-widest uppercase">
                Previous Role
              </h3>
            </div>
            
            <div className="relative group flex-1 flex flex-col">
              {/* Timeline Line */}
              <div className="absolute top-0 bottom-0 left-[19px] w-[2px] bg-foreground/10" />
              
              {/* Timeline Node */}
              <span className="absolute left-[9px] top-10 w-[22px] h-[22px] rounded-full bg-card border-[4px] border-primary group-hover:bg-primary transition-all duration-300 shadow-[0_0_15px_rgba(var(--primary),0.3)] group-hover:shadow-[0_0_25px_rgba(var(--primary),0.8)] z-10" />

              <div className="pl-12 pb-8 flex-1 flex flex-col transition-all duration-300">
                <div className="p-6 md:p-8 rounded-2xl border border-transparent group-hover:border-border group-hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden flex-1 flex flex-col">
                  
                  {/* Subtle Gradient background on hover */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="flex flex-col gap-1 mb-6">
                      <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2">{experiences[1].period}</span>
                      <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                        {experiences[1].role}
                      </h4>
                      <span className="text-muted font-medium text-lg">{experiences[1].company}</span>
                      <span className="text-muted text-sm mt-1">{experiences[1].location}</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {experiences[1].description.map((desc, i) => (
                        <li key={i} className="text-muted leading-relaxed text-sm md:text-base flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-primary/60" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <h5 className="text-foreground text-sm font-bold mb-4 flex items-center gap-2">
                        <Terminal size={16} className="text-primary" /> Tech Stack
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {experiences[1].tech.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-4 py-1.5 bg-foreground/5 text-muted text-xs font-semibold tracking-wide rounded-full border border-border hover:bg-primary hover:text-foreground hover:border-primary transition-all cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

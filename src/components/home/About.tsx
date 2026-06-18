"use client";
import { motion } from "framer-motion";
import { User, Calendar, MapPin, Mail, Phone, Globe2, Sparkles, Heart } from "lucide-react";

const personalInfo = [
  { icon: User, label: "Name", value: "Dharshika S", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: Calendar, label: "Age", value: "22 Years", color: "text-purple-400", bg: "bg-purple-400/10" },
  { icon: Globe2, label: "Languages", value: "English, Tamil", color: "text-green-400", bg: "bg-green-400/10" },
  { icon: Phone, label: "Phone", value: "+91 7639616234", color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { icon: Mail, label: "Email", value: "sdharshika00@gmail.com", color: "text-red-400", bg: "bg-red-400/10" },
  { icon: MapPin, label: "Location", value: "Pudukkottai, TN", color: "text-orange-400", bg: "bg-orange-400/10" },
];

const skills = [
  { name: "React.js", level: 90, color: "bg-blue-400" },
  { name: "Node.js", level: 85, color: "bg-green-500" },
  { name: "Next.js", level: 80, color: "bg-white" },
  { name: "Express.js", level: 85, color: "bg-gray-400" },
  { name: "MongoDB", level: 75, color: "bg-green-400" },
  { name: "Tailwind CSS", level: 95, color: "bg-cyan-400" },
];

export default function About() {
  return (
    <motion.section 
      className="w-full h-full overflow-y-auto py-24 px-6 relative" id="about"
    >
      {/* Cute Abstract Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
            className="absolute left-1/2 -top-8 -translate-x-1/2 text-primary/20"
          >
            <Sparkles size={80} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4 relative z-10"
          >
            Discover <span className="text-primary">Me</span>
          </motion.h2>
          <p className="text-muted text-lg">A blend of passion, code, and creativity.</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
          
          {/* Left Column: Bio & Info */}
          <div className="xl:col-span-7 flex flex-col gap-8">
            
            {/* Bio Glassmorphism Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card/80 backdrop-blur-xl border border-border/50 p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute -right-10 -top-10 text-foreground/5 group-hover:text-primary/10 transition-colors duration-500 rotate-12">
                <Heart size={150} fill="currentColor" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                Hello there! <span className="text-2xl">👋</span>
              </h3>
              <p className="text-muted leading-relaxed text-lg relative z-10">
                I am a detail-oriented <span className="text-foreground font-semibold">Full Stack Engineer</span> who believes in writing clean, scalable, and impact-driven code. 
                I thrive at the intersection of beautiful UI design and robust backend logic. 
                Whether it's building a complex REST API or designing a seamless React interface, I pour my heart into every pixel and function.
              </p>
            </motion.div>

            {/* Cute Grid for Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx}
                  className="bg-card border border-border/50 p-5 rounded-2xl flex items-center gap-4 hover:border-border transition-colors group cursor-default"
                >
                  <div className={`p-3 rounded-xl ${info.bg} ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-muted text-xs font-bold uppercase tracking-wider mb-1">{info.label}</p>
                    <p className="text-foreground font-medium text-sm">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column: Skills Progress */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-5 bg-card/80 backdrop-blur-xl border border-border/50 p-8 md:p-10 rounded-[2rem] shadow-2xl flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Technical Expertise</h3>
            
            <div className="flex flex-col gap-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="w-full group">
                  <div className="flex justify-between text-sm font-bold text-muted mb-3 tracking-wide">
                    <span className="group-hover:text-foreground transition-colors">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  
                  {/* Premium Progress Bar */}
                  <div className="h-2.5 bg-foreground/10 rounded-full overflow-hidden border border-border/50 shadow-inner p-0.5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + idx * 0.1, type: "spring", bounce: 0.2 }}
                      className={`h-full rounded-full relative ${skill.color} shadow-[0_0_10px_currentColor]`}
                    >
                      {/* Cute highlight spark */}
                      <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-r from-transparent to-white/50 rounded-full blur-[2px]"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

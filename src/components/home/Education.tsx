"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    period: "2021 - 2023",
    type: "Postgraduate",
    degree: "Master's of Science in Mathematics",
    cgpa: "8.73",
    institution: "Dhanalakshmi Srinivasan College Of Arts and Science for Women (Autonomous)",
    university: "Bharathidasan University",
    description: "Developed strong analytical, problem-solving, and logical skills. Deep understanding of complex mathematical algorithms.",
    color: "from-blue-500/20 to-cyan-500/5",
    border: "group-hover:border-blue-500/50",
    glow: "bg-blue-500/20",
    text: "text-blue-400"
  },
  {
    period: "2018 - 2021",
    type: "Undergraduate",
    degree: "Bachelor of Science in Mathematics",
    cgpa: "8.03",
    institution: "Dhanalakshmi Srinivasan College Of Arts and Science for Women (Autonomous)",
    university: "Bharathidasan University",
    description: "Built a solid foundation in mathematics and logical reasoning. Participated actively in analytical problem-solving seminars.",
    color: "from-purple-500/20 to-pink-500/5",
    border: "group-hover:border-purple-500/50",
    glow: "bg-purple-500/20",
    text: "text-purple-400"
  }
];

export default function Education() {
  return (
    <motion.section 
      className="w-full h-full overflow-y-auto py-24 px-6 relative"
    >
      <div className="container mx-auto max-w-6xl z-10 relative">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4"
          >
            Academic <span className="text-primary">Journey</span>
          </motion.h2>
          <p className="text-muted text-lg">The foundation of my analytical and logical thinking.</p>
        </div>

        {/* 2-Column Side-by-Side Premium Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {education.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative bg-card rounded-3xl p-8 md:p-10 border border-border/50 ${item.border} transition-all duration-500 shadow-2xl group overflow-hidden flex flex-col h-full`}
            >
              {/* Background Gradient Effect */}
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              {/* Giant Glowing Background Icon */}
              <div className={`absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none ${item.text}`}>
                <GraduationCap size={250} />
              </div>

              {/* Header: Period & Type */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="flex flex-col gap-2">
                  <span className={`inline-block px-4 py-1.5 ${item.glow} ${item.text} rounded-full text-xs font-bold tracking-wider uppercase w-fit`}>
                    {item.period}
                  </span>
                  <span className="text-muted text-sm font-medium tracking-widest uppercase flex items-center gap-2">
                    <BookOpen size={14} /> {item.type}
                  </span>
                </div>

                {/* CGPA Badge */}
                <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full border border-border bg-foreground/10 backdrop-blur-md shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <span className={`text-2xl font-black ${item.text}`}>{item.cgpa}</span>
                  <span className="text-[10px] text-muted uppercase font-bold">CGPA</span>
                </div>
              </div>

              {/* Body: Degree & College */}
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {item.degree}
                </h3>
                
                <div className="bg-black/20 rounded-2xl p-5 mb-6 border border-border/50">
                  <h4 className="text-foreground font-semibold text-lg mb-2">{item.institution}</h4>
                  <p className="text-muted text-sm flex items-center gap-2">
                    <Award size={14} className={item.text} /> {item.university}
                  </p>
                </div>
                
                {/* Description */}
                <p className="text-muted leading-relaxed text-base flex-1">
                  {item.description}
                </p>
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}

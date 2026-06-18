"use client";
import { motion } from "framer-motion";
import { Code2, Database, Wrench } from "lucide-react";

// Using simpleicons CDN for exact official brand logos
const techCategories = [
  {
    title: "Frontend Development",
    description: "Crafting highly responsive, accessible, and pixel-perfect user interfaces using modern React architectures and utility-first styling.",
    icon: <Code2 size={24} />,
    color: "from-blue-500/20 to-cyan-500/5",
    border: "border-blue-500/20",
    text: "text-blue-400",
    skills: [
      { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
    ]
  },
  {
    title: "Backend & Database",
    description: "Designing robust, secure RESTful APIs and scalable database schemas to power high-performance full-stack applications.",
    icon: <Database size={24} />,
    color: "from-green-500/20 to-emerald-500/5",
    border: "border-green-500/20",
    text: "text-green-400",
    skills: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express/white" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "REST API", icon: "https://cdn.simpleicons.org/nodedotjs/white" },
      { name: "JWT Auth", icon: "https://cdn.simpleicons.org/jsonwebtokens/white" },
    ]
  },
  {
    title: "Tools & Deployment",
    description: "Leveraging industry-standard version control, design systems, and CI/CD deployment pipelines for seamless software delivery.",
    icon: <Wrench size={24} />,
    color: "from-purple-500/20 to-fuchsia-500/5",
    border: "border-purple-500/20",
    text: "text-purple-400",
    skills: [
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" }
    ]
  }
];

export default function TechStack() {
  return (
    <section className="w-full h-full overflow-y-auto py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl z-10 relative">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4"
          >
            Technical <span className="text-primary">Proficiency</span>
          </motion.h2>
          <p className="text-muted text-lg">A comprehensive overview of my programming languages, frameworks, and tools.</p>
        </div>

        <div className="space-y-16">
          {techCategories.map((category, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col gap-3 mb-10">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl bg-card border ${category.border} ${category.text} shadow-lg backdrop-blur-md`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-wide">
                    {category.title}
                  </h3>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent ml-4" />
                </div>
                {/* Professional Category Description */}
                <p className="text-muted text-sm md:text-base md:ml-[4.5rem] leading-relaxed max-w-3xl">
                  {category.description}
                </p>
              </div>

              {/* Grid of Tech Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className={`group relative bg-card border border-border/50 hover:${category.border} rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 shadow-xl overflow-hidden`}
                  >
                    {/* Background glow on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Tech Logo */}
                    <div className="w-12 h-12 md:w-16 md:h-16 relative z-10 drop-shadow-2xl group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    {/* Tech Name */}
                    <span className="text-sm md:text-base font-semibold text-muted group-hover:text-foreground relative z-10 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

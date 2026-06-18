"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";



export default function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="w-full h-full overflow-y-auto py-24 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 -z-10" />
      
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Let's Build Something
          </h3>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 space-y-8"
          >
            <div className="glass-card p-6 rounded-2xl border border-border/50 flex items-start gap-4 hover:border-border transition-colors group">
              <div className="p-3 bg-foreground/5 rounded-full text-primary group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-foreground font-medium mb-1">Email</h4>
                <a href="mailto:sdharshika00@gmail.com" className="text-muted hover:text-foreground transition-colors">sdharshika00@gmail.com</a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-border/50 flex items-start gap-4 hover:border-border transition-colors group">
              <div className="p-3 bg-foreground/5 rounded-full text-accent group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-foreground font-medium mb-1">Phone</h4>
                <a href="tel:+917639616234" className="text-muted hover:text-foreground transition-colors">+91 7639616234</a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-border/50 flex items-start gap-4 hover:border-border transition-colors group">
              <div className="p-3 bg-foreground/5 rounded-full text-foreground group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-foreground font-medium mb-1">Location</h4>
                <p className="text-muted">Pudukkottai, Tamil Nadu</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <form className="glass-card p-8 rounded-3xl border border-border/50 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted">Your Name</label>
                  <input type="text" id="name" className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted">Your Email</label>
                  <input type="email" id="email" className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-muted">Subject</label>
                <input type="text" id="subject" className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Project Inquiry" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted">Message</label>
                <textarea id="message" rows={5} className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Tell me about your project..."></textarea>
              </div>

              <button className="w-full md:w-auto self-start px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

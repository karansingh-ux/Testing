/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Heart, ArrowRight, Zap, Shield, Globe, MessageSquare, Twitter, Linkedin, Instagram } from "lucide-react";

const FeatureCard = ({ iconColor, bgColor }: { iconColor: string; bgColor: string }) => (
  <div className="bg-white/40 backdrop-blur-sm p-6 rounded-3xl border border-white/20 flex flex-col gap-4 w-full">
    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bgColor}`}>
      <Heart className={`w-5 h-5 ${iconColor}`} fill="currentColor" />
    </div>
    <div className="space-y-2">
      <p className="text-xs text-brand-dark/60 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id.
      </p>
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-all"
  >
    <div className="w-12 h-12 rounded-2xl bg-brand-bg-start flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-brand-dark" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-brand-dark/60 leading-relaxed">{description}</p>
  </motion.div>
);

const ProjectCard = ({ image, category, title }: { image: string; category: string; title: string }) => (
  <motion.div 
    whileHover={{ scale: 0.98 }}
    className="group cursor-pointer"
  >
    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
    </div>
    <p className="text-xs font-bold uppercase tracking-widest text-brand-dark/40 mb-2">{category}</p>
    <h3 className="text-2xl font-bold group-hover:underline underline-offset-4">{title}</h3>
  </motion.div>
);

const Sparkle8 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
  </svg>
);

const Sparkle4 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      {/* Hero Section with Gradient Background */}
      <div className="bg-linear-to-br from-brand-bg-start to-brand-bg-end">
        <main className="max-w-7xl mx-auto w-full px-6 pt-20 pb-12 grid lg:grid-cols-2 gap-12 items-center relative">
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-brand-dark tracking-tight">
              We collaborate <br />
              to build digital <br />
              experience
            </h1>
            
            <p className="text-lg text-brand-dark/70 max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel non.
            </p>
            
            <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity active:scale-95 flex items-center gap-2">
              Get started <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right Column: Image and Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-brand-dark/20 rounded-full pointer-events-none" />
            
            <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[200px] overflow-hidden border-2 border-white/50 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Professional Woman"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 left-10 text-brand-dark"
            >
              <Sparkle8 className="w-12 h-12" />
            </motion.div>
            
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 right-0 text-brand-dark"
            >
              <Sparkle4 className="w-20 h-20" />
            </motion.div>
          </motion.div>
        </main>

        {/* Bottom Feature Cards */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-7xl mx-auto w-full px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <FeatureCard iconColor="text-indigo-600" bgColor="bg-indigo-100" />
          <FeatureCard iconColor="text-amber-500" bgColor="bg-amber-100" />
          <FeatureCard iconColor="text-blue-400" bgColor="bg-blue-100" />
        </motion.section>
      </div>

      {/* Services Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark/40">Our Expertise</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Capabilities that drive <br />real impact</h2>
            </div>
            <p className="text-lg text-brand-dark/60 max-w-md">
              We combine strategy, design, and technology to help brands navigate the digital landscape and create meaningful connections.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Zap} 
              title="Digital Strategy" 
              description="Defining the roadmap for your digital success through data-driven insights and market analysis."
            />
            <ServiceCard 
              icon={Shield} 
              title="Brand Identity" 
              description="Crafting unique visual languages that resonate with your audience and stand the test of time."
            />
            <ServiceCard 
              icon={Globe} 
              title="Web Experience" 
              description="Building high-performance websites and applications that deliver seamless user journeys."
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 px-6 bg-brand-dark text-white rounded-[60px] mx-4 my-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight">Selected Work</h2>
            <button className="group flex items-center gap-2 text-lg font-medium hover:opacity-70 transition-opacity">
              View all projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <ProjectCard 
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
              category="Fintech"
              title="Modern Banking App"
            />
            <ProjectCard 
              image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800"
              category="E-commerce"
              title="Luxury Fashion Store"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <MessageSquare className="w-12 h-12 text-brand-dark/20 mx-auto mb-10" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium leading-tight max-w-4xl mx-auto mb-12 italic serif"
          >
            "The team at Digital Experience transformed our vision into a reality. Their attention to detail and creative approach is unmatched in the industry."
          </motion.h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Client" referrerPolicy="no-referrer" />
            </div>
            <div className="text-left">
              <p className="font-bold">Alex Rivera</p>
              <p className="text-sm text-brand-dark/60">CEO, TechFlow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-black/5 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Digital Experience</h3>
              <p className="text-brand-dark/60 max-w-xs">
                Building the future of digital interaction, one experience at a time.
              </p>
              <div className="flex gap-4">
                <Twitter className="w-5 h-5 cursor-pointer hover:text-indigo-600 transition-colors" />
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-indigo-600 transition-colors" />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-indigo-600 transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-brand-dark/60">
                <li className="hover:text-brand-dark cursor-pointer transition-colors">Strategy</li>
                <li className="hover:text-brand-dark cursor-pointer transition-colors">Design</li>
                <li className="hover:text-brand-dark cursor-pointer transition-colors">Development</li>
                <li className="hover:text-brand-dark cursor-pointer transition-colors">Marketing</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-brand-dark/60">
                <li className="hover:text-brand-dark cursor-pointer transition-colors">About</li>
                <li className="hover:text-brand-dark cursor-pointer transition-colors">Work</li>
                <li className="hover:text-brand-dark cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-brand-dark cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Newsletter</h4>
              <p className="text-brand-dark/60 mb-6">Stay updated with our latest news and insights.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email address" className="bg-black/5 border-none rounded-full px-6 py-3 flex-1 focus:ring-2 focus:ring-brand-dark/20 outline-none" />
                <button className="bg-brand-dark text-white p-3 rounded-full hover:opacity-90 transition-opacity">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-brand-dark/40">
            <p>© 2024 Digital Experience. All rights reserved.</p>
            <div className="flex gap-8">
              <span className="hover:text-brand-dark cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-brand-dark cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Heart, Star } from "lucide-react";

const FeatureCard = ({ iconColor, bgColor }: { iconColor: string; bgColor: string }) => (
  <div className="bg-white/40 backdrop-blur-sm p-6 rounded-3xl border border-white/20 flex flex-col gap-4 w-full max-w-[280px]">
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
    <div className="min-h-screen bg-linear-to-br from-brand-bg-start to-brand-bg-end flex flex-col overflow-hidden">
      {/* Main Hero Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 pt-20 pb-12 grid lg:grid-cols-2 gap-12 items-center relative">
        
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] text-brand-dark tracking-tight">
            We collaborate <br />
            to build digital <br />
            experience
          </h1>
          
          <p className="text-lg text-brand-dark/70 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel non.
          </p>
          
          <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity active:scale-95">
            Get started
          </button>
        </motion.div>

        {/* Right Column: Image and Decorative Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Decorative Circle Outline */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-brand-dark/20 rounded-full pointer-events-none" />
          
          {/* Main Image in Pill Shape */}
          <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[200px] overflow-hidden border-2 border-white/50 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Professional Woman"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Sparkles */}
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
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto w-full px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <FeatureCard iconColor="text-indigo-600" bgColor="bg-indigo-100" />
        <FeatureCard iconColor="text-amber-500" bgColor="bg-amber-100" />
        <FeatureCard iconColor="text-blue-400" bgColor="bg-blue-100" />
      </motion.section>
    </div>
  );
}

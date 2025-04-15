import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-7xl"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl bg-[rgba(20,20,20,0.5)] p-8 md:p-12"
        >
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="relative flex flex-col items-center justify-center text-center gap-6">
            <motion.h1 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white"
            >
              404
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl md:text-3xl font-semibold text-gray-300"
            >
              Page Not Found
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-gray-400 max-w-md"
            >
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Link
                to="/"
                className={cn(
                  "inline-flex items-center justify-center",
                  "px-6 py-3 rounded-lg",
                  "bg-white/10 hover:bg-white/20",
                  "text-white font-medium",
                  "border border-white/10",
                  "transition-all duration-200",
                  "hover:scale-105"
                )}
              >
                Go Back Home
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 
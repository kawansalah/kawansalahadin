import { motion } from "framer-motion";
import screenshot from "@/assets/images/screen.png";

export default function Instagram() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 mt-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Instagram
        </h1>
        <p className="text-white/80 text-lg">
          Follow me on Instagram for the latest updates and behind-the-scenes content!
          <br />
          <span className="font-medium bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Quality speaks for itself here ✨
          </span>
        </p>
        <div className="h-8" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center mb-8"
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full"
          >
            <span className="text-white font-medium">Click the image below to visit Instagram</span>
            <motion.div
              animate={{
                y: [0, 2, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 8.707l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 10.586V7a1 1 0 112 0v3.586l1.293-1.293a1 1 0 011.414 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="mt-8 relative">
          <a 
            href="https://www.instagram.com/kawancodevibe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/20 hover:border-white/40 transition-colors duration-300 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto">
              <img 
                src={screenshot}
                alt="Instagram Profile Screenshot"
                className="w-full h-auto object-cover object-top max-h-fit md:max-h-[600px] lg:max-h-[700px] xl:max-h-[800px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
} 
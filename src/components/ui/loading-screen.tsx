import { GradientTracing } from "./gradient-tracing"
import { motion } from "framer-motion"

export const LoadingScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ 
        opacity: {
          delay: 1.5,
          duration: 0.5
        }
      }}
      className="fixed inset-0 bg-black z-1000 flex items-center justify-center"
    >
      <div className="w-48 h-48 sm:w-64 sm:h-64">
        <GradientTracing
          width={192}
          height={192}
          baseColor="white"
          gradientColors={["#000", "#fff", "#000"]}
          animationDuration={1.5}
          strokeWidth={2}
          path="M100,0 L75,75 L125,75 L50,200 L100,100 L50,100 L100,0"
          />
      </div>
    </motion.div>
  )
} 
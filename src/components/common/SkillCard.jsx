import { motion } from "framer-motion";

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const SkillCard = ({ title, icon, children }) => (
  <motion.div 
    variants={skillVariants}
    initial="hidden"
    animate="visible"
    className="bg-gradient-to-br from-white/5 to-white/0 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="text-white/80 text-2xl">{icon}</div>
      <h3 className="text-white font-medium text-xl">{title}</h3>
    </div>
    <div className="space-y-4">
      {children}
    </div>
  </motion.div>
);

export default SkillCard; 
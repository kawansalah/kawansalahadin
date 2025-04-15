import { motion } from "framer-motion";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full bg-gradient-to-r from-white/10 to-white/5 rounded-full h-2.5 overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-gradient-to-r from-white/80 to-white/40 h-2.5 rounded-full"
      />
    </div>
  );
};

export default ProgressBar; 
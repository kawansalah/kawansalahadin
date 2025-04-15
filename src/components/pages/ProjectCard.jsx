import { motion } from "framer-motion";
import toast from "react-hot-toast";

const ProjectCard = ({ title, description, technologies, image, index }) => {
  const handleClick = () => {
    toast.success(`You clicked on ${title}! This is a test.`, {
      duration: 2000,
      position: 'top-center',
      style: {
        background: 'rgba(10, 10, 10, 0.9)',
        color: '#fff',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(8px)',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#000',
      },
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.3 }}
      className="group bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 backdrop-blur-sm overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl text-white font-medium mb-3 group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="px-3 py-1.5 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 
import { motion } from "framer-motion";
import image1 from "@/assets/images/project1.jpg";

const ProjectCard = ({ title, description, technologies, image, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.3 }}
      className="group bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 backdrop-blur-sm overflow-hidden cursor-pointer"
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

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1", 
      technologies: ["React", "Node.js"],
      image: image1
    },
    {
      title: "Project 2", 
      description: "Description of project 2",
      technologies: ["React", "TailwindCSS"],
      image: image1
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 mt-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          My Projects
        </h1>
        <p className="text-white/80 text-lg mb-8">
          Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

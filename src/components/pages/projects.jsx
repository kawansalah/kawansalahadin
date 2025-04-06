import { motion } from "framer-motion";
import image1 from "@/assets/images/project1.jpg";

const ProjectCard = ({ title, description, technologies, image }) => {
  return (
    <div className="group bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 backdrop-blur-sm overflow-hidden cursor-pointer">
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
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1.5 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
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
    <section className="relative max-w-7xl mx-auto flex items-center justify-center min-h-screen px-4 py-20">
      <div className="h-20" />
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

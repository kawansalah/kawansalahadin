import { motion } from "framer-motion";
import image1 from "@/assets/images/project1.jpg";
import ProjectCard from "./ProjectCard";

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

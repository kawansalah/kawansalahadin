import { Squares } from "@/components/ui/squares-background";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, technologies }) => {
  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <h3 className="text-xl text-white font-medium mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-white/10 rounded text-sm text-gray-300">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      technologies: ["React", "Node.js"]
    },
    {
      title: "Project 2", 
      description: "Description of project 2",
      technologies: ["React", "TailwindCSS"]
    }
  ];

  return (
    <section className="relative max-w-7xl mx-auto flex items-center justify-center min-h-screen px-4 py-20">
      <div className="w-full h-[800px] rounded-3xl overflow-hidden bg-[#0A0A0A] relative">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={40}
          borderColor="#222"
          hoverFillColor="#1A1A1A"
        />
        
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
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

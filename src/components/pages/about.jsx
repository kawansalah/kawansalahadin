import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative w-full mt-10">
      <div className="flex items-start justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate developer focused on creating elegant and efficient solutions. 
            With expertise in modern web technologies, I strive to build applications that 
            not only look great but also provide exceptional user experiences.
          </p>
          <div className="mt-8 space-y-4">
            <h2 className="text-2xl font-semibold text-white">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-white font-medium">Frontend</h3>
                <p className="text-gray-400">React, TailwindCSS</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-white font-medium">Backend</h3>
                <p className="text-gray-400">Node.js, Express, PHP , MySQL  </p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-white font-medium">UI/UX</h3>
                <p className="text-gray-400">Figma, User Research, Wireframing</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="text-white font-medium">Tools</h3>
                <p className="text-gray-400">Git</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaPhp, 
  FaDatabase, 
  FaFigma, 
  FaUserFriends, 
  FaGitAlt,
  FaCode,
  FaPalette,
  FaHashtag,
  FaChartLine,
  FaCamera,
  FaServer,
  FaNetworkWired,
  FaTools,
  FaWindows
} from 'react-icons/fa';
import { SiTailwindcss, SiAdobe, SiAdobeillustrator, SiAdobephotoshop, SiInstagram, SiTiktok } from 'react-icons/si';
import profile from "@/assets/images/compressed-profile.png";
import { useState } from "react";

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

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  const [scale, setScale] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 1));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition(prev => ({
        x: prev.x + e.movementX,
        y: prev.y + e.movementY
      }));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-5xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <button
                onClick={handleZoomIn}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                title="Zoom In"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                title="Zoom Out"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={handleReset}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                title="Reset"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={onClose}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                title="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="relative overflow-hidden rounded-lg bg-black/50">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
              <motion.img
                src={imageSrc}
                alt="Profile"
                className="w-full h-auto rounded-lg shadow-2xl cursor-grab active:cursor-grabbing"
                style={{
                  transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                  transition: isDragging ? 'none' : 'transform 0.2s ease-out'
                }}
                onLoad={() => setIsLoading(false)}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              />
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
              {Math.round(scale * 100)}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full mt-10">
      <div className="flex items-start justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex flex-col items-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-48 h-48 mb-6 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 rounded-full blur-xl opacity-30"></div>
              <img 
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-white/10 aspect-[2/1] hover:border-white/30 transition-all duration-300"
              />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              About Me
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-white/70 leading-relaxed text-center"
            >
              I'm a passionate developer focused on creating elegant and efficient solutions. 
              With expertise in modern web technologies, I strive to build applications that 
              not only look great but also provide exceptional user experiences.
            </motion.p>
          </div>
          <div className="mt-12 space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-2xl font-semibold text-white"
            >
              Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCard title="Frontend Development" icon={<FaCode className="text-3xl" />}>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaCode className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">HTML</span>
                      <span className="text-white/70">99%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={99} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaPalette className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">CSS</span>
                      <span className="text-white/70">95%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={95} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaCode className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">JavaScript</span>
                      <span className="text-white/70">85%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={85} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaReact className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">React</span>
                      <span className="text-white/70">85%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={85} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <SiTailwindcss className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">TailwindCSS</span>
                      <span className="text-white/70">90%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={90} />
                </div>
              </SkillCard>

              <SkillCard title="Backend Development" icon={<FaCode className="text-3xl" />}>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaNodeJs className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">Node.js (training)</span>
                      <span className="text-white/70">60%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={60} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaPhp className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">PHP</span>
                      <span className="text-white/70">80%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={80} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaDatabase className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">MySQL</span>
                      <span className="text-white/70">85%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={85} />
                </div>
              </SkillCard>

              <SkillCard title="UI/UX Design" icon={<FaCode className="text-3xl" />}>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaFigma className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">Figma</span>
                      <span className="text-white/70">98%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={98} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaUserFriends className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">User Research</span>
                      <span className="text-white/70">90%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={90} />
                </div>
              </SkillCard>

              <SkillCard title="Tools & Version Control" icon={<FaCode className="text-3xl" />}>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaGitAlt className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">Git</span>
                      <span className="text-white/70">90%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={90} />
                </div>
              </SkillCard>

              <SkillCard title="Graphic Design" icon={<FaPalette className="text-3xl" />}>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <SiAdobephotoshop className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">Photoshop</span>
                      <span className="text-white/70">95%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={95} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <SiAdobeillustrator className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">Illustrator</span>
                      <span className="text-white/70">80%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={80} />
                </div>
              </SkillCard>

              <SkillCard title="Social Media Management" icon={<FaHashtag className="text-3xl" />}>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <SiInstagram className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">Instagram</span>
                      <span className="text-white/70">95%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={95} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <SiTiktok className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">TikTok</span>
                      <span className="text-white/70">90%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={90} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaChartLine className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">Analytics</span>
                      <span className="text-white/70">85%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={85} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaCamera className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">Content Creation</span>
                      <span className="text-white/70">95%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={95} />
                </div>
              </SkillCard>

              <SkillCard title="IT Solutions & Maintenance" icon={<FaServer className="text-3xl" />}>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaWindows className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">Windows Systems</span>
                      <span className="text-white/70">95%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={95} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaNetworkWired className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">Network Management</span>
                      <span className="text-white/70">85%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={85} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaTools className="text-white/80" />
                    <div className="flex justify-between w-full">
                      <span className="text-white/70">Hardware Maintenance</span>
                      <span className="text-white/70">90%</span>
                    </div>
                  </div>
                  <ProgressBar percentage={90} />
                </div>
              </SkillCard>

            </div>
          </div>
        </motion.div>
      </div>
      <ImageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        imageSrc={profile}
      />
    </section>
  );
}

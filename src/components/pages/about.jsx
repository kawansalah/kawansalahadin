import { motion } from "framer-motion";
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
import profile from './path/to/profile.jpg';

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
          <div className="flex flex-col items-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-48 h-48 mb-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 rounded-full blur-xl opacity-30"></div>
              <img 
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-white/10"
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
    </section>
  );
}

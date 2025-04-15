import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="w-full bg-[rgba(8,8,8,0.67)] py-16 md:py-16 pb-24 md:pb-16 mt-20 relative group">
      {/* Top Border with Smooth Gradient Animation */}
      <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/40 transition-all duration-1000 ease-in-out"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/40 transition-all duration-2000 ease-in-out translate-x-[-100%] group-hover:translate-x-[100%]"></div>
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Column Separators - Desktop */}
            <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-[1px] overflow-hidden -translate-x-12">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-1000 ease-in-out"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-2000 ease-in-out translate-y-[-100%] group-hover:translate-y-[100%]"></div>
            </div>
            <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-[1px] overflow-hidden -translate-x-12">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-1000 ease-in-out"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-2000 ease-in-out translate-y-[-100%] group-hover:translate-y-[100%]"></div>
            </div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-6 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Mobile Separator */}
              <div className="md:hidden absolute -bottom-12 left-0 right-0 h-[1px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-1000 ease-in-out"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-2000 ease-in-out translate-x-[-100%] group-hover:translate-x-[100%]"></div>
              </div>
              <h3 className="text-2xl md:text-xl lg:text-2xl font-bold text-white/90 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:kawan.salahadin@gmail.com"
                  className="flex items-center gap-4 text-white/70 hover:text-white transition-all duration-300 group"
                >
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                    <MdEmail className="h-6 w-6 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform text-base md:text-sm lg:text-sm 2xl:text-base">
                    <span className="hidden md:inline lg:hidden">kawan.salahadin</span>
                    <span className="inline md:hidden lg:inline">kawan.salahadin@gmail.com</span>
                  </span>
                </a>
                <a
                  href="tel:+9647706673769"
                  className="flex items-center gap-4 text-white/70 hover:text-white transition-all duration-300 group"
                >
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                    <FaPhone className="h-6 w-6 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform text-base md:text-sm lg:text-base">+964 770 667 3769</span>
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="space-y-6 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Mobile Separator */}
              <div className="md:hidden absolute -bottom-12 left-0 right-0 h-[1px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-1000 ease-in-out"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-2000 ease-in-out translate-x-[-100%] group-hover:translate-x-[100%]"></div>
              </div>
              <h3 className="text-2xl md:text-xl lg:text-2xl font-bold text-white/90 mb-4">Quick Links</h3>
              <div className="space-y-4">
                <a
                  href="/about"
                  className="block text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2 text-base md:text-sm lg:text-base"
                >
                  About Me
                </a>
                <a
                  href="/projects"
                  className="block text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2 text-base md:text-sm lg:text-base"
                >
                  My Projects
                </a>
                <a
                  href="/contact"
                  className="block text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2 text-base md:text-sm lg:text-base"
                >
                  Contact
                </a>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div 
              className="space-y-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-xl lg:text-2xl font-bold text-white/90 mb-4">Connect With Me</h3>
              <div className="flex gap-6">
                <a
                  href="https://facebook.com/kawan.salah.offical"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 md:p-2 lg:p-3 bg-white/5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <FaFacebook className="h-6 w-6 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/kawan-salahadin-abubakr-b14030350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 md:p-2 lg:p-3 bg-white/5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin className="h-6 w-6 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                </a>
                <a
                  href="/instagram"
                  className="p-3 md:p-2 lg:p-3 bg-white/5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <FaInstagram className="h-6 w-6 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div 
            className="mt-16 pt-8 border-t border-white/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-center text-white/50 text-sm md:text-xs lg:text-sm">
              © {new Date().getFullYear()} Kawan Salahadin. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
} 
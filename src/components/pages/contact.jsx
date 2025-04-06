import { Squares } from "@/components/ui/squares-background";
import { motion } from "framer-motion";

export default function Contact() {
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
            className="max-w-3xl w-full"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Me
            </h1>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 bg-white/5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white/10 text-white py-3 rounded-lg hover:bg-white/20 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

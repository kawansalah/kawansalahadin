import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative w-full h-fit mt-10">
      <div className="flex items-start justify-center p-8">
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
    </section>
  );
}

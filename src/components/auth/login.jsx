import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { toast } from "react-hot-toast";
import { Squares } from "@/components/ui/squares-background";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }

    const success = login(username, password);
    
    if (success) {
      toast.success("Login successful");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials");
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full">
      <div className="w-full h-full bg-[#0A0A0A] relative">
        <Squares
          direction="diagonal"
          speed={0.2}
          squareSize={40}
          borderColor="#222"
          hoverFillColor="#1A1A1A"
        />
        <div className="absolute inset-0 overflow-auto flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md mx-4"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative rounded-2xl bg-[rgba(15,15,15,0.5)] p-8 backdrop-blur-sm"
            >
              <GlowingEffect
                spread={20}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mb-8"
                >
                  <h1 className="text-3xl font-bold text-center mb-2">
                    <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                      Admin Login
                    </span>
                  </h1>
                  <p className="text-gray-400 text-center text-sm">Enter your credentials to access the admin panel</p>
                </motion.div>
                
                {error && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-white text-sm"
                  >
                    {error}
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                        Username
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="w-full p-3 pl-4 bg-black/30 border border-white/10 rounded-lg text-white focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-200"
                          placeholder="Enter username"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full p-3 pl-4 bg-black/30 border border-white/10 rounded-lg text-white focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-200"
                          placeholder="Enter password"
                        />
                      </div>
                      {/* <p className="text-xs text-gray-500 mt-2 text-right">
                        Demo: admin / password
                      </p> */}
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-3 px-4 bg-gradient-to-r from-white/20 to-white/5 hover:from-white/30 hover:to-white/10 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center border border-white/10 hover:border-white/30"
                    >
                      <span className="relative">Login</span>
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 
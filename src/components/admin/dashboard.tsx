import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="ml-64 p-8 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl bg-[rgba(20,20,20,0.5)] p-8"
      >

        <div className="relative">
          <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stats Cards */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 rounded-lg p-6 border border-white/10"
            >
              <h3 className="text-gray-400 text-sm mb-2">Total Users</h3>
              <p className="text-3xl font-bold text-white">1,234</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 rounded-lg p-6 border border-white/10"
            >
              <h3 className="text-gray-400 text-sm mb-2">Total Content</h3>
              <p className="text-3xl font-bold text-white">567</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 rounded-lg p-6 border border-white/10"
            >
              <h3 className="text-gray-400 text-sm mb-2">Active Sessions</h3>
              <p className="text-3xl font-bold text-white">89</p>
            </motion.div>
          </div>
          
          <div className="mt-8">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <button className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200">
                  Add New User
                </button>
                <button className="py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition duration-200">
                  Create Content
                </button>
                <button className="py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition duration-200">
                  View Analytics
                </button>
                <button className="py-2 px-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition duration-200">
                  System Status
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4">Account Info</h2>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-400">Username:</span>
                  <span className="text-white font-medium">{user?.username || 'admin'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-400">Role:</span>
                  <span className="text-white font-medium">{user?.role || 'Administrator'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-400">Last Login:</span>
                  <span className="text-white font-medium">Just now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 
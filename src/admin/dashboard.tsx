import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  FileText, 
  Activity, 
  PlusCircle, 
  BarChart2, 
  Server, 
  UserPlus, 
  FilePlus 
} from "lucide-react";

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="relative w-full p-8 min-h-screen ">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl bg-[#111111] p-8 shadow-xl"
      >
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-white">Dashboard</h1>
            <div className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleString()}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-[#1A1A1A] rounded-xl p-6 border border-white/10 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-400 text-sm mb-2">Total Users</h3>
                  <p className="text-3xl font-bold text-white">1,234</p>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-400">↑ 12% from last month</div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-[#1A1A1A] rounded-xl p-6 border border-white/10 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-400 text-sm mb-2">Total Content</h3>
                  <p className="text-3xl font-bold text-white">567</p>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-400">↑ 8% from last month</div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-[#1A1A1A] rounded-xl p-6 border border-white/10 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-400 text-sm mb-2">Active Sessions</h3>
                  <p className="text-3xl font-bold text-white">89</p>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <Activity className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-400">↑ 5% from last month</div>
            </motion.div>
          </div>
          
          <div className="mt-8">
            <div className="bg-[#1A1A1A] rounded-xl p-6 border border-white/10 shadow-lg">
              <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Button variant="default" className="w-full h-12 bg-white text-black hover:bg-white/90">
                    <UserPlus className="w-5 h-5 mr-2" />
                    Add New User
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Button variant="secondary" className="w-full h-12 bg-white/10 text-white hover:bg-white/20">
                    <FilePlus className="w-5 h-5 mr-2" />
                    Create Content  
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Button variant="outline" className="w-full h-12 border-white/20 text-black  hover:bg-white/5 hover:text-white">
                    <BarChart2 className="w-5 h-5 mr-2" />
                    View Analytics
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Button variant="destructive" className="w-full h-12 bg-red-500/10 text-red-400 hover:bg-red-500/20">
                    <Server className="w-5 h-5 mr-2" />
                    System Status
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="bg-[#1A1A1A] rounded-xl p-6 border border-white/10 shadow-lg">
              <h2 className="text-xl font-bold text-white mb-6">Account Info</h2>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-white/10">
                  <span className="text-gray-400">Username:</span>
                  <span className="text-white font-medium">{user?.username || 'admin'}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/10">
                  <span className="text-gray-400">Role:</span>
                  <span className="text-white font-medium">{user?.role || 'Administrator'}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/10">
                  <span className="text-gray-400">Last Login:</span>
                  <span className="text-white font-medium">Just now</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-400">Account Status:</span>
                  <span className="text-white font-medium">Active</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
} 
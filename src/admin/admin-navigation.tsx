import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HomeIcon,
  SettingsIcon,
  UsersIcon,
  FileTextIcon,
  LogOutIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const adminNavItems = [
  { name: "Dashboard", url: "/admin/dashboard", icon: HomeIcon },
  { name: "Users", url: "/admin/users", icon: UsersIcon },
  { name: "Content", url: "/admin/content", icon: FileTextIcon },
  { name: "Settings", url: "/admin/settings", icon: SettingsIcon },
];

export function AdminNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/admin");
  };

  const renderNavItems = (isCollapsed: boolean) => (
    <div className="flex-1 space-y-2">
      {adminNavItems.map((item) => {
        const isActive = location.pathname === item.url;
        return (
          <Link
            key={item.url}
            to={item.url}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg",
              "text-gray-300 hover:text-white",
              "transition-all duration-200",
              isActive && "bg-white/10 text-white",
              isCollapsed && "justify-center"
            )}
          >
            <item.icon className={cn("h-5 w-5", isCollapsed && "h-6 w-6")} />
            {!isCollapsed && <span>{item.name}</span>}
          </Link>
        );
      })}
    </div>
  );

  const renderDesktopSidebar = () => (
    <motion.nav
      className={cn(
        "relative h-auto bg-[rgba(20,20,20,0.8)] border-r border-white/10 p-4 z-50",
        isCollapsed ? "w-20" : "w-64"
      )}
      initial={false}
      animate={{ width: isCollapsed ? "5rem" : "16rem" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col h-full overflow-hidden">
        <div className="mb-8 flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-white">Admin Panel</h1>
              {user && (
                <p className="text-sm text-gray-400">
                  Welcome, {user.username}
                </p>
              )}
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRightIcon className="h-5 w-5 text-white" />
            ) : (
              <ChevronLeftIcon className="h-5 w-5 text-white" />
            )}
          </Button>
        </div>

        {renderNavItems(isCollapsed)}

        <div className="mt-auto">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className={cn(
              "flex items-center w-full gap-3 px-4 py-3 rounded-lg",
              "text-gray-300 hover:text-white",
              "transition-all duration-200",
              "hover:bg-white/10",
              isCollapsed && "justify-center"
            )}
          >
            <LogOutIcon className={cn("h-5 w-5", isCollapsed && "h-6 w-6")} />
            {!isCollapsed && <span>Logout</span>}
          </Button>
        </div>
      </div>
    </motion.nav>
  );

  const renderMobileSidebar = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed bg-white top-4 left-4 z-50 md:hidden"
        >
          <MenuIcon className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-64 p-0 bg-[rgba(20,20,20,0.8)] border-r border-white/10"
      >
        <div className="flex flex-col h-full p-4">
          <div className="mb-8">
            <h1 className="text-xl font-bold text-white">Admin Panel</h1>
            {user && (
              <p className="text-sm text-gray-400">Welcome, {user.username}</p>
            )}
          </div>

          {renderNavItems(false)}

          <div className="mt-auto">
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="flex items-center w-full gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10"
            >
              <LogOutIcon className="h-5 w-5" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return <>{isMobile ? renderMobileSidebar() : renderDesktopSidebar()}</>;
}

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  logo?: React.ReactNode;
  getInTouch?: {
    text: string;
    onClick: () => void;
  };
}

export function NavBar({ items, className, logo, getInTouch }: NavBarProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    const currentPath = location.pathname;
    const matchingItem = items.find((item) => item.url === currentPath);
    return matchingItem?.name || items[0].name;
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    const matchingItem = items.find((item) => item.url === currentPath);
    if (matchingItem) {
      setActiveTab(matchingItem.name);
    }
  }, [location.pathname, items]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        `fixed ${isMobile ? "bottom-0" : "top-0"} md:top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4 md:pt-6 pb-6 md:pb-0`,
        className
      )}
    >
      <div
        className={`flex items-center ${
          isMobile ? "justify-center" : "justify-between"
        }`}
      >
        {logo && <div className="hidden md:flex flex-shrink-0">{logo}</div>}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <Link
                  key={item.name}
                  to={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-4 sm:px-6 py-2 rounded-full transition-colors",
                    "text-foreground/80 hover:text-primary",
                    isActive && "bg-muted text-primary"
                  )}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                        <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
        {getInTouch && (
          <InteractiveHoverButton
            onClick={getInTouch.onClick}
            className="hidden md:flex rounded-full text-white outline-1 outline-white/40 hover:bg-primary/10 hover:text-primary hover:scale-105 hover:border-primary transition-all duration-500 border border-transparent cursor-pointer "
          >
            {getInTouch.text}
          </InteractiveHoverButton>
        )}
      </div>
    </div>
  );
}

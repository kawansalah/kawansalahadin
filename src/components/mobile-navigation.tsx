import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

interface MobileNavigationProps {
  className?: string;
  logo?: React.ReactNode;
  getInTouch?: {
    text: string;
    onClick: () => void;
  };
}

export function MobileNavigation({
  className,
  logo,
  getInTouch,
}: MobileNavigationProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) return null;

  return (
    <div
      className={cn("fixed top-0 z-50 w-full max-w-7xl px-4 py-4 pt-6 backdrop-blur-md bg-black/20", className)}
    >
      <div className="flex items-center justify-between">
        {logo && <div className="flex-shrink-0">{logo}</div>}
        {getInTouch && (
          <InteractiveHoverButton
            onClick={getInTouch.onClick}
            className="bg-white text-black rounded-full text-sm px-3 py-1.5 hover:bg-primary/10 hover:text-primary hover:scale-105 hover:border-primary transition-all duration-500 border border-transparent cursor-pointer"
          >
            {getInTouch.text}
          </InteractiveHoverButton>
        )}
      </div>
    </div>
  );
}

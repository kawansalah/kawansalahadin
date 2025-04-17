import { Squares } from "@/components/ui/squares-background";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const scrollableDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [location.pathname]);

  return (
    <div className="fixed inset-0 w-full h-full">
      <div className="w-full h-full">
        <div className="w-full h-full bg-[#0A0A0A] relative">
          <Squares
            direction="diagonal"
            speed={0.2}
            squareSize={40}
            borderColor="#222"
            hoverFillColor="#1A1A1A"
          />
          <div ref={scrollableDivRef} className="absolute inset-0 overflow-auto overflow-x-clip">
            <div className="flex flex-row flex-1/2 min-h-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
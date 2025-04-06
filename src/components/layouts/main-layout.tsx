import { Squares } from "@/components/ui/squares-background";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 w-full h-full">
      <div className="w-full h-full">
        <div className="w-full h-full overflow-hidden bg-[#0A0A0A] relative">
          <Squares
            direction="diagonal"
            speed={0.2}
            squareSize={40}
            borderColor="#222"
            hoverFillColor="#1A1A1A"
          />
          <div className="absolute inset-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 
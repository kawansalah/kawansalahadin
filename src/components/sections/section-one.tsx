import { Squares } from "@/components/ui/squares-background";
import logo from "@/assets/logo.png";
import AnimatedWordCycle from "@/components/ui/animated-text-cycle";

export function SectionOne() {
  return (
    <section className="relative max-w-7xl flex items-center justify-center px-2">
      <div className="max-w-full mx-auto">
        <div className="w-full 2xl:h-[800px] xl:h-[800px] md:h-[800px] xs:h-[600px] rounded-4xl overflow-hidden bg-[#0A0A0A] relative">
          <Squares
            direction="diagonal"
            speed={0.2}
            squareSize={40}
            borderColor="#222"
            hoverFillColor="#1A1A1A"
          />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="flex items-center justify-center h-full px-10">
              <div className="p-4 max-w-[500px]">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-left text-gray-400">
                  Your{" "}
                  <AnimatedWordCycle
                    words={[
                      "business",
                      "team",
                      "workflow",
                      "productivity",
                      "projects",
                      "analytics",
                      "dashboard",
                      "platform",
                    ]}
                    interval={3000}
                    className={"text-white font-bold  md:font-medium"}
                  />{" "}
                  deserves better tools
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import logo from "@/assets/logo.png";
import AnimatedWordCycle from "@/components/ui/animated-text-cycle";
import { ServicesSection } from "./services-section";

export function Home() {
  return (
    <>
      <section className="w-full 2xl:h-[900px] lg:h-[600px] md:h-[500px] sm:h-[500px] xs:h-[500px] overflow-hidden overflow-x-clip">
        <div className="flex items-center justify-center h-full px-10 overflow-hidden">
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
                className={"text-white font-bold  md:font-medium min-w-[300px] inline-block"}
              />{" "}
              deserves better tools
            </h1>
          </div>
        </div>
      </section>
      <ServicesSection />
    </>
  );
} 
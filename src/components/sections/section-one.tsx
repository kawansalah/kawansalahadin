import logo from "@/assets/logo.png";
import AnimatedWordCycle from "@/components/ui/animated-text-cycle";

export function SectionOne() {
  return (
    <section className="relative w-full h-full">
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
    </section>
  );
}

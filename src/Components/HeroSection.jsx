import { ChevronsDown } from "lucide-react";
import { useScrollFade } from "@/lib/useScrollFade";

export const HeroSection = () => {
  const { fadeOut } = useScrollFade();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <div style={{ opacity: fadeOut(0, 150) }} className="inline-block">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            </div>

            <div
              style={{ opacity: fadeOut(40, 190) }}
              className="inline-block ml-3"
            >
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                Wilson
              </span>
            </div>

            <div
              style={{ opacity: fadeOut(80, 230) }}
              className="inline-block ml-3"
            >
              <span className="text-gradient opacity-0 animate-fade-in-delay-2">
                Cho
              </span>
            </div>
          </h1>

          <div style={{ opacity: fadeOut(120, 270) }}>
            <p className="text-lg md:text-xl mt-6 text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              A curious builder who turns ideas into software, bugs into
              lessons, and coffee into code ☕💻
              <br />
              <br />
              Exploring the intersection of coding, finance, investing and
              more...
              <br />
              <br />
              Constantly pushing to build myself better than yesterday.
            </p>
          </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              style={{ opacity: fadeOut(120, 270) }}
              className="cosmic-button"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div style={{ opacity: fadeOut(0, 300) }}>
        <ChevronsDown className="h-8 w-8 text-primary absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" />
      </div>
    </section>
  );
};

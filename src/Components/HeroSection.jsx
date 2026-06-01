import { ChevronsDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <div
              style={{ "--reveal-delay": "80ms" }}
              className="hero-reveal inline-block"
            >
              <span>Hi, I'm</span>
            </div>

            <div
              style={{ "--reveal-delay": "180ms" }}
              className="hero-reveal inline-block ml-3"
            >
              <span className="text-primary">Wilson</span>
            </div>

            <div
              style={{ "--reveal-delay": "280ms" }}
              className="hero-reveal inline-block ml-3"
            >
              <span className="text-gradient">Cho</span>
            </div>
          </h1>

          <div style={{ "--reveal-delay": "420ms" }} className="hero-reveal">
            <p className="text-lg md:text-xl mt-6 text-muted-foreground max-w-2xl mx-auto">
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

          <div
            style={{ "--reveal-delay": "640ms" }}
            className="hero-reveal pt-4"
          >
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>

          <div
            style={{ "--reveal-delay": "860ms" }}
            className="hero-reveal pt-8 flex justify-center"
            aria-hidden="true"
          >
            <ChevronsDown className="h-8 w-8 text-primary animate-bounce-smooth" />
          </div>
        </div>
      </div>
    </section>
  );
};

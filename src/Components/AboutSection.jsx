import { Briefcase, Code, Wrench } from "lucide-react";
import { useInView } from "@/lib/useInView";

export const AboutSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      data-visible={isInView ? "true" : "false"}
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2
          style={{ "--reveal-delay": "0ms" }}
          className="reveal-up text-3xl md:text-4xl font-bold mb-23 text-center"
        >
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3
              style={{ "--reveal-delay": "120ms" }}
              className="reveal-up text-2xl font-semibold"
            >
              Passionate Web Developer
            </h3>
            <p
              style={{ "--reveal-delay": "200ms" }}
              className="reveal-up text-muted-foreground"
            >
              I'm a full-stack developer who graduated in 2024 and genuinely
              enjoys building things that actually works, looks good, and runs
              smooth. I like taking ideas from "what if" to "it works", handling
              both the frontend polish and the backend logic along the way.
            </p>
            <p
              style={{ "--reveal-delay": "280ms" }}
              className="reveal-up text-muted-foreground"
            >
              On the frontend, I craft clean and responsive interfaces using
              React and Tailwind CSS. On the backend, I work with C# and .NET
              Core to build reliable application services. I've also explored
              Java, Flutter, and Python, which helps me remain flexible and
              comfortable jumping between different tools and platforms. I'm
              always learning, experimenting, and improving because - there's
              always a better way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                style={{ "--reveal-delay": "360ms" }}
                href="#contact"
                className="reveal-up cosmic-button"
              >
                Contact Me
              </a>
              <a
                style={{ "--reveal-delay": "430ms" }}
                href=""
                className="reveal-up px-6 py-2 rounded-full border border-primary text-primary font-semibold hover:bg-primary/30 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div
              style={{ "--reveal-delay": "180ms" }}
              className="reveal-up gradient-border motion-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Application Development
                  </h4>
                  <p className="text-muted-foreground">
                    Build applications with modern interactive UI and solid
                    backend services on clean structure and maintainable code.
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{ "--reveal-delay": "290ms" }}
              className="reveal-up gradient-border motion-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Analysis</h4>
                  <p className="text-muted-foreground">
                    Breaking down complex problems, identifying real user pain
                    points, and turning them into clear and actionable
                    solutions.
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{ "--reveal-delay": "400ms" }}
              className="reveal-up gradient-border motion-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Delivery & Ownership
                  </h4>
                  <p className="text-muted-foreground">
                    Taking ownership of features and projects, managing tasks,
                    priorities, and deadlines to deliver reliable results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

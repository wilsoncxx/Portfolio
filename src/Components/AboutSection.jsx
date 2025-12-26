import { Briefcase, Code, Wrench } from "lucide-react";
import { useScrollFade } from "@/lib/useScrollFade";

export const AboutSection = () => {
  const { fadeIn, fadeOut } = useScrollFade();

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2
          style={{ opacity: fadeIn(270, 700) * fadeOut(870, 980) }}
          className="text-3xl md:text-4xl font-bold mb-23 text-center"
        >
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3
              style={{ opacity: fadeIn(550, 750) * fadeOut(980, 1180) }}
              className="text-2xl font-semibold"
            >
              Passionate Web Developer
            </h3>
            <p
              style={{ opacity: fadeIn(550, 750) * fadeOut(980, 1180) }}
              className="text-muted-foreground"
            >
              I'm a full-stack developer who graduated in 2024 and genuinely
              enjoys building things that actually works, looks good, and runs
              smooth. I like taking ideas from "what if" to "it works", handling
              both the frontend polish and the backend logic along the way.
            </p>
            <p
              style={{ opacity: fadeIn(550, 750) * fadeOut(980, 1180) }}
              className="text-muted-foreground"
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
                style={{ opacity: fadeIn(650, 720) * fadeOut(1050, 1150) }}
                href="#contact"
                className="cosmic-button"
              >
                Contact Me
              </a>
              <a
                style={{ opacity: fadeIn(750, 820) * fadeOut(1200, 1350) }}
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary font-semibold hover:bg-primary/30 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div
              style={{ opacity: fadeIn(450, 570) * fadeOut(930, 1130) }}
              className="gradient-border p-6 card-hover"
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
              style={{ opacity: fadeIn(600, 720) * fadeOut(1080, 1280) }}
              className="gradient-border p-6 card-hover"
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
              style={{ opacity: fadeIn(750, 870) * fadeOut(1230, 1430) }}
              className="gradient-border p-6 card-hover"
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

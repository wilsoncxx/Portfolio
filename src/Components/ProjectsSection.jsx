import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useInView } from "@/lib/useInView";

const projects = [
  {
    id: 1,
    title: "Weather App",
    description:
      "A beautiful page that displays the weather of any city, with weather forecasting.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Firebase"],
    demoUrl: "https://wilsoncxx.github.io/",
    githubUrl: "https://github.com/wilsoncxx/wilsoncxx.github.io",
  },
  {
    id: 2,
    title: "Personal Finance Tracker",
    description:
      "A dashboard that allows users to track their personal finances, including income and expenses.",
    image: "/projects/project2.png",
    tags: ["React", "Bootstrap", "Git"],
    demoUrl: "#",
    githubUrl: "https://github.com/wilsoncxx/Personal_Finance_Application",
  },
  {
    id: 3,
    title: "Rover Quest: Mars Explorer",
    description:
      "A game exploring Mars map to collect resources while avoiding obstacles and traps.",
    image: "/projects/project3.png",
    tags: ["C++"],
    demoUrl: "#",
    githubUrl: "https://github.com/wilsoncxx/Mars_Rover_Game",
  },
];

export const ProjectsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      id="projects"
      ref={ref}
      data-visible={isInView ? "true" : "false"}
      className="py-24 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl">
        <h2
          style={{ "--reveal-delay": "0ms" }}
          className="reveal-up text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p
          style={{ "--reveal-delay": "90ms" }}
          className="reveal-up text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Here are some of the projects I've worked on.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <article
              key={project.id}
              style={{ "--reveal-delay": `${210 + key * 110}ms` }}
              className="reveal-up motion-card project-card group bg-card rounded-lg overflow-hidden shadow-xs"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-1 flex-col text-left">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="mt-6 flex justify-between items-center gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} demo`}
                    className="project-link"
                  >
                    <ExternalLink size={17} />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} source code`}
                    className="project-link"
                  >
                    <Github size={17} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          style={{ "--reveal-delay": "610ms" }}
          className="reveal-up text-center mt-12"
        >
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/wilsoncxx"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/lib/useInView";

const skills = [
  // Languages
  { name: "C#", level: 95, category: "languages" },
  { name: "Java", level: 80, category: "languages" },
  { name: "HTML/CSS/JavaScript", level: 95, category: "languages" },
  //   { name: "HTML/CSS", level: 90, category: "languages" },
  { name: "C++", level: 70, category: "languages" },
  { name: "SQL", level: 95, category: "languages" },
  { name: "Python", level: 70, category: "languages" },
  //   { name: "Dart", level: 90, category: "languages" },

  // Frameworks
  { name: "ReactJS", level: 95, category: "frameworks" },
  { name: "Tailwind CSS", level: 95, category: "frameworks" },
  //   { name: "Bootstrap", level: 80, category: "frameworks" },
  { name: ".NET Core", level: 95, category: "frameworks" },
  { name: "Entity Framework", level: 95, category: "frameworks" },
  //   { name: "JavaFX", level: 80, category: "frameworks" },
  //   { name: "Spring Boot", level: 80, category: "frameworks" },
  //   { name: "WordPress", level: 75, category: "frameworks" },
  { name: "Flutter", level: 90, category: "frameworks" },

  // Concepts
  { name: "OOP", level: 95, category: "concepts" },
  { name: "Data Structures & Algorithms", level: 95, category: "concepts" },
  { name: "Debugging", level: 95, category: "concepts" },
  //   { name: "SSH", level: 80, category: "concepts" },
  { name: "Linux", level: 85, category: "concepts" },
  { name: "DevOps", level: 85, category: "concepts" },

  // Tools
  //   { name: "Visual Studio/VSCode", level: 95, category: "tools" },
  { name: "Git", level: 95, category: "tools" },
  { name: "Postman", level: 95, category: "tools" },
  //   { name: "PostgreSQL", level: 90, category: "tools" },
  //   { name: "SSMS", level: 90, category: "tools" },
  { name: "Azure DevOps Server", level: 90, category: "tools" },
  //   { name: "Figma", level: 80, category: "tools" },
  { name: "LaTeX", level: 95, category: "tools" },
  { name: "Mermaid", level: 90, category: "tools" },
];

const categories = ["all", "languages", "frameworks", "concepts", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { ref, isInView } = useInView();

  const filteredSkills = useMemo(
    () =>
      skills.filter(
        (skill) =>
          activeCategory === "all" || skill.category === activeCategory,
      ),
    [activeCategory],
  );

  return (
    <section
      id="skills"
      ref={ref}
      data-visible={isInView ? "true" : "false"}
      className="py-24 px-4 relative overflow-hidden bg-secondary/30"
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-5xl">
        <h2
          style={{ "--reveal-delay": "0ms" }}
          className="reveal-up text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          My <span className="text-primary"> Skills</span>
        </h2>

        <p
          style={{ "--reveal-delay": "90ms" }}
          className="reveal-up text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Tools and concepts I use to build reliable, responsive, and polished
          software.
        </p>

        <div
          style={{ "--reveal-delay": "170ms" }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "category-button",
                activeCategory === category
                  ? "category-button-active"
                  : "category-button-idle",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, key) => (
            <div
              key={skill.name}
              style={{ "--reveal-delay": `${240 + key * 55}ms` }}
              className="reveal-up motion-card bg-card p-6 rounded-lg shadow-xs"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="skill-meter" aria-hidden="true">
                <div
                  className="skill-meter-fill"
                  style={{
                    "--skill-level": `${skill.level}%`,
                    "--reveal-delay": `${360 + key * 55}ms`,
                  }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

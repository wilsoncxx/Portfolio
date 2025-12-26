import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollFade } from "@/lib/useScrollFade";

const skills = [
  // Languages
  { name: "C#", level: 95, category: "languages" },
  { name: "Java", level: 80, category: "languages" },
  { name: "HTML/CSS/JavaScript", level: 95, category: "languages" },
  //   { name: "HTML/CSS", level: 90, category: "languages" },
  { name: "C++", level: 70, category: "languages" },
  { name: "SQL", level: 90, category: "languages" },
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
  const { fadeIn, fadeOut } = useScrollFade();

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2
          style={{ opacity: fadeIn(1000, 1380) * fadeOut(1650, 1780) }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary"> Skills</span>
        </h2>

        <div
          style={{ opacity: fadeIn(1200, 1400) * fadeOut(1730, 1830) }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              style={{ opacity: fadeIn(1280, 1480) }}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
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

import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const skills = [
  {
    icon: <FaReact />,
    name: "React",
    level: 92,
    color: "text-cyan-500",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    level: 85,
    color: "text-blue-500",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    level: 95,
    color: "text-sky-500",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    level: 78,
    color: "text-black dark:text-white",
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
    level: 90,
    color: "text-yellow-400",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    level: 85,
    color: "text-orange-500",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    level: 88,
    color: "text-gray-800 dark:text-white",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-16 bg-white dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">
        <span className="text-orange-500 uppercase tracking-widest text-sm font-semibold">
          Skills
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-12">
          Technologies I Work With
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`text-4xl ${skill.color}`}
                >
                  {skill.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    {skill.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {skill.level}%
                  </p>
                </div>
              </div>

              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500 rounded-full transition-all duration-1000"
                  style={{
                    width: `${skill.level}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
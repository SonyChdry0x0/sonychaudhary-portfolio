import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A fully responsive portfolio built with React and Tailwind CSS featuring dark mode, animations, and smooth scrolling.",
    image: "/projects/portfolio.png",
    tech: ["React", "Tailwind", "Vite"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Store",
    description:
      "Modern online store with product filtering, cart management, and responsive UI.",
    image: "/projects/ecommerce.png",
    tech: ["React", "Context API", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Manager",
    description:
      "Task management application with CRUD operations, local storage, and clean UI.",
    image: "/projects/taskmanager.png",
    tech: ["React", "JavaScript", "CSS"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-16 bg-white dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        <span className="text-orange-500 uppercase tracking-widest text-sm font-semibold">
          Projects
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-12">
          Featured Work
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-6 mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-orange-500 transition"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-orange-500 transition"
                  >
                    Live Demo
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
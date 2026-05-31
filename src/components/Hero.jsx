import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import profile from "../assets/self2.png";

export default function Hero() {
  const words = ["Frontend Developer", "React Developer", "Freelancer"];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const skills = ["React", "JavaScript", "Tailwind", "Git"];

  const stats = [
    { value: "10+", label: "Projects" },
    { value: "1+", label: "Years Learning" },
    { value: "100%", label: "Responsive" },
  ];

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      {/* LEFT SIDE */}
      <div className="flex-1">
        {/* Typewriter */}
        <div className="flex items-center gap-3 text-orange-600 font-bold uppercase tracking-widest text-lg mb-4">
          <span className="w-8 h-[2px] bg-orange-600"></span>
          {text}
          <span className="animate-pulse">|</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Frontend Developer
          <br />
          Creating{" "}
          <span className="text-orange-600">Modern</span>
          <br />
          Web Experiences
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-lg leading-7">
          Passionate frontend developer focused on building responsive,
          accessible, and high-performance web applications using React,
          JavaScript, and Tailwind CSS.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-black dark:bg-orange-500 text-white px-6 py-3 rounded-full hover:scale-105 transition"
          >
            View Projects
          </button>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="border border-gray-400 dark:border-gray-700 px-6 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </button>
        </div>

        {/* Socials */}
        <div className="flex gap-6 mt-8 text-2xl text-gray-700 dark:text-gray-300">
          <a href="#" className="hover:text-orange-500 transition">
            <FaGithub />
          </a>

          <a href="#" className="hover:text-orange-500 transition">
            <FaLinkedin />
          </a>

          <a href="src/assets/sonychaudharycv.pdf" className="hover:text-orange-500 transition">
            <FaDownload />
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-10 mt-12 flex-wrap">
          {stats.map((item) => (
            <div key={item.label}>
              <h3 className="text-3xl font-bold text-orange-600">
                {item.value}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center mb-10 md:mb-0">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-orange-500 blur-3xl opacity-20"></div>

          {/* Image */}
          <img
            src={profile}
            alt="Profile"
            className="relative w-full h-full rounded-full object-cover border-4 border-orange-500 shadow-2xl hover:scale-105 transition duration-500"
          />

          {/* Floating Skills */}
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="absolute bg-white dark:bg-gray-900 dark:text-white shadow-lg rounded-full px-4 py-2 text-sm font-semibold hover:scale-110 transition"
              style={{
                top: `${40 + index * 60}px`,
                right: index % 2 === 0 ? "-60px" : "-100px",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
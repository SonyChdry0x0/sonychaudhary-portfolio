import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load saved theme on first render
  useEffect(() => {
  const saved = localStorage.getItem("theme");

  const isDark = saved === "dark";

  setDarkMode(isDark);

  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, []);

  // Toggle theme
  const toggleDarkMode = () => {
  const newMode = !darkMode;

  setDarkMode(newMode);

  if (newMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300
      ${
        scrolled
          ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
              S
            </div>

            <h2 className="font-bold text-xl text-gray-900 dark:text-white">
              Sony <span className="text-orange-500">Chaudhary</span>
            </h2>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.href)}
                className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-300 hover:text-orange-500 transition"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* DARK MODE TOGGLE */}
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:scale-110 transition"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* RESUME */}
            <a
              href="src/assets/sonychaudharycv.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden md:block px-5 py-2 rounded-full bg-orange-500 text-white font-medium hover:scale-105 transition"
            >
              Resume
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5"
            >
              <span
                className={`w-6 h-0.5 bg-black dark:bg-white transition ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-black dark:bg-white transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-black dark:bg-white transition ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-64 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.href)}
                className="text-left text-sm uppercase tracking-widest text-gray-600 dark:text-gray-300 hover:text-orange-500"
              >
                {link.name}
              </button>
            ))}

            <a
              href="/resume.pdf"
              className="w-fit px-5 py-2 rounded-full bg-orange-500 text-white"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
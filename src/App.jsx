import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-black dark:bg-gray-950 dark:text-white min-h-screen transition-colors duration-300">
      
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
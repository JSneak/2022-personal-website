import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection/Hero";
import WorkExperience from "./components/WorkSection/WorkExperience";
import Projects from "./components/ProjectSection/Projects";
import Divider from "./components/Divider";
import Footer from "./components/Footer";
import About from "./components/AboutSection/About";
import Skills from "./components/SkillsSection/Skills";

const App = () => {
  return (
    <div className="bg-palatinate_purple px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <WorkExperience />
      <Divider />
      <Projects />
      <Divider />
      <Footer />
      {/* Need to add google analytics */}
    </div>
  );
};

export default App;

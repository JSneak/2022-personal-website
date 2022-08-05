import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection/Hero";
import WorkExperience from "./components/WorkSection/WorkExperience";
import Projects from "./components/ProjectSection/Projects";
import Divider from "./components/Divider";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Divider />
      <WorkExperience />
      <Divider />
      <Projects />
      {/* Need to add google analytics */}
    </div>
  );
};

export default App;

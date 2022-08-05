import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection/Hero";
import WorkExperience from "./components/WorkSection/WorkExperience";
import Projects from "./components/ProjectSection/Projects";
import Divider from "./components/Divider";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
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

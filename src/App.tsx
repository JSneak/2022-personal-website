import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection/Hero";
import CompanyLogoSection from "./components/CompanyLogoSection";
import WorkExperience from "./components/WorkSection/WorkExperience";
import About from "./components/About";
// import Hero from "./components/dictionary/Hero";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <CompanyLogoSection /> */}
      <WorkExperience />
      {/* <About /> */}
      {/* Need to add google analytics */}
    </div>
  );
};

export default App;

import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

const Hero = () => {
  return (
    <div className={"bg-palatinate_purple "}>
      <div className={"flex justify-items-center"}>
        <LeftHero />
        <RightHero />
      </div>
    </div>
  );
};

export default Hero;

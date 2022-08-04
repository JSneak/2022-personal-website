import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

const Hero = () => {
  return (
    <div className={"bg-palatinate_purple "}>
      {/* <div className={"flex flex-row justify-evenly"}> */}
      {/* <LeftHero />
        <RightHero /> */}
      {/* </div> */}
      <div className={"grid grid-cols-1 sm:grid-cols-2	justify-items-center"}>
        <LeftHero />
        <RightHero />
      </div>
    </div>
  );
};

export default Hero;

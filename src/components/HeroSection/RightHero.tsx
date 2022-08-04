import Profile from "../../assets/Profile.svg";
import Sean from "../../assets/hero/Sean2.svg";
import OrangeBlob from "../../assets/hero/orangeblob.svg";
import PinkBlob from "../../assets/hero/pinkblob.svg";
import Rock2 from "../../assets/hero/Rock2.svg";
import Torus from "../../assets/hero/Torus.svg";
import Torus2 from "../../assets/hero/Torus2.svg";

const RightHero = () => {
  // <img src={Profile} alt={"Profile"} className={"h-[32rem]"} />;
  return (
    <div className={"hidden sm:block h-[32rem] w-full relative"}>
      {/* <img
        src={Sean}
        alt={"Profile"}
        className={"absolute h-[30rem] bottom-0 z-10"}
      /> */}
      <div className={"absolute h-[75vh] w-[50vw] bottom-0 z-10 bg-contain bg-bottom bg-no-repeat bg-hero-profile"}></div>
      <img
        src={OrangeBlob}
        alt={"Orange Blob"}
        className={"absolute h-full z-0"}
      />
    </div>
  );
};

export default RightHero;

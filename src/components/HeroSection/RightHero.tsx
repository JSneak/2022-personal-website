import Profile from "../../assets/Profile.svg";
import Sean from "../../assets/hero/Sean.svg";
import OrangeBlob from "../../assets/hero/orangeblob.svg";
import PinkBlob from "../../assets/hero/pinkblob.svg";
import Rock2 from "../../assets/hero/Rock2.svg";
import Torus from "../../assets/hero/Torus.svg";
import Torus2 from "../../assets/hero/Torus2.svg";

const RightHero = () => {
  // <img src={Profile} alt={"Profile"} className={"h-[32rem]"} />;
  return (
    <div className={"hidden sm:block h-[32rem] w-full relative"}>
      <img
        src={Sean}
        alt={"Profile"}
        className={"absolute h-[30rem] -bottom-2 z-10"}
      />
      <img
        src={OrangeBlob}
        alt={"Orange Blob"}
        className={"absolute h-full z-0"}
      />
    </div>
  );
};

export default RightHero;

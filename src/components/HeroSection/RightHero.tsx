import Profile from "../../assets/Profile.svg";
import Sean from "../../assets/hero/Sean2.svg";
import OrangeBlob from "../../assets/hero/orangeblob.svg";
import PinkBlob from "../../assets/hero/pinkblob.svg";
import Rock2 from "../../assets/hero/Rock2.svg";
import Torus from "../../assets/hero/Torus.svg";
import Torus2 from "../../assets/hero/Torus2.svg";

const RightHero = () => {
  return (
    <div
      className={
        "hidden sm:flex basis-1/2x h-[32rem] w-full relative overflow-hidden"
      }
    >
      <div
        className={
          "absolute h-[100%] w-[100%] bottom-0 z-30 bg-contain bg-bottom bg-no-repeat bg-hero-profile"
        }
      />
      <img
        src={PinkBlob}
        alt={"Pink Blob"}
        className={"absolute h-[100%] w-[100%] z-10 -bottom-36"}
      />
      <img
        src={OrangeBlob}
        alt={"Orange Blob"}
        className={"absolute h-[100%] w-[50%] z-20 right-20 -top-28"}
      />
      <img
        src={Rock2}
        alt={"Orange Blob"}
        className={"absolute h-[100%] w-[15%] z-40 bottom-0"}
      />
      <img
        src={Torus}
        alt={"Orange Blob"}
        className={"absolute h-[100%] w-[15%] z-40 -bottom-48 right-10"}
      />
      <img
        src={Torus2}
        alt={"Orange Blob"}
        className={"absolute h-[20%] w-[40%] z-40 top-10 right-10"}
      />
    </div>
  );
};

export default RightHero;

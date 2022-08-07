import PinkBlob from "../../assets/hero/pinkblob.svg";
import OrangeBlob from "../../assets/hero/orangeblob.svg";
import Sean from "../../assets/hero/Sean2.svg";

const LeftHero = () => {
  return (
    <div
      className={
        "flex flex-col grow sm:basis-1/2 justify-center mx-auto py-10 sm:py-0 overflow-hidden "
      }
    >
      <div className={" h-[20rem] sm:h-auto relative"}>
        <p className="text-slate-300 text-xl sm:text-4xl">Hello, I'm</p>
        <h1 className="text-white font-bold text-5xl sm:text-6xl">
          Sean J. Kim
        </h1>
        <p className={" text-slate-300 text-xl sm:text-4xl "}>
          A{" "}
          <span className="text-outrageous_orange">
            Fullstack Web Developer
          </span>{" "}
          from <span className="text-paradise_pink">Chicago</span>
        </p>
        <img
          src={PinkBlob}
          alt={"Pink Blob"}
          className={
            "absolute h-[100%] w-[100%] z-10 -bottom-36 animate-blobAnimation sm:hidden"
          }
        />
        <img
          src={OrangeBlob}
          alt={"Orange Blob"}
          className={
            "absolute h-[100%] w-[100%] z-20 -bottom-36 animate-blobAnimation sm:hidden"
          }
        />
        <img
          src={Sean}
          alt={"Sean"}
          className={"absolute h-[100%] w-[100%] z-30 sm:hidden"}
        />
      </div>
    </div>
  );
};

export default LeftHero;

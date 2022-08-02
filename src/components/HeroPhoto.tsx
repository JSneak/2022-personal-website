import { DocumentTextIcon } from "@heroicons/react/outline";
import Profile from "../assets/Profile.svg";

const HeroPhoto = () => {
  return (
    <div
      className={"flex flex-row bg-palatinate_purple w-screen justify-evenly"}
    >
      <div className={"flex flex-col justify-center pb-10 pl-5"}>
        <p className="text-slate-300 text-4xl pb-4">Hello, I'm</p>
        <h1 className="text-white font-bold text-6xl pb-4">Sean J. Kim</h1>
        <p className={" text-slate-300 text-4xl pb-4"}>
          A{" "}
          <span className="text-outrageous_orange">Frontend Web Developer</span>{" "}
          from <span className="text-paradise_pink">Chicago</span>
        </p>
        {/* <div className="flex flex-row">
          <button
            className={
              "bg-outrageous_orange rounded pl-4 pr-4 pt-2 pb-2 text-white flex flex-row justify-center "
            }
          >
            Resume <DocumentTextIcon className="h-6 w-6" />
          </button>
        </div> */}
      </div>
      <img src={Profile} alt={"Profile"} className={"h-[32rem]"} />
    </div>
  );
};

export default HeroPhoto;

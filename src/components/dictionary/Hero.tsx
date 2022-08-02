import Typed from "../Typed";
import { VolumeUpIcon } from "@heroicons/react/solid";
import JSneakAudio from "../../assets/jsneakAudio.mp3";

const Hero = () => {
  const playAudio = () => {
    let pronounciation = new Audio(JSneakAudio);
    pronounciation.play();
  };

  return (
    <div className={"flex flex-col p-10 bg-cyan-400"}>
      <div
        className={"bg-white w-3/4 drop-shadow-2xl rounded-lg justify-center"}
      >
        <div className={"flex flex-row"}>
          <VolumeUpIcon
            className="block h-10 w-10 text-blue-600 border border-gray-400 rounded-full p-2 m-3"
            onClick={() => playAudio()}
          />
          <h1 className={"font-medium text-5xl"}>j·sneak</h1>
        </div>
        <p className={"text-small pl-14"}>/ Sean J. Kim /</p>
        <i className={"pl-4"}>noun</i>
        <div className={"pl-4"}>
          <Typed />
        </div>
      </div>
    </div>
  );
};

export default Hero;

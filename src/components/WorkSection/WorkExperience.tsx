import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import WorkDesktop from "./WorkDesktop";
import WorkMobile from "./WorkMobile";

const WorkExperience = () => {
  return (
    <div
      id="workExperience"
      className={
        "bg-palatinate_purple mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-0 flex flex-col sm:items-center sm:justify-center"
      }
    >
      <h1 className={"text-xl font-bold text-white sm:text-4xl my-2"}>
        Work Experience
      </h1>
      {/* For Non Mobile Displays */}
      <WorkDesktop />
      {/* For Mobile Displays */}
      <WorkMobile />
    </div>
  );
};

export default WorkExperience;

import WorkDesktop from "./WorkDesktop";
import WorkMobile from "./WorkMobile";

const WorkExperience = () => {
  return (
    <div
      id="workExperience"
      className={
        "bg-palatinate_purple py-10 sm:py-0 flex flex-col sm:items-center sm:justify-center"
      }
    >
      <h1
        className={
          "text-xl font-bold text-white sm:text-4xl my-2 font-headerFont"
        }
      >
        Work Experience
      </h1>
      <hr className={"w-[100%] pb-1"}></hr>
      {/* For Non Mobile Displays */}
      <WorkDesktop />
      {/* For Mobile Displays */}
      <WorkMobile />
    </div>
  );
};

export default WorkExperience;

import ProjectDesktop from "./ProjectDesktop";
import ProjectMobile from "./ProjectMobile";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-palatinate_purple py-10 sm:py-0 flex flex-col "
    >
      <h1 className="text-xl font-bold text-white sm:text-4xl my-2">
        Projects I've Built.
      </h1>
      <hr className={"w-[100%] pb-1"}></hr>
      <div className="flex justify-center items-center ">
        <ProjectDesktop />
        <ProjectMobile />
      </div>
    </div>
  );
};

export default Projects;

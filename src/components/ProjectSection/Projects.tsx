import ProjectDesktop from "./ProjectDesktop";
import ProjectMobile from "./ProjectMobile";

const Projects = () => {
  return (
    <div className="bg-palatinate_purple mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-0 flex flex-col">
      <h1 className="text-xl font-bold text-white sm:text-4xl my-2">
        Projects I've Built.
      </h1>
      <div className="flex justify-center items-center ">
        <ProjectDesktop />
        <ProjectMobile />
      </div>
    </div>
  );
};

export default Projects;

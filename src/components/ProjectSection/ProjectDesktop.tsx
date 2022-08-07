import { ExternalLinkIcon } from "@heroicons/react/outline";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../data/Projects";

/*

  Map out projects
  Have a counter that alternates
  Have a left version and a right version that I alternate between


*/

const ProjectDesktop = () => {
  return (
    <div className="hidden sm:block my-2 font-bodyFont">
      {projects.map((project, id) => (
        <div key={id} className=" relative my-2 bg-gray-700 px-5 pt-6 pb-6">
          <div className={"relative z-10"}>
            <p className="text-lg text-outrageous_orange">Featured Project</p>
            <h1 className="text-white text-3xl pb-6">{project.name}</h1>
            <p className="text-gray-300 text-lg">{project.desc}</p>
            <div className="flex space-x-3 pt-3 pb-3 flex-wrap">
              {project.tech.map((name, id) => (
                <span key={id} className="text-paradise_pink">
                  {name}
                </span>
              ))}
            </div>
            <div className={"flex flex-row space-x-2"}>
              <a href={project.github_link}>
                <FaGithub className={"w-7 h-7 text-outrageous_orange"} />
              </a>
              <a href={project.link}>
                <ExternalLinkIcon
                  className={"w-8 h-8 text-outrageous_orange"}
                />
              </a>
            </div>
          </div>
          <img
            src={project.image}
            alt="project_image"
            className="absolute inset-0 h-full w-full object-cover opacity-10 z-0"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectDesktop;

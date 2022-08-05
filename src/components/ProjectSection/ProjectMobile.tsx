import { ExternalLinkIcon } from "@heroicons/react/outline";
import { FaGithub } from "react-icons/fa";
import ShipIt from "../../assets/projects/shipit.avif";

const projects = [
  {
    name: "Non Power of 2 Bracket Generator",
    desc: "An interactive demo that demonstrates a binary tree algorithm for brackets",
    tech: ["AR.js", "Android", "Java"],
    image: ShipIt,
  },
  {
    name: "Pokemon Go",
    desc: "Capture Pokemon on the GO! Capture Pokemon on the GO! Capture Pokemon on the GO! Capture Pokemon on the GO!",
    tech: ["AR.js", "Android", "Java"],
    image: ShipIt,
  },
  {
    name: "Pokemon Go",
    desc: "Capture Pokemon on the GO! Capture Pokemon on the GO! Capture Pokemon on the GO! Capture Pokemon on the GO!",
    tech: ["AR.js", "Android", "Java"],
    image: ShipIt,
  },
  {
    name: "Pokemon Go",
    desc: "Capture Pokemon on the GO! Capture Pokemon on the GO! Capture Pokemon on the GO! Capture Pokemon on the GO!",
    tech: ["AR.js", "Android", "Java"],
    image: ShipIt,
  },
];

const ProjectMobile = () => {
  return (
    <div className="block sm:hidden ">
      {projects.map((project, id) => (
        <div key={id} className="my-2 bg-gray-700 px-5 pt-6 pb-6">
          <p className="text-sm text-outrageous_orange">Featured Project</p>
          <h1 className="text-white text-2xl pb-6">{project.name}</h1>
          <p className="text-gray-300 text-sm">{project.desc}</p>
          <div className="flex space-x-3 pt-3 pb-3">
            {project.tech.map((name, id) => (
              <span key={id} className="text-paradise_pink">
                {name}
              </span>
            ))}
          </div>
          <div className={"flex flex-row space-x-2"}>
            <FaGithub className={"w-7 h-7 text-outrageous_orange"} />
            <ExternalLinkIcon className={"w-8 h-8 text-outrageous_orange"} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectMobile;

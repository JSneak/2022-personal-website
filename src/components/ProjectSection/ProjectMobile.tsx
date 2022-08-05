import { ExternalLinkIcon } from "@heroicons/react/outline";
import { FaGithub } from "react-icons/fa";
import ShipIt from "../../assets/projects/shipit.avif";

const projects = [
  {
    name: "Non Power of 2 Bracket Generator",
    desc: "An interactive demo that demonstrates a binary tree algorithm for brackets",
    tech: ["Javascript", "go.js"],
    image: ShipIt,
    github_link: "https://github.com/JSneak/Brackets_for_Non_Powers_of_2",
    link: "https://www.sean.kim/brackets/go.html",
  },
  {
    name: "Hack Club Shipit",
    desc: "Hack Club Shipit ✈ is a platform for high schoolers to easily build a hub of your own projects, share it with the club or to social media, and vote on others' ideas and projects.",
    tech: ["Firebase", "Rebrandly", "jQuery", "Handlebars.js", "Toastr.js"],
    image: ShipIt,
    github_link: "https://github.com/hackclub/shipit",
    link: "https://www.producthunt.com/products/hack-club-legacy#hack-club-shipit",
  },
  {
    name: "Challenger",
    desc: "A site to create and join live, dynamic tournament brackets. Utilizes binary trees to create non power of two brackets.",
    tech: ["Firebase", "Javascript", "HTML", "CSS"],
    image: ShipIt,
    github_link: "",
    link: "https://ping-pong-scheduler.firebaseapp.com/",
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
              <ExternalLinkIcon className={"w-8 h-8 text-outrageous_orange"} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectMobile;

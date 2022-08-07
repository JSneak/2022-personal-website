import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { BuiltWithInfo } from "../data/SkillsInfo";

const Footer = () => {
  return (
    <div className={"bg-palatinate_purple"}>
      <div className="flex flex-col items-center font-bodyFont">
        <p className="text-sm text-outrageous_orange">Built With:</p>
        <ul className="flex flex-row">
          {BuiltWithInfo.map((icon, key) => (
            <li
              key={key}
              className="flex flex-col items-center text-center px-2 py-2"
            >
              <img src={icon.img} alt={icon.tech} className="w-6 h-6" />
              <span className="text-outrageous_orange text-xs">
                {icon.tech}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-outrageous_orange">Contact Me:</p>
        <div className="py-2 flex flex-row space-x-2">
          <a href="https://github.com/JSneak">
            <FaGithub className="w-6 h-6 text-outrageous_orange" />
          </a>
          <a href="https://www.linkedin.com/in/jsneak/">
            <FaLinkedin className="w-6 h-6 text-outrageous_orange" />
          </a>
          <a href="mailto: abc@example.com">
            <FaMailBulk className="w-6 h-6 text-outrageous_orange" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

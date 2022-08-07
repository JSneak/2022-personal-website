import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={"bg-palatinate_purple flex flex-col items-center py-5"}>
      <p className="text-sm text-outrageous_orange">Built by Sean Kim</p>
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
  );
};

export default Footer;

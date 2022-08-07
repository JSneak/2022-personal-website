import { SkillsData } from "../../data/SkillsInfo";
import RelevantSkills from "./RelevantSkills";

const Skills = () => {
  return (
    <div className="flex flex-col" id="skills">
      <div className="">
        <h1 className="text-xl sm:text-4xl font-bold text-white flex sm:justify-center font-headerFont my-2">
          Relevant Skills
        </h1>
        <hr className={"w-[100%] pb-1"}></hr>
        <div className="font-bodyFont flex flex-row flex-wrap justify-center">
          {SkillsData.map((category, key) => (
            <RelevantSkills category={category} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

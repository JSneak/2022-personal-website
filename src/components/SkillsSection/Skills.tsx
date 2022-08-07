import { BuiltWithInfo, SkillInfo } from "../../data/SkillsInfo";

const Skills = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-xl sm:text-4xl font-bold text-white flex sm:justify-center font-headerFont">
          Relevant Skills
        </h1>
        <div className="grid gap-2 grid-cols-2 sm:grid-cols-6 font-bodyFont">
          {SkillInfo.map((icon, key) => (
            <div key={key} className="flex flex-col items-center px-2 py-2">
              <img
                src={icon.image}
                alt={icon.alt_name}
                key={key}
                className="w-10 h-10"
              />
              <span className="text-xs sm:text-base text-white">
                {icon.alt_name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="font-bodyFont">
        <h1 className="text-xl font-bold  sm:text-4xl text-white flex sm:justify-center">
          This website is built with:
        </h1>
        <ul className="grid gap-2 grid-cols-2 items-center sm:flex sm:flex-row sm:justify-center">
          {BuiltWithInfo.map((icon, key) => (
            <li
              key={key}
              className="flex flex-col items-center text-center px-2 py-2"
            >
              <span className="text-white">{icon.type}</span>
              <img src={icon.img} alt={icon.tech} className="w-10 h-10" />
              <span className="text-outrageous_orange">{icon.tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;

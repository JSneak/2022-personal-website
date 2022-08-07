const RelevantSkills = ({ category }) => {
  return (
    <div className="outline outline-white flex flex-wrap flex-row relative my-5 mx-5">
      <div className="absolute -top-3 text-white bg-outrageous_orange outline outline-white">
        {category.desc}
      </div>
      {category.tech.map((icon, key: number) => (
        <div key={key} className="flex flex-col items-center px-2 py-2 mt-3">
          <img
            src={icon.image}
            alt={icon.alt_name}
            key={key}
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <span className="text-xs sm:text-base text-white">
            {icon.alt_name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RelevantSkills;

import { JobInfo } from "../data/WorkInfo";

const Card = ({ job }: { job: JobInfo }) => {
  return (
    <div
      className={
        "container flex flex-col items-start rounded-xl border-2 shadow-lg p-4 w-96 m-4 bg-white"
      }
    >
      <h2 className="text-xl">{job.company}</h2>
      <div className="container flex flex-row justify-between">
        <p className="text-xs">{job.jobTitle}</p>
        <p className="text-xs">{job.timeRange}</p>
      </div>

      <p className={"text-sm pt-1"}>{job.desc}</p>
      <div>
        {job.skills.map((value, index: number) => {
          return (
            <span
              key={index}
              className={
                "text-xs text-white rounded-full pl-2 pr-2 pt-1 pb-1 mr-2 " +
                value.color
              }
            >
              {value.name}
            </span>
          );
        })}
      </div>
      <a
        href={job.link}
        className="text-xs underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
      >
        Learn More
      </a>
    </div>
  );
};

export default Card;

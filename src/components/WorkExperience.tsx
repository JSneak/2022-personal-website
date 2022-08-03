import Card from "../components/Card";
import { WorkInfo } from "../data/WorkInfo";
import { JobInfo } from "../data/WorkInfo";

const WorkExperience = () => {
  return (
    <div
      id="workExperience"
      className={"flex flex-col items-center bg-palatinate_purple"}
    >
      <h1 className="text-4xl font-bold pt-4 pb-4 text-white">
        Work Experience
      </h1>
      <div className={"flex flex-row flex-wrap justify-evenly"}>
        {WorkInfo.map((value: JobInfo, index: number) => {
          return <Card key={index} job={value} />;
        })}
      </div>
    </div>
  );
};

export default WorkExperience;

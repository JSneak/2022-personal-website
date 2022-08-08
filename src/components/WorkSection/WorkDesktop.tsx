import { Tab } from "@headlessui/react";
import { companies } from "../../data/WorkInfo";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const WorkDesktop = () => {
  return (
    <div className="hidden lg:block my-2 font-bodyFont">
      <Tab.Group vertical={true} defaultIndex={0}>
        <div className="flex flex-row items-start">
          <Tab.List className="flex flex-col items-start border-l-2 border-white/40 overflow-y-auto space-y-1">
            {companies.map((company) => (
              <Tab
                key={company.id}
                className={({ selected }) =>
                  classNames(
                    "text-xs text-outrageous_orange flex-shrink-0 px-2 py-2",
                    selected ? "bg-outrageous_orange/30" : "text-gray-100"
                  )
                }
              >
                {company.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {companies.map((company, idx) => (
              <Tab.Panel key={idx} className={"pl-5 w-[50rem]"}>
                <div>
                  <h3 className="text-2xl font-medium leading-5 text-white">
                    {company.title}
                    <span className={"text-outrageous_orange"}>
                      <a href={company.link}>{" @ " + company.name}</a>
                    </span>
                  </h3>
                  <p className="flex space-x-1 text-s py-2 font-normal leading-4 text-gray-200">
                    {company.date}
                  </p>
                  {company.desc.map((sentence, id) => (
                    <div
                      key={id}
                      className={"flex flex-row space-x-4 w-auto mt-2"}
                    >
                      <p className="text-s text-paradise_pink">-</p>
                      <p className="text-gray-200 text-ss">{sentence}</p>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
};

export default WorkDesktop;

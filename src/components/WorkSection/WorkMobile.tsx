import { useState } from "react";
import { Tab } from "@headlessui/react";
import { companies } from "../../data/WorkInfo";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const WorkMobile = () => {
  return (
    <div className="block sm:hidden">
      <Tab.Group defaultIndex={0}>
        <Tab.Panels className="">
          {companies.map((company, idx) => (
            <Tab.Panel key={idx} className={""}>
              <div>
                <h3 className="text-s font-medium leading-5 text-white">
                  {company.title}
                  <span className={"text-outrageous_orange"}>
                    <a href="https://www.northerntrust.com/united-states/home">
                      {" @ " + company.name}
                    </a>
                  </span>
                </h3>
                <p className="flex space-x-1 text-xs font-normal leading-4 text-gray-200">
                  {company.date}
                </p>
                {company.desc.map((sentence, id) => (
                  <div
                    key={id}
                    className={"flex flex-row space-x-4 w-auto mt-2"}
                  >
                    <p className="text-xs text-paradise_pink">-</p>
                    <p className="text-gray-200 text-xs">{sentence}</p>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
        <Tab.List className="flex bg-palatinate_purple overflow-x-auto space-x-4 w-full border-b-2 border-white/40 mt-5">
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
      </Tab.Group>
    </div>
  );
};

export default WorkMobile;

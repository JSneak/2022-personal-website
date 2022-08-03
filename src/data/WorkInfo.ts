interface JobInfo {
  company: string;
  timeRange: string;
  jobTitle: string;
  desc: string;
  skills: { name: string; color: string }[];
  link: string;
}

const WorkInfo: JobInfo[] = [
  {
    company: "Northern Trust",
    timeRange: "July 2022 - Current",
    jobTitle: "Rotational Developer Associate",
    desc: "Develop and maintain microservices which process foreign transactions",
    skills: [
      { name: "Spring Boot", color: "bg-green-400" },
      { name: "Java", color: "bg-orange-600" },
      { name: "React", color: "bg-blue-600" },
    ],
    link: "https://www.northerntrust.com/united-states/home",
  },
  {
    company: "Dicty Base",
    timeRange: "August 2021 - July 2022",
    jobTitle: "Software Developer",
    desc: "Migrated from legacy site to new React site while developing new features.",
    skills: [
      { name: "React", color: "bg-blue-600" },
      { name: "GraphQL", color: "bg-gray-600" },
      { name: "MSW", color: "bg-teal-400" },
      { name: "Nextjs", color: "bg-teal-500" },
    ],
    link: "https://github.com/dictyBase",
  },
  {
    company: "Northern Trust",
    timeRange: "June 2021 - August 2021",
    jobTitle: "Software Developer Intern",
    desc: "Created Mockups for new client features and developed them in React ",
    skills: [{ name: "React", color: "bg-blue-600" }],
    link: "https://www.northerntrust.com/united-states/home",
  },
  {
    company: "Producers National",
    timeRange: "April 2019 - February 2021",
    jobTitle: "Software Developer",
    desc: "Built and developed new features to help streamline customers buying insurance",
    skills: [{ name: "React", color: "bg-blue-600" }],
    link: "https://producersnational.com/",
  },
  {
    company: "Midwest Immersive",
    timeRange: "June 2019 - July 2019",
    jobTitle: "Contract Developer",
    desc: "Created a program that serves a unique photo on a templated website stored in an Amazon S3 bucket using Express and Node.js.",
    skills: [
      { name: "React", color: "bg-blue-600" },
      { name: "Nodejs", color: "bg-green-600" },
      { name: "AWS S3", color: "bg-orange-800" },
    ],
    link: "https://www.mwimmersive.com/",
  },
  {
    company: "CDK Global",
    timeRange: "June 2017 - August 2017",
    jobTitle: "Software Developer Intern",
    desc: "Created a program that assists the Sales Department by packaging products together via implementing an Apriori pattern analysis algorithm.",
    skills: [
      { name: "HTML/CSS/JS", color: "bg-blue-300" },
      { name: "Firebase", color: "bg-red-600" },
    ],
    link: "https://www.cdkglobal.com/",
  },
];

export { WorkInfo };
export type { JobInfo };

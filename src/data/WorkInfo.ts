interface JobInfo {
  company: string;
  timeRange: string;
  jobTitle: string;
  desc: string;
  skills: { name: string; color: string }[];
  link: string;
}

const companies = [
  {
    name: "Northern Trust",
    id: "1",
    title: "Developer Associate",
    date: "July 2022 - Current",
    desc: [
      "Rotate between different business development divisions to learn the business.",
      "Work with a variety of programming languages, frameworks, and platforms such as React, Springboot, Java, Typescript, and AWS.",
      "Communicate with multi-disciplinary teams of business partners, engineers, and clients to help deliver business solutions.",
    ],
    link: "https://www.northerntrust.com/united-states/home",
  },
  {
    name: "Dicty Base",
    id: "2",
    title: "React Developer",
    date: "August 2021 - July 2022",
    desc: [
      "Worked individually to build the new Dicty Base platform, a research project out of Northwestern University.",
      "Utilized technologies such as, Mock Service Workers, Javascript, React, GraphQL, and Typescript to build new features.",
      "Developed and maintained multiple repos within Dicty Base.",
    ],
    link: "https://github.com/dictyBase",
  },
  {
    name: "Northern Trust",
    id: "3",
    title: "Software Developer Intern",
    date: "June 2021 - August 2021",
    desc: [
      "Worked on Northern Trust Admin and Trade Portal",
      "Communicated with business partners and engineering team to create mockups for new features.",
      "Developed new features utilizing React.",
    ],
    link: "https://www.northerntrust.com/united-states/home",
  },
  {
    name: "Producers National",
    id: "4",
    title: "Software Developer",
    date: "April 2019 - February 2021",
    desc: [
      "Launched a new initiative to sell homeowners and auto insurance policies directly to consumers.",
      "Developed a React website which utilized Google and Estated APIs to speed up users policy transactions.",
    ],
    link: "https://producersnational.com/",
  },
  {
    name: "Midwest Immersive",
    id: "5",
    title: "Contract Developer",
    date: "June 2019 - July 2019",
    desc: [
      "Created a Node.js service which serves a unique templated website based on photos taken at a physical booth.",
      "Utilized technologies such as Postman, Node.js, Amazon S3 buckets, AR.js, and Express.",
    ],
    link: "https://www.mwimmersive.com/",
  },
  {
    name: "CDK Global",
    id: "6",
    title: "Software Developer Intern",
    date: "June 2017 - August 2017",
    desc: [
      "Created a program that assists the Sales Department by packaging products together via implementing an Apriori pattern analysis algorithm.",
      "Co-led a team of 3 new student programmers in developing a platform for CDK Global employees to host tournaments.",
      "Created a custom bracket generation algorithm that accounts for non power of two players.",
    ],
    link: "https://www.cdkglobal.com/",
  },
];

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

export { WorkInfo, companies };
export type { JobInfo };

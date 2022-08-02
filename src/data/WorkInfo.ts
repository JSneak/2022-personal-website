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
    desc: "Blah Blah Blah",
    skills: [
      { name: "Spring Boot", color: "bg-green-400" },
      { name: "Java", color: "bg-orange-600" },
      { name: "React", color: "bg-blue-600" },
    ],
    link: "",
  },
  {
    company: "Dicty Base",
    timeRange: "August 2021 - July 2022",
    jobTitle: "Software Developer",
    desc: "Develop and maintain websites using React",
    skills: [
      { name: "React", color: "bg-blue-600" },
      { name: "GraphQL", color: "bg-gray-600" },
      { name: "MSW", color: "bg-teal-400" },
      { name: "RxJS", color: "bg-teal-500" },
    ],
    link: "",
  },
  {
    company: "Northern Trust",
    timeRange: "June 2021 - August 2021",
    jobTitle: "Software Developer Intern",
    desc: "Blah Blah Blah",
    skills: [{ name: "React", color: "bg-blue-600" }],
    link: "",
  },
  {
    company: "Producers National",
    timeRange: "April 2019 - February 2021",
    jobTitle: "Software Developer",
    desc: "Blah Blah Blah",
    skills: [{ name: "React", color: "bg-blue-600" }],
    link: "",
  },
  {
    company: "Midwest Immersive",
    timeRange: "June 2019 - July 2019",
    jobTitle: "Contract Developer",
    desc: "Blah Blah Blah",
    skills: [
      { name: "React", color: "bg-blue-600" },
      { name: "Nodejs", color: "bg-green-600" },
      { name: "AWS S3", color: "bg-orange-800" },
    ],
    link: "",
  },
  {
    company: "CDK Global",
    timeRange: "June 2017 - August 2017",
    jobTitle: "Software Developer Intern",
    desc: "Blah Blah Blah",
    skills: [
      { name: "HTML/CSS/JS", color: "bg-blue-300" },
      { name: "Firebase", color: "bg-red-600" },
    ],
    link: "",
  },
];

export { WorkInfo };
export type { JobInfo };

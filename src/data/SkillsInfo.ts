import CSSIcon from "../assets/skills/CSS.svg"; //
import HTML5Icon from "../assets/skills/html5.svg"; //
import TSIcon from "../assets/skills/typescript.svg"; //
import JSIcon from "../assets/skills/javascript.svg"; //
import JavaIcon from "../assets/skills/java.svg"; //
import PythonIcon from "../assets/skills/python.svg"; //
import ViteIcon from "../assets/skills/vite.avif"; //
import NodeJsIcon from "../assets/skills/node.svg"; //
import NPMIcon from "../assets/skills/npm.svg"; //
import YarnIcon from "../assets/skills/yarn.svg"; //
import NextjsIcon from "../assets/skills/next.webp"; //
import ReactIcon from "../assets/skills/react.svg"; //
import ThreejsIcon from "../assets/skills/three.avif"; //
import FirebaseIcon from "../assets/skills/firebase.webp"; //
import MongoDBIcon from "../assets/skills/mongodb.svg"; //
import ReactTestingIcon from "../assets/skills/reacttesting.avif"; //
import CypressIcon from "../assets/skills/cypress.svg"; //
import TailwindIcon from "../assets/skills/tailwind.svg";

const BuiltWithInfo = [
  {
    type: "Package Manager",
    tech: "Yarn",
    img: YarnIcon,
  },
  {
    type: "Build Tool",
    tech: "Vite",
    img: ViteIcon,
  },
  {
    type: "CSS Framework",
    tech: "Tailwind",
    img: TailwindIcon,
  },
  {
    type: "Language",
    tech: "TypeScript",
    img: TSIcon,
  },
  {
    type: "Javascript Library",
    tech: "React",
    img: ReactIcon,
  },
];

const Languages = {
  desc: "Languages",
  color: "",
  tech: [
    {
      image: CSSIcon,
      alt_name: "CSS",
    },
    {
      image: HTML5Icon,
      alt_name: "HTML5",
    },
    {
      image: TSIcon,
      alt_name: "TypeScript",
    },
    {
      image: JSIcon,
      alt_name: "JavaScript",
    },
    {
      image: JavaIcon,
      alt_name: "Java",
    },
    {
      image: PythonIcon,
      alt_name: "Python",
    },
  ],
};

const Testing = {
  desc: "Testing",
  color: "",
  tech: [
    {
      image: ReactTestingIcon,
      alt_name: "React Testing",
    },
    {
      image: CypressIcon,
      alt_name: "Cypress",
    },
  ],
};

const Libraries = {
  desc: "Libraries",
  color: "",
  tech: [
    {
      image: ReactIcon,
      alt_name: "React",
    },
    {
      image: ThreejsIcon,
      alt_name: "Three.js",
    },
  ],
};

const Frameworks = {
  desc: "Frameworks",
  color: "",
  tech: [
    {
      image: TailwindIcon,
      alt_name: "Tailwind",
    },
    {
      image: NextjsIcon,
      alt_name: "Next.js",
    },
  ],
};

const Databases = {
  desc: "Databases",
  color: "",
  tech: [
    {
      image: FirebaseIcon,
      alt_name: "Firebase",
    },
    {
      image: MongoDBIcon,
      alt_name: "MongoDB",
    },
  ],
};

interface SkillsType {
  desc: string;
  color: string;
  tech: Array<{
    image: string;
    alt_name: string;
  }>;
}

const BuildTools: SkillsType = {
  desc: "Build Tools",
  color: "",
  tech: [
    {
      image: ViteIcon,
      alt_name: "Vite",
    },
    {
      image: NodeJsIcon,
      alt_name: "NodeJS",
    },
    {
      image: NPMIcon,
      alt_name: "NPM",
    },
    {
      image: YarnIcon,
      alt_name: "Yarn",
    },
  ],
};

const SkillsData = [
  Languages,
  Testing,
  Libraries,
  Frameworks,
  Databases,
  BuildTools,
];

export { BuiltWithInfo, SkillsData };
export type { SkillsType };

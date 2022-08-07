import ShipIt from "../assets/projects/shipit.webp";
import PowerOf2 from "../assets/projects/power2.webp";
import Challenger from "../assets/projects/challenger.webp";

const projects = [
  {
    name: "Non Power of 2 Bracket Generator",
    desc: "An interactive demo that demonstrates a binary tree algorithm for brackets",
    tech: ["Javascript", "go.js"],
    image: PowerOf2,
    github_link: "https://github.com/JSneak/Brackets_for_Non_Powers_of_2",
    link: "https://curious-fairy-a6c2d1.netlify.app/brackets/go.html",
  },
  {
    name: "Hack Club Shipit",
    desc: "Hack Club Shipit ✈ is a platform for high schoolers to easily build a hub of your own projects, share it with the club or to social media, and vote on others' ideas and projects.",
    tech: ["Firebase", "Rebrandly", "jQuery", "Handlebars.js", "Toastr.js"],
    image: ShipIt,
    github_link: "https://github.com/hackclub/shipit",
    link: "https://www.producthunt.com/products/hack-club-legacy#hack-club-shipit",
  },
  {
    name: "Challenger",
    desc: "A site to create and join live, dynamic tournament brackets. Utilizes binary trees to create non power of two brackets.",
    tech: ["Firebase", "Javascript", "HTML", "CSS"],
    image: Challenger,
    github_link: "",
    link: "https://ping-pong-scheduler.firebaseapp.com/",
  },
];

export { projects };

import dsP from "./components/proimages/dsPizza.png";
import money from "./components/proimages/money.png";
import Csynergy from "./components/proimages/Csynergy.png";
import todolist from "./components/proimages/todolist.png";
import YTclone from "./components/proimages/YTclone.png";
import dshort from "./components/proimages/dshort.png";
import chat from "./components/proimages/chitchat.png";
import realtor from "./components/proimages/realtor.png";
import portfolio from "./components/proimages/portfolio.png";

export const techStack = [
  {
    name: "JavaScript",
    link: "https://www.svgrepo.com/show/349419/javascript.svg",
  },
  {
    name: "HTML",
    link: "https://www.svgrepo.com/show/349402/html5.svg",
  },
  {
    name: "CSS",
    link: "https://www.svgrepo.com/show/349330/css3.svg",
  },
  {
    name: "TypeScript",
    link: "https://www.svgrepo.com/show/349540/typescript.svg",
  },
  {
    name: "ReactJS",
    link: "https://www.svgrepo.com/show/354259/react.svg",
  },
  {
    name: "Bootstrap",
    link: "https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg",
  },
  {
    name: "Tailwind CSS",
    link: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg",
  },
  {
    name: "NodeJS",
    link: "https://www.svgrepo.com/show/378837/node.svg",
  },
  {
    name: "ExpressJS",
    link: "https://www.svgrepo.com/show/330398/express.svg",
  },
  {
    name: "MySQL",
    link: "https://www.svgrepo.com/show/355133/mysql.svg",
  },
  {
    name: "MongoDB",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
  },
  {
    name: "Postman",
    link: "https://www.svgrepo.com/show/354202/postman-icon.svg",
  },
  {
    name: "Git/GitHub",
    link: "https://www.svgrepo.com/show/452210/git.svg",
  },
  {
    name: "VS Code",
    link: "https://www.svgrepo.com/show/452129/vs-code.svg",
  },

  {
    name: "Netlify",
    link: "https://seeklogo.com/images/N/netlify-icon-logo-7CF6AA9DC7-seeklogo.com.png",
  },
  {
    name: "Vercel",
    link: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
  },
];

export const pages = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Projects", url: "/projects" },
  { name: "Contact", url: "/contact" },
];

export const projects = [
  {
    title: "Realtor Website Clone",
    github: "https://github.com/SaiChakri-d/realtor-clone-react",
    netlify: "https://realtor-clone-react-gold.vercel.app/",
    image: realtor,
    description:
      "A clone of realtor.com created using React, Tailwind and Firebase. This app enables users to view listed flats and contact the landlords. It consists of Login, Register pages with Google account, Listing pages, etc. Registered users/landlords can add, edit or delete the listings.",
  },
  {
    title: "ChitChat - A Chat App",
    github: "https://github.com/SaiChakri-d/chitchat-app",
    netlify: "https://chitchat-app-saichakri.netlify.app/",
    image: chat,
    description:
      "A Chatting app created using MERN stack and Socket.io. This app enables real time chatting between registered users. This app consists of login, register, user list and chat window pages and has emojis support in the chat window.",
  },
  {
    title: "dsPizzeria - A Pizza Delivery App",
    github: "https://github.com/SaiChakri-d/dsPizzeria-frontend.git",
    netlify: "https://dsPizzeria-by-sai.netlify.app/",
    image: dsP,
    description:
      "Pizza Delivery App created using MERN stack and STRIPE Payment gateway. This app allows users to order fresh pizzas and track the order details. Also has admin panel which allows all pizza inventory management.",
  },
  {
    title: "Csynergy - A Capacity Planner for Offices",
    github: "https://github.com/SaiChakri-d/Csynergy-capacity-planner-client",
    netlify: "https://csynergy-capacityplanner-by-saichakri.netlify.app/",
    image: Csynergy,
    description:
      "Simple Capcity planning tool created using MERN stack helps HRs to add new employee and manage the existing employees and assigin new tasks to them and easily manage their workload.",
  },
  {
    title: "chkBudget - A Money Manager App",
    github: "https://github.com/SaiChakri-d/moneymanager-sai-frontend",
    netlify: "https://chkbudget-by-saichakri.netlify.app/",
    image: money,
    description:
      "Money Manager created using MERN stack, has adding transaction (income or expense), Transaction History page, allocating budget, all CRUD operations on money, info, etc.",
  },
  {
    title: "Portfolio Website",
    github: "https://github.com/SaiChakri-d/d-sai-chakri-portfolio",
    netlify: "https://saichakri-d-portfolio.netlify.app/",
    image: portfolio,
    description:
      "Money Manager created using MERN stack, has adding transaction (income or expense), Transaction History page, allocating budget, all CRUD operations on money, info, etc.",
  },
  {
    title: "YouTube Clone App",
    github: "https://github.com/SaiChakri-d/youtube-clone-ts-app",
    netlify: "https://dancing-trifle-c8c463.netlify.app/",
    image: YTclone,
    description:
      "YouTube clone created using ReactJS and TypeScript with YouTube Data API intergration. Functionalities are Home page, Search page, Static Sidebar, Recommended page videos, etc.",
  },
  {
    title: "dshorts URL Shortener App",
    github: "https://github.com/SaiChakri-d/url-shortener-by-sai-client",
    netlify: "https://url-shortener-by-saichakri.netlify.app/",
    image: dshort,
    description:
      "An app created using React, Bootstrap and MUI. This app allows users to shorten lengthy URLs to short URLs to share them easily across web.",
  },
  {
    title: "To Do List",
    github: "https://github.com/SaiChakri-d/simple-todoList-react",
    netlify:
      "https://62b1b6475562ba321466c1a0--stalwart-macaron-f8b56d.netlify.app/",
    image: todolist,
    description:
      "Simple Todo List created using React. This app enables user to add to do list and change it's completed status.",
  },
];

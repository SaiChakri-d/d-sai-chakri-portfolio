import dsP from "./components/proimages/dsPizza.png";
import money from "./components/proimages/money.png";
import Csynergy from "./components/proimages/Csynergy.png";
import studentmentor from "./components/proimages/studentmentor.png";
import ecommcart from "./components/proimages/ecommcart.png";
import todolist from "./components/proimages/todolist.png";
import YTclone from "./components/proimages/YTclone.png";
import dshort from "./components/proimages/dshort.png";
import chat from "./components/proimages/chitchat.png";

export const techStack = [
  {
    name: "JavaScript",
    link: "https://www.svgrepo.com/show/349419/javascript.svg",
  },
  {
    name: "HTML",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    name: "TypeScript",
    link: "https://www.svgrepo.com/show/374146/typescript-official.svg",
  },
  {
    name: "React",
    link: "https://www.svgrepo.com/show/452092/react.svg",
  },
  {
    name: "Bootstrap",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
  {
    name: "Tailwind CSS",
    link: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
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
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg",
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
    github:
      "https://github.com/SaiChakri-d/Csynergy-capacity-planner-client",
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
    title: "Student Mentor Panel",
    github: "https://github.com/SaiChakri-d/student-teacher-management-v3",
    netlify: "https://student-teacher-management-v3.netlify.app/",
    image: studentmentor,
    description:
      "An app created using React, Bootstrap and MUI. This app allows admin user to add, remove and manage both student and teacher data.",
  },
  {
    title: "Simple eCommerce Shop Cart",
    github: "https://github.com/SaiChakri-d/eCommShopCart-reactTask",
    netlify: "https://ecommerce-task-react-sai.netlify.app/",
    image: ecommcart,
    description:
      "Simple eCommerce App created using React. This app enalbes user to add available item to the cart and remove the added item fromthe cart.",
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

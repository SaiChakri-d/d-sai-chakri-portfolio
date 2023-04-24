import dsP from "./components/proimages/dsPizza.png";
import money from "./components/proimages/money.png";
import cpoffice from "./components/proimages/cpoffice.png";
import studentmentor from "./components/proimages/studentmentor.png";
import ecommcart from "./components/proimages/ecommcart.png";
import todolist from "./components/proimages/todolist.png";

export const techStack = [
  {
    name: "JavaScript",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
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
    name: "React",
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    name: "NodeJS",
    link: "https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png",
  },
  {
    name: "Express",
    link: "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
  },

  {
    name: "Postman",
    link: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
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
    name: "MySql",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg",
  },
  {
    name: "MongoDB",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
  },
  {
    name: "Git/GiHub",
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  },
  {
    name: "VS Code",
    link: "https://code.visualstudio.com/assets/branding/app-icon.png",
  },
  {
    name: "TypeScript",
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
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
    title: "dsPizzeria Pizza Delivery App",
    github: "https://github.com/pranaykothari109/dsPizzeria-frontend.git",
    netlify: "https://dsPizzeria-by-sai.netlify.app/",
    image: dsP,
    description:
      "Pizza Delivery App created using MERN stack and STRIPE Payment gateway. This app allows users to order fresh pizzas and track the order details. Also has admin panel which allows all pizza inventory management.",
  },
  {
    title: "Money Manager App",
    github: "https://github.com/SaiChakri-d/moneymanager-sai-frontend",
    netlify: "https://moneymanager-by-sai.netlify.app/",
    image: money,
    description:
      "Money Manager created using MERN stack, has adding transaction (income or expense), Transaction History page, allocating budget, all CRUD operations on money, info, etc.",
  },
  {
    title: "Capacity Planning for an Office",
    github:
      "https://github.com/SaiChakri-d/capacity-planning-for-office-frontend",
    netlify: "https://capacity-planning-deployment-sai.netlify.app/",
    image: cpoffice,
    description:
      "Simple Capcity planning tool created using MERN stack helps HRs to add new employee and manage the existing employees and assigin new tasks to them and easily manage their workload.",
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

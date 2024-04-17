import tulosImg from "../assets/tulos_desktop.png";
import carImg from "../assets/rent_desktop.png";
import stileImg from "../assets/stile_desktop.png";
import clientImg from "../assets/add-project-1.png";
import githubImg from "../assets/add-project-2.png";
import listlyImg from "../assets/listly.png";
import dashboardLaptop from "../assets/dashboard-laptop.png";

export const Projects = [
  {
    id: 1,
    name: "Next JS Dashboard",
    description: "This customer invoice dashboard, built with Next.js, PostgreSQL, and NextAuth.js, offers a real-time view of your customer data. Visualize key metrics, drill down into individual invoices, and filter by various criteria. The secure and scalable framework empowers informed decision-making through improved customer management and data visibility.",
    techstack: ["Next JS", "Tailwind", "PostreSQL"],
    link: "https://next-js-dashboard-nu-five.vercel.app/",
    img: dashboardLaptop,
  },
  {
    id: 2,
    name: "Tulos Ecommerce",
    description: "With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need.",
    techstack: ["React", "SCSS", "Context API"],
    link: "https://tulos.vercel.app",
    img: tulosImg,
  },
  {
    id: 3,
    name: "RENT Car Rental",
    description: "A car rental website is an online platform  that allows users to rent cars for personal or business use.The website provides an interface for searching, comparing, and reserving cars.",
   techstack: ["React", "CSS"],
    link: "https://car-rental-platform-deployed.vercel.app",
    img: carImg,
  },
  {
    id: 4,
    name: "Stile Indoor Ecommerce",
    description: "This project is a frontend application for an e-commerce website built with React and Vite .It includes components for displaying products, categories, and more. The project utilizes a responsive design and leverages Material-UI for icons. Styling is done using vanilla CSS.",
    techstack: ["React", "CSS", "Context API"],
    link: "https://e-commerce-zeta-eosin.vercel.app",
    img: stileImg,
  },
  {
    id: 5,
    name: "listly",
    description: "Listly is a feature-rich todo application designed to help users manage their tasks efficiently. Developed using React, Redux, and Tailwind CSS, Listly offers functionalities like adding, editing, deleting, and marking tasks as completed. The project emphasizes usability and productivity, providing users with a seamless task management experience.",
    techstack: ["React", "Tailwind", "Redux"],
    link: "https://taskquest-one.vercel.app/",
    img: listlyImg,
  },
  {
    id: 6,
    name: "Github Profile Search",
    description: "GitHub Profile Search is a web application developed using React, CSS, and the GitHub API. It enables users to search for GitHub profiles based on usernames. The project provides an intuitive interface for users to easily find and view GitHub profiles, showcasing relevant information and repositories associated with the searched username.",
    techstack: ["React", "CSS", "github API"],
    link: "https://githubprofilesearch-theta.vercel.app/",
    img: githubImg,
  },
  {
    id: 7,
    name: "Client Sync",
    description: "ClientSync is a visually stunning project built with React and styled components. Its primary purpose lies in showcasing responsive design principles rather than offering functional features. The project focuses on demonstrating the flexibility and adaptability of React components along with styled components for creating captivating UI designs.",
    techstack: ["React", "Styled Components",],
    link: "https://client-sync.vercel.app/",
    img: clientImg,
  },

];

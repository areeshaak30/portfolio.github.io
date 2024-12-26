import projectImage from "../assets/project.jpg";
import { BiCodeAlt, BiMobileAlt, BiPalette, BiSearchAlt } from "react-icons/bi";

export const menuItems = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Scrapify Market Uniting Digital Assets",
    image: projectImage,
    description:
      "Using advanced technologies like React.JSX, Node.js, and MongoDB tools to create an easy-to-use platform for buying and selling digital and physical goods. Discovered a mobile app for Scrapify Market using React Native, allowing users to explore and purchase products. Created an admin panel using React.TSX, which manages tasks like secure login and logout, user account approvals, and analyzing platform analytics. Employ AI models for scrap prediction, which analyze keywords to forecast product quality, and a price prediction model that helps determine the accurate price. ",
  },
  {
    id: 2,
    title: "MERN Stack Blog App - Blog Website",
    image: projectImage,
    description:
      "This website serves as a platform where users can share their insights on various topics, including travel, technology, food, health and fitness, and gaming. The blog features essential functionalities such as creating, reading, updating, and deleting (CRUD) posts, with an intuitive user interface designed using Bootstrap for responsiveness across different devices. The website includes multiple pages, such as a home page displaying the five most recent blogs fetched from the database, a dedicated page listing all blog posts, and individual pages for viewing, creating, and editing blogs. The application is powered by a MongoDB database, with schema design facilitated through Mongoose, and follows RESTful conventions for routing and data handling. This project demonstrates my ability to create dynamic, user-friendly web applications with backend integration.",
  },
  {
    id: 3,
    title: "LFR Using Arduino with Front-view Camera",
    image: projectImage,
    description:
      "I developed a Line Following Robot using Arduino, which uses IR sensors to detect a black line on a white surface and control its movement by following the line based on light reflection. In this project, IR transmitters and receivers will be used to send and receive light. When the sensors detect the black line, the Arduino directs the motors to move forward, while any deviation is corrected by adjusting the motor speed. The robot's wheels are driven by DC gear motors to control its movement. This robot can be used as an automated equipment carrier or a tour guide in museums. An ESP32 camera is included for real-time path monitoring.",
  },
];

export const services = [
  {
    title: "Web Development",
    description:
      "Design and develop dynamic, responsive websites to bring ideas to life online.",
    icon: BiCodeAlt,
  },
  {
    title: "Mobile App Development",
    description:
      "Build innovative and high-performing mobile apps for seamless user experiences.",
    icon: BiMobileAlt,
  },
  {
    title: "UI/UX Design",
    description:
      "Create visually appealing and user-friendly designs that enhance the overall user experience.",
    icon: BiPalette,
  },
  {
    title: "Performance Oprimization",
    description:
      "Writing clean, efficient, and scalable code to improve loading times and reduce redundancy.",
    icon: BiSearchAlt,
  },
];

export const contactDetails = [
  {
    id: 1,
    type: "Email",
    value: "areesha.ak30@gmail.com",
    link: "mailto:areesha.ak30@gmail.com",
    icon: "📧",
  },
  {
    id: 2,
    type: "Phone",
    value: "+92 304 3114535",
    link: "tel:+923043114535",
    icon: "📞",
  },
  {
    id: 3,
    type: "LinkedIn",
    value: "linkedin.com/in/areeshaak30/",
    link: "https://www.linkedin.com/in/areeshaak30/",
    icon: "🔗",
  },
  {
    id: 4,
    type: "Location",
    value: "Lahore, Pakistan",
    link: null,
    icon: "📍",
  },
];

export const words = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "MongoDB",
  "NodeJS",
  "Bootstrap",
  "Git",
  "GitHub",
  "VSCode",
  "TypeScript",
  "TailwindCSS",
  "API's",
];

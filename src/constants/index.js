import project1 from "../assets/projects/ExagamingAdmin.jpg";
import project2 from "../assets/projects/Poker.jpg";
import project3 from "../assets/projects/CrashGame.jpg";
import project4 from "../assets/projects/docman.jpg";
import project5 from "../assets/projects/Solitaire.jpg"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in backend-end technologies like Nodejs, BullQueue, Socket.io, PostgreSQL, and Redis, as well as frontend-end technologies like React.js. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
 
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including Node.js, BullQueue, Socket.io, PostgreSQL, React. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Gammastack",
    description: `Led a team in developing and maintaining web applications using JavaScript, Node.js and React.js. Implemented RESTful APIs and integrated with Postgres databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "Node.js", "React.js", "postgres"],
  },
  {
    year: "2019 - 2022",
    role: "Software Engineer",
    company: "Advanced Business & Healthcare Solutions",
    description: `Contributed to the development of web applications using JavaScript, .Net, and MySQL. Managed databases and implemented data storage solutions using MySQL. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: [".NET", "MySQL", "Node.js", "AWS", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "Solitaire Game",
    image: project5,
    description:
      "An Game application for solitaire with features such as real time updates, money management, and queue handling.",
    technologies: ["Node.js", "Postgres", "Redis", "React.js"],
  },
  {
    title: "Exagaming",
    image: project1,
    description:
      "A fully functional Admin panel with features like game reports, admin creating, and game settings updates.",
    technologies: ["Node.js", "Postgres", "Redis"],
  },
  {
    title: "Poker Game",
    image: project2,
    description:
      "An Game application for poker with features such as real time updates, money management, and queue handling.",
    technologies: ["Node.js", "Postgres", "Redis"],
  },
  {
    title: "Crash Game",
    image: project3,
    description:
      "Migrated an existing crash game from GraphQL to Node.js.",
    technologies: ["Node.js", "Postgres", "Redis"],
  },
  {
    title: "DOCMAN Healthcare System",
    image: project4,
    description:
      "A paperless solution for healthcare system for managing prescriptionsand other healthcare transactions.",
    technologies: [".NET", "MySQL", "Node.js", "AWS", "Git"],
  },
];

export const CONTACT = {
  address: "Bangalore, karnataka ",
  phoneNo: "+91 9738069910 ",
  email: "rahulsingh.kv11@gmail.com",
};

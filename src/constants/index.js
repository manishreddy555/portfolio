import project1 from "../assets/assets/projects/project-1.png";
import project2 from "../assets/assets/projects/project-2.png";
import project3 from "../assets/assets/projects/project-3.png";
import project4 from "../assets/assets/projects/project-4.png";

export const HERO_CONTENT = 'I am an AWS Certified Full Stack Developer with over 3 years of experience specializing in microservices architecture and scalable application development. My expertise lies in optimizing system performance and enhancing business operations through technologies like Java Spring Boot, AWS, and modern front-end frameworks such as React and Angular. With a strong foundation in cloud platforms, RESTful APIs, and robust DevOps practices, I am driven to create innovative, high-performance solutions that deliver exceptional results and elevate user experiences.';

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. With over 3 years of professional experience, I have worked with a variety of technologies, including React, Angular, Java Spring Boot, MySQL, PostgreSQL, and AWS. My journey in software development began with a deep curiosity for how systems work, evolving into a career where I continuously embrace new challenges and opportunities to learn. I thrive in collaborative environments and enjoy solving complex problems to deliver impactful solutions. Outside of coding, I stay active by playing football and cricket, and I'm a huge Manchester United fan—sometimes, their results even determine my mood!`;

export const EXPERIENCES = [
  {
    year: "2021 - 2022",
    role: "Software Engineer",
    company: "WM Morrisons Supermarkets",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Java", "Spring Boot", "AWS", "Postgres", "Microservices"],
  },
  {
    year: "2020 - 2021",
    role: "Junior Software Engineer",
    company: "WM Morrisons Supermarkets",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Java", "Spring Boot", "JavaScript", "React", "Datadog"],
  },
  {
    year: "2019 - 2019",
    role: "Software Intern",
    company: "Qrius Research Labs",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Node.js", "Express", "Chatbots", "MongoDB"],
  },

];

export const EDUCATION = [
  {
    year: "2023 - 2024",
    degree: "Master of Science in Information Technology",
    university: "University of Cincinnati, Cincinnati, OH",
    CGPA: "4.0",
    Course_work: "Tech for Mobile Apps, Human Computer Interaction, Principles of Cybersecurity, Advanced Storage Technologies, Information Security Assurance, Advanced System Administration, Machine Learning and Data Mining",
  },
  {
    year: "2017 - 2021",
    degree: "Bachelor of Engineering in Electronics and Communication Engineering",
    university: "Osmania University, Hyderabad, IN",
    CGPA: "3.03",
    Course_work: "Data Communication & Computer Networking, Database Design, Web Programming, Computer Organisation & Architecture, Microprocessors & Microcontrollers, Control Systems, Computer Programming",
  }
];


export const PROJECTS = [
  {
      title: "Web-Based Inventory Management System",
      image: project1,
      description: "Developed an inventory management system with real-time synchronization and a responsive UI for efficient stock tracking and management.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "Tailwind CSS", "REST APIs"],

    
  },
  {
    title: "Employee Attendance Tracking System",
    image: project2,
    description:
    "CCreated an attendance management system featuring role-based access control, user authentication, and automated email notifications with a responsive UI.",
    technologies: ["Java", "Spring Boot", "MySQL", "Hibernate", "JUnit", "Spring Security", "Thymeleaf", "Maven"],
  },
  
  {
    title: "Retail Banking Web Application",
    image: project3,
    description:
      "Designed a banking application for managing accounts and transactions with real-time updates and secure processing.",
    technologies: ["Java", "React", "PostgreSQL", "Spring Boot"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React", "Tailwind CSS", "Framer Motion", "JavaScript"],
  },
];

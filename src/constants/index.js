import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    company,
    threejs,
    image,
    image2,
    image3,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Backend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "Xylem / Evoqua Water Technologies India Private Limited",
      icon: company,
      iconBg: "#383E56",
      date: "July 2024 - September 2024",
      points: [
        "Collaborated in a fast-paced agile environment to deliver two full-stack applications.",
        "Developed HLD and LLD documentation for system workflows.",
        "Wrote efficient, clean code using Angular, Express.js, and SQL databases.",
        "Utilized Figma for designing user interfaces.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Hostel Management App",
      description:
        "A full-stack web application using React, MSSQL, and Express to manage hostel operations like mess management, attendance and billing. Features dynamic cost calculations and innovative UI designs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mssql",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "express.js",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
      ],
      image: image,
      live: "https://tpgit-hostels.vercel.app/",
      source_code_link: "https://github.com/latha1307/Hostel-Management-Application",
    },
    {
      name: "Learn Ed-Tech Platform",
      description:
        "An innovative e-learning platform offering interactive courses and resources to enhance technology skills, featuring personalized learning paths and real-time progress tracking for students.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "responsive",
          color: "green-text-gradient",
        },
      ],
      image: image2,
      live: 'https://learn-ed-tech-platform.vercel.app/',
      source_code_link: "https://github.com/latha1307/Learn-EdTech-Platform",
    },
    {
      name: "3D Solar System",
      description:
        "An immersive 3D simulation of the solar system built with Three.js, showcasing realistic planetary motion, textures, and interactive features for an engaging learning experience.",
      tags: [
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "three.js",
          color: "blue-text-gradient",
        },
      ],
      image: image3,
      live: 'https://3-d-solar-system-cyan.vercel.app/',
      source_code_link: "https://github.com/latha1307/3D-Solar-System",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
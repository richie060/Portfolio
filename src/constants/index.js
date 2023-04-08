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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      id: "services",
      title: "Services",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "gallery",
      title: "Gallery",
    },
   
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI UX Designer",
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
      title: "UI UX Designer",
      company_name: "Freelancing (Fiver, upwork etc.)",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - Present",
      points: [
        "Designed a mobile app from conception  to delivery",
        "Conducted User Research and User Testing",
        "Designed creative and intuitive website.", 
        "Wireframing in lo-fi hi-fi prototyping.", 
        "Helped to build brand assets.",
        "Managed the projects using Agile development framework to assure efficiency and quality delivery",
        "Designed the application / customizing user flow  Developed the app in Figma "
      ],
    },
    {
      title: "Android app Developer",
      company_name: "Final year Project",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2022 - Jul 2022",
      points: [
        " Lead a team of 4+ developers in the success full design and development of Tujibonge application of native  navigation features.", 
        "Migrated the Android code base to suit MVVM architecture which made the code more maintainable and crash Free.", 
        "Collaborated with API Developers to provide data to the app through RESTful APIs, JSON",
        "Developed creative and intuitive Application.",
        "Guiding teams in Developing and debugging android apps using MVVM architecture using Kotlin.",
        "Providing guidance in API integration.",
        "Guided the teams how to use RESTful APIs.",
        "Responsible for resolving bugs and production issues along with writing clean , well-tested, maintainable and re-usable code using MVVM Architecture. "
      ],
    },
    {
      title: "Web Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Present",
      points: [
        "Guiding teams in Wireframing in lo-fi hi-fi prototyping.",
       " Guiding teams in Developing and debugging Web apps using MVC architecture using PHP, SQL and Javascript",
        "Guiding teams in implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        " Conducted website audits, identified technical SEO issues, and implemented solutions to improve website crawlability and indexation",
        " Optimized website content, including meta tags and header tags, to improve search engine rankings and drive organic traffic",
      ],
    },
    {
      title: "ICT Technician",
      company_name: "Nyahururu county referal hospital",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Oct 2022",
      points: [
        "Troubleshooting Information systems (Check Health Information System)",
        "Configuring Servers, Routers and Switche",
        "Hardware installation",
        "Configuring proxy settings.",
        "Monitoring the proxy server to ensure every user has access to the network",
        "Troubleshooting network and Software",
      ],},
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Richard proved me wrong.",
      name: "Sam Mburu",
      designation: "Software Developer ",
      company: "Kenya Airlift",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a UI  who truly cares about their clients' success like Richard does.",
      name: "Mike muturi",
      designation: "Web Developer",
      company: "Reasons Agency",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
   
    {
      testimonial:
        "After Richard optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Jackie Chelera",
      designation: "Project Manager",
      company: "Andela",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Company Id",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "Photoshop",
          color: "green-text-gradient",
        },
        {
          name: "UI UX Design",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "View Poa",
      description:
        "This application is designed for wheelchair-accessible places.On View poa everyone from all over the world can find and add places, rate them by using traffic light system.The app shall help wheelchair users and people with mobility impairements to plan their day more effectively.E.g when accessing hotels, institution , etc. Designed in Figma",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "UI UX Design",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Logo Design",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "Adobe illustrator",
          color: "green-text-gradient",
        },
        {
          name: "Photoshop",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  
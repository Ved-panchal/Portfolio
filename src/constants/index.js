import {
    ADS,
    ethereum,
    blockchain,
    developer,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    todo,
    Chatapp,
    nft,
    oys,
    tripguide,
    threejs,
    avalanche,
    ethers,
    web3,
    truffle,
    hardhat,
    utsav,
    smit,
    AKAM,
    github,
    git,
    ms,
    instagram,
    twitter,
    linkedin,
    shreya,
    // IBM,
    IBM1,
    STTL,
    // IBM2,
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
    {
      id: "Download",
      title: "Download CV"
    }
  ];
  
  const services = [
    {
      title: "Web3 Developer",
      icon: developer,
    },
    {
      title: "Smart Contract Developer",
      icon: ethereum,
    },
    {
      title: "Blockchain Software Developer",
      icon: blockchain,
    },
    {
      title: "Facebook ADS",
      icon: ADS,
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
      name: "ethers",
      icon: ethers,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "web3js",
      icon: web3,
    },
    {
      name: "truffle",
      icon: truffle,
    },
    {
      name: "hardhat",
      icon: hardhat,
    },
    {
      name: "Git",
      icon: git,
    },

  ];
  
  const experiences = [
    {
      title: "Avalanche Hackathon",
      company_name: "Avalanche Hackathon",
      icon: avalanche,
      iconBg: "#383E56",
      date: "August 2022 - September 2022",
      points: [
        "Successfully delivered a cutting-edge DEFI project as our final submission in the prestigious Avalanche Hackathon.",
        "Actively engaged in high-value networking calls, sought-after mentoring sessions, and knowledge-rich workshops throughout the hackathon.",
        "Seamlessly integrated and harnessed the power of Quick Node technology to elevate the functionality and performance of our project on the Avalanche network.",
        "Capitalized on the hackathon to learn, connect, and establish a strong blockchain presence.",
      ],
    },
    {
      title: "Azadi Ka Amrit Mahotsav Hackathon",
      company_name: "Azadi Ka Amrit Mahotsav Hackathon",
      icon: AKAM,
      iconBg: "#E6DEDD",
      date: "September 2022 - October 2022",
      points: [
        "Crafted a captivating metaverse for the Gujarat museum in the Azadi Ka Amrit Mahotsav Hackathon, showcasing the state's heritage.",
        "Developed the metaverse within the intense 36-hour timeframe, demonstrating our ability to deliver under pressure.",
        "Acquired valuable experience and expertise in Unity, Blender graphics, Oculus Quest 2, and C# by exploring these cutting-edge technologies.",
        "Explored new frontiers in virtual reality, creating an immersive and visually stunning experience for the museum's visitors.",
      ],
    },
    {
      title: "IBM FrontEnd Internship",
      company_name: "IBM",
      icon: IBM1,
      iconBg: "#383E56",
      date: "July 2023 - September 2023",
      points: [
        "Award-winning team from IBM Frontend Internship, showcasing excellence in problem-solving and innovation.",
        "Developed a real-life solution addressing pertinent challenges, highlighting technical prowess and creativity.",
        "Invited to IBM CSRBox Event in Delhi, recognizing impactful contributions to technology and society.",
        "Leveraged IBM Frontend Internship to cultivate invaluable skills, driving meaningful impact through collaborative problem-solving and project development.",
      ],
    },
    
    {
      title: "Internship",
      company_name: "Silver Touch Pvt Ltd",
      icon: STTL,
      iconBg: "white",
      date: "Jan 2024 - Present",
      points: [
        "Secured position as Software Trainee at Silver Touch through Campus Placement, commencing January 2024.",
        "Acquired comprehensive understanding of company fundamentals, client management, and full-stack system development.",
        "Strengthened proficiency in MSSQL, honed object-oriented programming skills, and gained insight into ERP and SAP systems.",
        "Demonstrated problem-solving capabilities through solving Data Structures and Algorithms questions, enhancing versatility and readiness for professional challenges.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Ved is a top-notch blockchain developer with React proficiency and a solid grasp of Web 3 technologies. His meticulous approach and seamless integration of interfaces with blockchain infrastructure make them a valuable asset in the field.",
      name: "Utsav Pandya",
      designation: "Student",
      company: "GEC Modasa",
      image: utsav,
    },
    {
      testimonial:
        "Working with VED was a pleasure. His technical expertise, communication skills, and problem-solving abilities make him an invaluable Web3 developer. I highly recommend him and look forward to future collaborations.",
      name: "Smit Patel",
      designation: "Student",
      company: "GEC Modasa",
      image: smit,
    },
    {
      testimonial:
        "Ved combines deep Web 3 expertise in Solidity, JavaScript, and React with hands-on experience in decentralized platforms, making them a valuable asset for creating innovative decentralized applications.",
      name: "Shreya Patel",
      designation: "Student",
      company: "GEC Modasa",
      image: shreya,
    },
  ];
  
  const projects = [
    {
      name: "ToDo App",
      description:
        "Upgrade your task management with the user-friendly React Todo app, leveraging the power of Redux for added features. Stay organized and boost productivity with its easy-to-use interface, efficient state management, and seamless task organization capabilities.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "motion",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/Ved-panchal/Ved-Todo-React",
      live_code_link: "https://my-todo-c4993.web.app/",
    },
    {
      name: "Chat App",
      description:
        "This project utilizes Node.js and ChatEngine.io for real-time communication, while React.js with pre-built Chat UI components creates a user-friendly frontend. It supports  messaging, file sharing, group chats, and DMs for a comprehensive chat experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: Chatapp,
      source_code_link: "https://github.com/Ved-panchal/Chat-App",
      live_code_link: "https://chat-app-dc789.web.app/",
    },
    {
      name: "NFT Dapp",
      description:
        "A NFT project which can be used to add NFTs, Mint NFTs, Buy NFTs.Developed using React, Solidity, and Tailwind, it provides a user-friendly platform for effortless NFT creation. This project serves as a deployed test model on the Goerli testnet for testing its functionality before its release.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "solidity",
          color: "pink-text-gradient",
        },
      ],
      image: nft,
      source_code_link: "https://github.com/Ved-panchal/NFT-app",
      live_code_link: "https://nft-dpp.web.app/",
    },
    {
      name: "Order Your Snacks",
      description:
        "A NFT project which can be used to add NFTs, Mint NFTs, Buy NFTs.Developed using React, Solidity, and Tailwind, it provides a user-friendly platform for effortless NFT creation. This project serves as a deployed test model on the Goerli testnet for testing its functionality before its release.",
      tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: oys,
      source_code_link: "https://github.com/AdityaShinde03/Order-Your-Snacks",
      live_code_link: "https://order-your-snacks.vercel.app/",
    },
  ];
  export { services, technologies, experiences, testimonials, projects };
export function useConstants() {
  const navigation = [
    {
      id: 1,
      name: "About",
      href: "/about",
    },
    {
      id: 2,
      name: "Skills",
      href: "/skills",
    },
    {
      id: 6,
      name: "Timeline",
      href: "/timeline",
    },
    {
      id: 3,
      name: "Works",
      href: "/works",
    },
    {
      id: 4,
      name: "Projects",
      href: "/projects",
    },
    {
      id: 5,
      name: "Contact",
      href: "/contact",
    },
    /* {
      id: 6,
      name: "Blog",
      href: "https://my-blog-uriel-portfolio.vercel.app/",
    }, */
  ];

  const skillWithLogo = [
    {
      imgUrl: "/logos/html5-original.svg",
      name: "HTML",
      alt: "HTML logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/css3-plain-wordmark.svg",
      name: "CSS",
      alt: "CSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/javascript-original.svg",
      name: "JavaScript",
      alt: "JavaScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/vuejs-original.svg",
      name: "Vue",
      alt: "Vue logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nuxtjs-original.svg",
      name: "Nuxt",
      alt: "Nuxt logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/react-original.svg",
      name: "React",
      alt: "React logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/tailwindcss-plain.svg",
      name: "TailwindCSS",
      alt: "TailwindCSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/gcp.svg",
      name: "GCP",
      alt: "gcp",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/typescript-original.svg",
      name: "TypeScript",
      alt: "TypeScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/angular.svg",
      name: "Angular",
      alt: "angular",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nodejs-original.svg",
      name: "NodeJS",
      alt: "NodeJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/git-original.svg",
      name: "Git",
      alt: "Git logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/aws.svg",
      name: "AWS",
      alt: "AWS",
      width: 321,
      height: 315,
    },
    {
      imgUrl: "/logos/php.svg",
      name: "PHP",
      alt: "php",
      width: 512,
      height: 512,
    },
    {
      imgUrl: "/logos/laravel.svg",
      name: "Laravel",
      alt: "laravel",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/wordpress.svg",
      name: "Wordpress",
      alt: "wordpress",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/jquery-original.svg",
      name: "jQuery",
      alt: "jQuery logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/flutter.svg",
      name: "Flutter",
      alt: "flutter",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/java.svg",
      name: "Java",
      alt: "java",
      width: 150,
      height: 150,
    },
  ];
  const hobbies = [
    {
      title: "Play video games",
      text: "Recently I have been playing online games like LOL, CS GO and Yugioh Master Duel.",
      classBg: "bg-joystick",
    },
    {
      title: "Chess",
      text: "One of the activities I really enjoy is Chess, it helps to improve my conception and logic.",
      classBg: "bg-chess",
    },
    {
      title: "Learning new technologies/framework",
      text: "I'm currently studying technologies like Go, Flutter and Jenkins, as well as new horizons with Python beyond Web development.",
      classBg: "bg-programming",
    },
    {
      title: "Listening to music",
      text: "I love different types of musical genres, recently listening to music like Siamese, 80s/90s Rock and any good music.",
      classBg: "bg-music",
    },
  ];

  const projects = [
    {
      isReverse: true,
      title: "Arboreall",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/arboreall.png",
      description:
        "Project still in its initial phase which aims to change the way companies and employees see themselves. I work within a team in which we developed this platform and my contribution comes from the backend and infrastructure developed so far.",
      techStack: [
        "Amazon Web Services (AWS)",
        "PHP",
        "Vue.js",
        "MySQL",
        "Git",
        "Laravel",
        "Docker"
      ],
      isUrl: true,
      urlLink: "https://arboreall.com/",
      /* githubLink: "#", */
    },
    {
      isReverse: true,
      title: "React Course",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/react_course.png",
      description:
        "Developed by members of He4rt Developers, this repository is aimed at introducing beginner developers to the ReactJS universe with its content built for simple understanding.",
      techStack: [
        "React.js",
        "JavaScript",
        "Markdown",
      ],
      isUrl: true,
      urlLink: "https://github.com/he4rt/react4noobs",
      githubLink: "https://github.com/he4rt/react4noobs",
    },
  ];

  const workingProjects = [
    {
      image: {
        src: "/work/ufal.png",
        alt: "UFAL",
        width: "800",
        height: "600",
        maxWidth: "max-w-[18%] md:max-w-[30%] 3xl:max-w-[45%]",
      },
      imageShowcase: [
        {
          title: "Landing Page - UFAL",
          src: "/work/ufal_landing_page.png",
          alt: "landing-page ufal",
          width: "800",
          height: "446",
        },
        {
          title: "Moodle - UFAL",
          src: "/work/moodle_ufal.png",
          alt: "Moodle",
          width: "800",
          height: "446",
        },
        {
          title: "Sie Web - UFAL",
          src: "/work/sie_web.png",
          alt: "Sie Web",
          width: "800",
          height: "404",
        },
      ],
      heading: "UFAL",
      description: `As a part of the University's IT Sector, our primary focus was to develop and support internal applications/systems. We employed a versatile tech stack, utilizing Java (Spring/Spring Boot), PHP (Laravel and Symfony), and Node.js for backend development, while employing React.js, Angular, and jQuery for frontend development. Our databases included SQL (Oracle DB, MySQL, PostgreSQL) and NoSQL (MongoDB). Additional technologies like Dockers, Typescript, GCP, SOLID, Scrum/Kanban, Git, and GitHub were also part of our toolkit. The systems we supported were crucial to thousands of students, teachers, and employees, ensuring continuous online availability and seamless performance.`,
      teamMembers: [
        {
          name: "UFAL Team",
          linkedIn: "https://ufal.br/ufal/institucional/orgaos-de-apoio/administrativo/nti",
        },
      ],
      techStack: ["Java", "Laravel", "JQuery", "Symfony Framework", "HTML5", "AJAX", "Git", "PHP", "Spring Framework", "SASS", "PostgreSQL", "CSS3", "JavaScript"],
      highlights: "Develop products and services for the University's internal sectors",
      urls: [
        {
          name: "UFAL",
          link: "https://ufal.br/",
        },
      ],
    },
    {
      image: {
        src: "/work/mobileum.png",
        alt: "Mobileum",
        width: "800",
        height: "600",
        maxWidth: "max-w-[15%] md:max-w-[25%] 3xl:max-w-[40%]",
      },
      imageShowcase: [
        {
          title: "Mobileum",
          src: "/work/mobileum_portugal.png",
          alt: "Mobileum",
          width: "800",
          height: "446",
        },
      ],
      heading: "Mobileum",
      description: `As a Product Support Engineer at Mobileum, I provided L3 support and conducted developments for the RAID product. I worked with JavaScript/JQuery, Java, Spring, Oracle Database/PL-SQL, and PostgreSQL technologies. My focus was on maintaining the product, supporting users worldwide, and optimizing performance. RAID is widely used in the Telecommunications sector by thousands of companies globally. I am passionate about delivering quality service and contributing to cutting-edge advancements in the industry. Let's connect to explore potential opportunities for collaboration.`,
      teamMembers: [
        {
          name: "Mobileum Team",
          linkedIn: "https://www.mobileum.com/about/executive-team/",
        },
      ],
      techStack: ["HTML5", "CSS3", "Java", "AJAX", "Git", "PostgreSQL", "Agile Methodologies", "PL/SQL", "Oracle SQL Developer"],
      highlights: "Develop and support the product called Raid",
      urls: [
        {
          name: "Mobileum",
          link: "https://www.mobileum.com/",
        },
      ],
    },
    {
      image: {
        src: "/work/nex.jpeg",
        alt: "Nex",
        width: "800",
        height: "600",
        maxWidth: "max-w-[15%] md:max-w-[25%] 3xl:max-w-[40%]",
      },
      imageShowcase: [
        {
          title: "Nex - Vendus",
          src: "/work/vendus.png",
          alt: "Vendus",
          width: "800",
          height: "446",
        },
        {
          title: "Nex - Racius",
          src: "/work/racius.png",
          alt: "Racius",
          width: "800",
          height: "446",
        },
      ],
      heading: "Nex",
      description: `As a versatile developer, I handled both backend and frontend tasks, making improvements and adding new features to the company's products. My tech stack included HTML, CSS, JavaScript, JQuery, PHP (Zend Framework/Laminas), MySQL, and AWS, with some Laravel implementations. Applying agile methodologies and advanced development principles like SOLID and Clean Code, our SaaS products became essential tools for thousands of companies.`,
      teamMembers: [
        {
          name: "Nex Team",
          linkedIn: "https://www.nex.pt/quem-somos/",
        },
      ],
      techStack: ["Laravel", "HTML5", "LAMP", "AJAX", "Git", "PHP", "Zend Framework", "Bootstrap", "Agile Methodologies", "CSS3", "Python", "JavaScript", "MySQL", "Amazon Web Services"],
      highlights: "Develop and support Nex products such as Vendus and Racius",
      urls: [
        {
          name: "Nex",
          link: "https://www.nex.pt/",
        },
      ],
    },
    {
      image: {
        src: "/work/spms.png",
        alt: "spms",
        width: "800",
        height: "600",
        maxWidth: "max-w-[15%] md:max-w-[25%] 3xl:max-w-[40%]",
      },
      imageShowcase: [
        {
          title: "Landing Page - SPMS",
          src: "/work/spms_landing_page.png",
          alt: "spms",
          width: "800",
          height: "446",
        },
      ],
      heading: "SNS/SPMS",
      description: `As a full-stack developer at SNS/SPMS, I played a crucial role in developing applications for the PEM (Prescrição Eletrónica de Medicamentos / Electronic Prescription of Medicines) project, aimed at modernizing Portugal's healthcare system. In this position, I utilized a range of technologies, including Java, Spring/Spring Boot, JavaScript, JQuery, and Liferay. Working within an Agile team using Scrum, I contributed to building an application that serves the entire National Health system. My dedication to this project has been driven by a passion for improving healthcare services in the country.`,
      teamMembers: [
        {
          name: "SPMS Team",
          linkedIn: "https://www.linkedin.com/company/spms-epe/people/",
        },
      ],
      techStack: ["Java", "HTML5", "Liferay", "Git", "Spring Framework", "jQuery", "CSS3", "PL/SQL", "JavaServer Pages (JSP)", "JavaScript", "Oracle Database"],
      highlights: "Develop the main product - PEM - Electronic Prescription of Medicines",
      urls: [
        {
          name: "SPMS",
          link: "https://www.spms.min-saude.pt/",
        },
      ],
    },
    {
      image: {
        src: "/work/gobuddy.jpeg",
        alt: "gobuddy",
        width: "800",
        height: "600",
        maxWidth: "max-w-[15%] md:max-w-[25%] 3xl:max-w-[40%]",
      },
      imageShowcase: [
        {
          title: "Landing Page - GoBuddy",
          src: "/work/gobuddy_landing_page.png",
          alt: "gobuddy",
          width: "800",
          height: "446",
        },
      ],
      heading: "GoBuddy App",
      description: `As a Mobile Development Technical Consultant, I played a key role in the growth of the company's application, serving hundreds of users in the Porto region. My responsibilities included maintaining app integrity, developing new features, and collaborating with an international external team. I utilized Node.js and MongoDB for the backend, Ionic framework with Angular and React for the frontend, and AWS for cloud infrastructure. Additionally, I integrated essential services like Twilio, Stripe, and Magnifinance to enhance app functionality.`,
      teamMembers: [
        {
          name: "GoBuddy Team",
          linkedIn: "https://www.linkedin.com/company/spms-epe/people/",
        },
      ],
      techStack: ["Angular", "Git", "React.js", "Node.js", "MongoDB", "Ionic Framework", "Amazon Web Services (AWS)"],
      highlights: "Develop the main product - GoBuddy App",
      urls: [
        {
          name: "GoBuddy",
          link: "https://gobuddyapp.com/",
        },
      ],
    },
    {
      image: {
        src: "/work/nativeip.png",
        alt: "nativeip",
        width: "800",
        height: "600",
        maxWidth: "max-w-[15%] md:max-w-[25%] 3xl:max-w-[40%]",
      },
      imageShowcase: [
        {
          title: "Landing Page - Native IP",
          src: "/work/nativeip_landing_page.png",
          alt: "nativeip",
          width: "800",
          height: "446",
        },
      ],
      heading: "Native IP",
      description: `I provide services as a full-stack javascript developer, creating and making improvements and corrections to the company's products and developing new projects, using modern/legacy javascript technologies. I worked at the company as a freelancer. We use technologies such as AngularJs, React.js, Node.js and Express.js, Electron.js, React-Native and we work in an Agile environment, our product was mainly used by small and medium-sized companies as a cost-effective solution to replace complex callcenter and intelligently automate processes.`,
      teamMembers: [
        {
          name: "Native IP Team",
          linkedIn: "https://www.linkedin.com/company/native-ip/people/",
        },
      ],
      techStack: ["HTML5", "GraphQL", "Express.js", "AngularJS", "Git", "React.js", "SASS", "Node.js", "CSS3", "JavaScript", "WebRTC", "Electron.js"],
      highlights: "Develop the main product - Native and Infinity",
      urls: [
        {
          name: "Native IP",
          link: "https://nativeip.com.br/",
        },
      ],
    },
    {
      image: {
        src: "/work/comuniverse.jpeg",
        alt: "comuniverse",
        width: "800",
        height: "600",
        maxWidth: "max-w-[40%] md:max-w-[60%] 3xl:max-w-[75%]",
      },
      imageShowcase: [
        {
          title: "Landing Page - Comuniverse",
          src: "/work/comuniverse_landing_page.png",
          alt: "comuniverse",
          width: "800",
          height: "446",
        },
      ],
      heading: "Comuniverse",
      description: `As a full-stack developer, I played a key role in developing, refactoring, and managing projects in education, video streaming, and more. My expertise spans PHP, Laravel, JavaScript/TypeScript, Node.js, React.js, AWS, and Docker. I've also worked with Vue.js/Nuxt.js, Nest.js, C#/.NET, and React Native in an Agile team using Scrum/Kanban methodologies. Our applications reached thousands of users, serving various purposes. I continuously delivered high-quality solutions, meeting evolving user demands.`,
      teamMembers: [
        {
          name: "Comuniverse Team",
          linkedIn: "https://www.comuniverse.co/equipe/",
        },
      ],
      techStack: ["Laravel", "HTML5", "LAMP", "TypeScript", "Vue.js", "Git", "PHP", "React.js", "SASS", "Nuxt.js", "Node.js", "CSS3", "MySQL", "Amazon Web Services (AWS)"],
      highlights: "Develop the main product - Comuniverse English Platform and others products",
      urls: [
        {
          name: "Comuniverse",
          link: "https://comuniverse.co/",
        },
      ],
    },
    {
      image: {
        src: "/work/fidelizarte.jpg",
        alt: "fidelizarte",
        width: "800",
        height: "600",
        maxWidth: "max-w-[40%] md:max-w-[60%] 3xl:max-w-[75%]",
      },
      imageShowcase: [
        {
          title: "Landing Page - Fidelizarte",
          src: "/work/fidelizarte_landing_page.png",
          alt: "fidelizarte",
          width: "800",
          height: "446",
        },
      ],
      heading: "Fidelizarte",
      description: `As a web/mobile developer, I create web systems and apps for clients using technologies like PHP, Laravel, Node.js, MySQL, JavaScript, jQuery, Angular/Ionic, React and Vue.js. I handle full-cycle application development, including testing and deployment. I also have experience in customer interaction to ensure their needs are met.`,
      teamMembers: [
        {
          name: "Fidelizarte Team",
          linkedIn: "https://www.fidelizarte.pt/en/about-us",
        },
      ],
      techStack: ["Laravel", "LAMP", "Angular", "Git", "PHP", "React.js", "jQuery", "Node.js", "Ionic Framework", "JavaScript", "MySQL", "Vue.js"],
      highlights: "Develop and support Fidelizarte products",
      urls: [
        {
          name: "Fidelizarte",
          link: "https://www.fidelizarte.pt/",
        },
      ],
    },
  ];

  const timeline = [
    {
      date: "Jul 2023",
      title: "Fidelizarte",
      description: "In July 2023 I carried out some projects together with Fidelizarte, but in January 2024 I started working definitively with the team, after the end of the contract with Comuniverse.",
      // icon: "",
      link: {
        text: "Fidelizarte",
        url: "https://www.fidelizarte.pt/",
      },
    },
    {
      date: "Aug 2022",
      title: "Comuniverse",
      description: "While I was at PrimeIT, I worked on some side projects with Comuniverse, but in January 2023 I started working permanently with them.",
      // icon: "",
      link: {
        text: "Comuniverse",
        url: "https://www.comuniverse.co/",
      },
    },
    {
      date: "Jan 2022",
      title: "Prime IT",
      description: "A few months ago in Portugal, I started working at PrimeIT where I stayed for 1 year as an IT consultant working on various projects and clients.",
      // icon: "",
      link: {
        text: "Prime IT",
        url: "https://www.primeit.pt/",
      },
    },
    {
      date: "Nov 2021",
      title: "Flag",
      description: "Professional training course to improve skills as a Full Stack developer.",
      // icon: "",
      link: {
        text: "Flag",
        url: "https://flag.pt/",
      },
    },
    {
      date: "Jun 2018",
      title: "Universidade Federal de Alagoas - UFAL (Work)",
      description: "I begin my journey as a Software Engineer in the University's development sector.",
      // icon: "",
      link: {
        text: "UFAL",
        url: "https://ufal.br/",
      },
    },
    {
      date: "June 2016",
      title: "Universidade Federal de Alagoas - UFAL (Education)",
      description: "My training focused on the foundations of computing and mathematics oriented towards software development and research, but unfortunately I interrupted my training in the middle of the course for personal and work reasons.",
      // icon: "",
      link: {
        text: "UFAL",
        url: "https://ufal.br/",
      },
    },
    {
      date: "Jan 2013",
      title: "SESI/SENAI - EBEP (Maceió-AL Unit)",
      description: "Technical training in the area of Computer Networks (Course with CISCO CCNA training and certification).",
      // icon: "",
      link: {
        text: "SENAI",
        url: "https://al.senai.br/",
      },
    },
  ];

  return {
    navigation,
    hobbies,
    skillWithLogo,
    projects,
    workingProjects,
    timeline,
  };
}

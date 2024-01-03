import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    api,
    html,
    css,
    reactjs,
    bootstrap,
    python,
    nodejs,
    mongodb,
    git,
    figma,
    postgresql,
    generalAssembly,
    sanyaSchool,
    EF,
    tide,
    apptrak,
    dm,
    express,
    lightroom,
    card,
    blackjack,
    bootcampr
} from "../assets";

const navLinks = [
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
        title: "Software Engineering",
        icon: web,
    },
    {
        title: "Frontend Development",
        icon: mobile,
    },
    {
        title: "Backend Development",
        icon: backend,
    },
    {
        title: "Photography",
        icon: creator,
    },
];

const technologies = [
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Express",
        icon: express,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Adobe Lightroom",
        icon: lightroom,
    },
    {
        name: "Rest API",
        icon: api,
    },
];

const experiences = [
    {
        title: "Software Engineer",
        company_name: "Bootcampr",
        icon: bootcampr,
        iconBg: "#FFF",
        date: "December 2023 - Present",
        points: [
            "Develop and maintain frontend components using technologies such as React.js and TypeScript, ensuring a responsive and user-friendly interface",
            "Maintain backend routing and database operations using Node.js and MongoDB, optimizing performance and scalability.",
            "Collaborate with cross-functional teams including designers, product managers, and other developers to create high-quality components that meet Figma specifications.",
            "Maintain version control using Git and GitHub, actively participating in code reviews and providing constructive feedback to enhance team collaboration.",
        ],
    },
    {
        title: "Software Engineering Fellow",
        company_name: "General Assembly",
        icon: generalAssembly,
        iconBg: "#FFF",
        date: "August 2023 - November 2023",
        points: [
            "Successfully completed 500+ hours of expert-led instruction in fullstack development fundamentals using programming languages such as JavaScript and Python as well as other in demand technologies to develop software that is scalable and user friendly.",
            "Seamlessly worked in a team environment and used version control systems such as Git and GitHub to manage team workflow.",
            "Skilled in software engineering concepts such as object-oriented programming and Computer Science.",
        ],
    },
    {
        title: "International Baccalaureate Teacher",
        company_name: "Sanya Foreign Language School",
        icon: sanyaSchool,
        iconBg: "#FFF",
        date: "December 2021 - July 2023",
        points: [
            "Spearheaded the collaborative design and successful implementation of IB educational programs, resulting in a 10% increase in final grades for PYP students.",
            "Demonstrated commitment to career growth by actively participating in and applying insights from workshops and training activities to stay in line with industry best practices.",
            "Nurtured an inclusive and productive classroom environment, contributing to a rise in class participation.",
        ],
    },
    {
        title: "English Teacher",
        company_name: "English First",
        icon: EF,
        iconBg: "#4971B2",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Designed and implemented age-appropriate activities and lesson plans in accordance with EF's teaching standards",
            "Participated in and led weekly training sessions, actively contributing to the improvement of teaching skills and methodologies",
            "Collaborated with cross-functional colleagues to enhance classroom outcomes and elevate customer satisfaction, fostering a collaborative and dynamic learning environment.",
        ],
    },
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
        name: "Tide Seeker",
        description:
            "Web-based platform that allows users to search, view, and manage their favorite surf spots from around the world.",
        tags: [
            {
                name: "node.js",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image: tide,
        source_code_link: "https://github.com/jackheimburge/tide-seeker",
        live_link: 'https://tide-seeker-1959079ff47b.herokuapp.com/'
    },
    {
        name: "App Trak",
        description:
            "Seamlessly manage and track all of your job applications in one central hub. View analytics on your job search to view progress and make changes to your strategy.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "heroku",
                color: "pink-text-gradient",
            },
        ],
        image: apptrak,
        source_code_link: "https://github.com/jackheimburge/job-trak",
        live_link: 'https://app-traak-354121237766.herokuapp.com/'
    },
    {
        name: "DM Solutions",
        description:
            "A car dealership management tool for managing and updating inventory and tracking sales data.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Django",
                color: "green-text-gradient",
            },
            {
                name: "postgresql",
                color: "pink-text-gradient",
            },
        ],
        image: dm,
        source_code_link: "https://github.com/jackheimburge/dm-solutions",
        live_link: 'https://dm-solutions-6a34df6ef1ad.herokuapp.com/'
    },
    {
        name: "The Card Hub",
        description:
            "A one stop shop web based e-commerce app for buying and selling your favorite sports cards.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "aws",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: card,
        source_code_link: "https://github.com/jackheimburge/card-hub",
        live_link: 'https://github.com/jackheimburge/card-hub'
    },
    {
        name: "Blackjack Web App Game",
        description:
            "Based off the casino gambling favorite, Blackjack. Play against the dealer! How big can you make your wallet?",
        tags: [
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "DOM",
                color: "green-text-gradient",
            },
            {
                name: "gaming",
                color: "pink-text-gradient",
            },
        ],
        image: blackjack,
        source_code_link: "https://github.com/jackheimburge/blackjack",
        live_link: 'https://jackheimburge.github.io/blackjack/'
    },
];

export { services, technologies, experiences, testimonials, projects, navLinks };
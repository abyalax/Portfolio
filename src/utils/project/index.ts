import { dummyFrontendImg, projectsImg } from "../getter"

export type ProjectType = {
    id: number
    title: string
    description: string
    img: string[]
    type: "real" | "dummy"
    techStack: string
    urlGithub: string
    urlWeb: string
    feature: {
        title: string
        description: string
    }[]
}

export const projects: ProjectType[] = [
    {
        id: 1,
        title: "Personal Website",
        description: "My Personal Website",
        img: projectsImg.webProfile,
        type: "real",
        techStack: "Next JS, Tailwinds",
        urlGithub: "https://github.com/abyalax/Portfolio",
        urlWeb: "https://profile-abya.vercel.app/",
        feature: [
            {
                title: "Web Portofolio",
                description: "Personal Web Portofolio to showcase about me and my experience",
            },
        ]
    },
    {
        id: 2,
        title: "Profile and Blog GenBI Organization",
        description: "Web Profile and Blog GenBI Organization",
        img: projectsImg.genbi,
        type: "real",
        techStack: "Next JS, Tailwinds",
        urlGithub: "https://github.com/abyalax/Project-GENBI",
        urlWeb: "https://projects-genbi.vercel.app/",
        feature: [
            {
                title: "Web Profile Organization",
                description: "Web Profile to showcase about work program at organization",
            },
        ]
    },
    {
        id: 3,
        title: "Aplikasi HRIS",
        description: "Human Resource Information System",
        img: dummyFrontendImg.hris,
        type: "dummy",
        techStack: "Next JS 14, Tailwinds",
        urlGithub: "https://github.com/abyalax/Project-HRIS-NextJS",
        urlWeb: "https://hris-projects.vercel.app/",
        feature: [
            {
                title: "Human Resource Information System",
                description: "Human Resource Information System for Company",
            },
        ]
    },
    {
        id: 4,
        title: "MERN projects",
        description: "Project MERN Stack for Learning",
        img: dummyFrontendImg.tokopedia,
        type: "dummy",
        techStack: "MongoDB, Express JS, React JS, Node JS",
        urlGithub: "https://github.com/abyalax/Project-MERN-Frontend",
        urlWeb: "https://fake-tokopedia.vercel.app",
        feature: [
            {
                title: "Authentication",
                description: "Develope Authentication System with express JS",
            },
            {
                title: "UI Homepage Tokopedia",
                description: "Cloning UI from Tokopedia Website",
            },
            {
                title: "Products Page",
                description: "View All Products and Detail Product page",
            },
            {
                title: "Cart Product",
                description: "Insert Product to Cart and Manage Cart ( CRUD )",
            },
            {
                title: "Store",
                description: "Create Store and Add Products ( include image products )",
            },
        ]
    },
    {
        id: 5,
        title: "Groq AI Chatbot",
        description: "Project React for Chat with AI",
        img: dummyFrontendImg.groq,
        type: "dummy",
        techStack: "React JS, Tailwinds",
        urlGithub: "https://github.com/abyalax/Mobile-App-CMS",
        urlWeb: "https://groq-chatbot-red.vercel.app",
        feature: [
            {
                title: "Chatbot",
                description: "Chat with AI model from Groq AI",
            },
            {
                title: "Toggle Theme",
                description: "Toggle between light and dark mode",
            },
        ]
    },
    {
        id: 6,
        title: "Sistem Informasi Invoice",
        description: "Project Fullstack From Course Next JS with Typescript",
        img: dummyFrontendImg.invoices,
        type: "dummy",
        techStack: "Next JS, PostgreSQL, Tailwinds",
        urlGithub: "https://github.com/abyalax/NextJS-course",
        urlWeb: "https://next-js-course-mauve-ten.vercel.app/",
        feature: [
            {
                title: "Authentication",
                description: "Authentication with Next Auth JS. To Try Login with this account, Email: user@nextmail.com, Password: 123456",
            },
            {
                title: "Dashboard",
                description: "Dashboard Revenue and Invoices",
            },
            {
                title: "CRUD Invoices",
                description: "Create, Read, Update, and Delete Invoices",
            },
        ]
    },
    {
        id: 7,
        title: "Blog App Mobile",
        description: "Project React Native with Expo for my Learning Journey at Mobile Development",
        img: dummyFrontendImg.blogCMS,
        type: "dummy",
        techStack: "React Native",
        urlGithub: "https://github.com/abyalax/Mobile-App-CMS",
        urlWeb: "",
        feature: [
            {
                title: "UI Blog App",
                description: "View Blog Posts",
            },
        ]
    },
]
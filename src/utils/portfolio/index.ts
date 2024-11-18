import { projects } from "../getter"

type PortfolioType = {
    id: number
    title: string
    description: string
    img: string[]
    techStack: string
    urlGithub: string
    urlWeb: string
    feature: {
        title: string
        description: string
    }[]
}[]

export const portfolio: PortfolioType = [
    {
        id: 1,
        title: "Personal Website",
        description: "My Personal Website",
        img: projects.webProfile,
        techStack: "React JS, Tailwinds",
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
        title: "Aplikasi HRIS",
        description: "Human Resource Information System",
        img: projects.hris,
        techStack: "Next JS 14, Tailwinds",
        urlGithub: "https://github.com/abyalax/Portfolio",
        urlWeb: "https://profile-abya.vercel.app/",
        feature: [
            {
                title: "Human Resource Information System",
                description: "Human Resource Information System for Company",
            },
        ]
    },
    {
        id: 3,
        title: "Clone Tokopedia",
        description: "Project MERN Stack for Learning by Studi Case",
        img: projects.tokopedia,
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
        id: 4,
        title: "Groq AI Chatbot",
        description: "Project React for Chat with AI",
        img: projects.groq,
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
        id: 5,
        title: "Sistem Informasi Invoice",
        description: "Project Fullstack From Course Next JS with Typescript",
        img: projects.invoices,
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
        id: 6,
        title: "Blog App Mobile",
        description: "Project React Native with Expo for my Learning Journey at Mobile Development",
        img: projects.blogCMS,
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
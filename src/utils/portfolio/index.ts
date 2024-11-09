import { projects } from "../getter"
export const portfolio = [
    {
        id: 1,
        title: "Personal Website",
        description: "My Personal Website",
        img: [projects.webProfile],
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
        title: "Clone Tokopedia",
        description: "Project MERN Stack for Learning by Studi Case",
        img: [
            projects.tokopedia,projects.tokopediaProducts, projects.tokopediaProduct,
            projects.tokopediaLogin, projects.tokopediaRegister, projects.tokopediaCreateStore1,
            projects.tokopediaCreateStore2, projects.tokopediaSeller1, projects.tokopediaSeller2,
            projects.tokopediaAddProduct1, projects.tokopediaAddProduct2
        ],
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
        id: 3,
        title: "Groq AI Chatbot",
        description: "Project React for Chat with AI",
        img: [projects.groqDark, projects.groqLight, projects.groqLightChat, projects.groqDarkChat],
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
        id: 4,
        title: "Sistem Informasi Invoice",
        description: "Project Fullstack From Course Next JS with Typescript",
        img: [projects.invoicesDashboard, projects.invoicesHome, projects.invoicesLogin, projects.invoicesDashboard, projects.invoicesList],
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
        id: 5,
        title: "Blog App Mobile",
        description: "Project React Native with Expo for my Learning Journey at Mobile Development",
        img: [projects.blogCMS],
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
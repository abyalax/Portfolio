import { projects } from "../getter";

export const portfolio = [
    {
        id: 1,
        title: "Personal Website",
        description: "My Personal Website",
        img: projects.webProfile,
        techStack: "React JS, Tailwinds",
        urlGithub: "https://github.com/abyalax/Portfolio",
        urlWeb: "https://profile-abya.vercel.app/"
    },
    {
        id: 2,
        title: "Clone Tokopedia",
        description: "Project MERN Stack for Learning by Studi Case",
        img: projects.tokopedia,
        techStack: "MongoDB, Express JS, React JS, Node JS",
        urlGithub: "https://github.com/abyalax/Project-MERN-Frontend",
        urlWeb: "https://fake-tokopedia.vercel.app"
    },
    {
        id: 3,
        title: "Groq AI Chatbot",
        description: "Project React for Chat with AI",
        img: projects.groq,
        techStack: "React JS, Tailwinds",
        urlGithub: "https://github.com/abyalax/Mobile-App-CMS",
        urlWeb: "https://groq-chatbot-red.vercel.app"
    },
    {
        id: 4,
        title: "Blog App Mobile",
        description: "Project React Native with Expo for my Learning Journey at Mobile Development",
        img: projects.blogCMS,
        techStack: "React Native",
        urlGithub: "https://github.com/abyalax/Mobile-App-CMS",
        urlWeb: ""
    },
]
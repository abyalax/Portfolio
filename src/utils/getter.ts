const techStack = {
    highlight: [
        { title: "Node.js", description: "Backend runtime", url: "/assets/tools/nodejs.png" },
        { title: "Next.js", description: "React Server Side", url: "/assets/tools/nextjs.png" },
        { title: "NestJS", description: "Scalable Backend", url: "/assets/tools/nestjs.webp" },
        { title: "TypeScript", description: "Typed JavaScript", url: "/assets/tools/ts.webp" },
        { title: "SQL", description: "Relational Database", url: "/assets/tools/sql.webp" },
        { title: "MongoDB", description: "NoSQL database", url: "/assets/tools/mongodb.webp" },
        { title: "Cloudinary", description: "Media storage", url: "/assets/tools/cloudinary.webp" },
    ],
    hidden: [
        { title: "HTML", description: "Markup language", url: "/assets/tools/html.webp" },
        { title: "CSS", description: "Styling language", url: "/assets/tools/css.webp" },
        { title: "JavaScript", description: "Scripting language", url: "/assets/tools/js.webp" },
        { title: "Tailwind CSS", description: "Utility-first CSS", url: "/assets/tools/tailwinds.png" },
        { title: "React", description: "UI library", url: "/assets/tools/react.webp" },
        { title: "VS Code", description: "Code editor", url: "/assets/tools/vscode.png" },
        { title: "Postman", description: "API testing", url: "/assets/tools/postman.png" },
        { title: "Git", description: "Version control", url: "/assets/tools/git.webp" },
        { title: "GitHub", description: "Code hosting", url: "/assets/tools/github.webp" },
    ],
};




const webProfileImage = "/assets/img/web-profile.png"
const webProfile = [webProfileImage]

const genbi = [
    "/assets/img/genbi/a.png",
    "/assets/img/genbi/b.png",
    "/assets/img/genbi/c.png",
    "/assets/img/genbi/d.png",
    "/assets/img/genbi/e.png",
    "/assets/img/genbi/f.png",
    "/assets/img/genbi/g.png",
    "/assets/img/genbi/h.png",
]

const tokopediaMain = "/assets/img/tokopedia.png"
const tokopediaProducts = "/assets/img/products-tokopedia.png"
const tokopediaProduct = "/assets/img/product-tokopedia.png"
const tokopediaLogin = "/assets/img/login-tokopedia.png"
const tokopediaRegister = "/assets/img/register-tokopedia.png"
const tokopediaCreateStore1 = "/assets/img/crstore1-tokopedia.png"
const tokopediaCreateStore2 = "/assets/img/crstore2-tokopedia.png"
const tokopediaSeller1 = "/assets/img/seller1-tokopedia.png"
const tokopediaSeller2 = "/assets/img/seller2-tokopedia.png"
const tokopediaAddProduct1 = "/assets/img/addproduct-tokopedia.png"
const tokopediaAddProduct2 = "/assets/img/addproduct2-tokopedia.png"

const tokopedia = [
    tokopediaMain,
    tokopediaProducts,
    tokopediaProduct,
    tokopediaLogin,
    tokopediaRegister,
    tokopediaCreateStore1,
    tokopediaCreateStore2,
    tokopediaSeller1,
    tokopediaSeller2,
    tokopediaAddProduct1,
    tokopediaAddProduct2
]

const blog = "/assets/img/blog-cms.png"
const blogCMS = [blog]

const groqDark = "/assets/img/groq-dark.png"
const groqLight = "/assets/img/groq-light.png"
const groqLightChat = "/assets/img/groq-light-chat.png"
const groqDarkChat = "/assets/img/groq-dark-chat.png"

const groq = [
    groqDarkChat, groqLightChat, groqDark, groqLight,
]

const invoicesDashboard = "/assets/img/invoices-dahsboard.png"
const invoicesLogin = "/assets/img/invoices-login.png"
const invoicesList = "/assets/img/invoices-list.png"
const invoicesHome = "/assets/img/invoices-home.png"

const invoices = [
    invoicesDashboard, invoicesHome, invoicesList, invoicesLogin,
]

const githubIcon = "/assets/svg/github.svg"
const linkIcon = "/assets/svg/link.svg"
const twitter = "/assets/svg/twitter.svg"
const instagram = "/assets/svg/instagram.svg"
const linkedin = "/assets/svg/linkedin.svg"

const hris1 = "/assets/img/hris/1.png"
const hris2 = "/assets/img/hris/2.png"
const hris3 = "/assets/img/hris/3.png"
const hris4 = "/assets/img/hris/4.png"
const hris5 = "/assets/img/hris/5.png"
const hris6 = "/assets/img/hris/6.png"
const hris7 = "/assets/img/hris/7.png"

const hris = [hris1, hris2, hris3, hris4, hris5, hris6, hris7]

const projectsImg = { genbi, webProfile }

const dummyFrontendImg = { blogCMS, hris, tokopedia, invoices, groq }

const svgIcon = { githubIcon, linkIcon }

const socmedIcon = { twitter, instagram, linkedin }

export { techStack, projectsImg, svgIcon, socmedIcon, dummyFrontendImg }
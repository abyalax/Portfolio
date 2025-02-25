import { FormEvent, useContext, useEffect, useState } from "react";
import { ModalContext } from "@/context/ModalContext";
import { ToasterContext } from "@/context/ToasterContext";
import { tools } from "@/utils/getter";
import { Inter } from "next/font/google"
import GradientText from "@/component/animations/text/gradient";
import SplashCursor from "@/component/animations/splashcursor";
import SplitText from "@/component/animations/text/split";
import Magnet from "@/component/animations/magnet";
import TypingAnimation from "@/utils/typing";
import dynamic from "next/dynamic";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const CreateProjects = dynamic(() => import("@/component/modal/CreateProjects"), { ssr: false })

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
    const [visible, setVisible] = useState(false);
    const [visibleSkill, setVisibleSkill] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { setToaster } = useContext(ToasterContext);
    const { createContent } = useContext(ModalContext)
    const [formState, setForm] = useState({
        to_name: "Abya",
        from_name: "",
        from_email: "",
        from_phone: "",
        message: "",
    });
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        setIsLoading(true)
        e.preventDefault();
        try {
            fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
                    template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
                    user_id: process.env.NEXT_PUBLIC_USER_ID,
                    template_params: formState
                })
            }).then((result) => {
                if (result.ok) {
                    setToaster({ variant: 'success', message: 'Email sent successfully' });
                } else {
                    setToaster({ variant: 'danger', message: 'Failed to send email, please try again' });
                }
            })
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
            setForm({
                to_name: "Abya",
                from_name: "",
                from_email: "",
                from_phone: "",
                message: "",
            });
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            console.log("Scroll event fired! window.scrollY:", window.scrollY);
            setVisible(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Head>
                <title>{"Abya's Profile - Home"}</title>
                <meta name="description" content="Website resmi Abya, Fullstack Developer Node JS" />
                <meta name="keywords" content="Frontend Developer, Backend Developer, Fullstack Developer" />
                <meta name="author" content="Abya" />
                <meta property="og:title" content="Abya's Profile - Home" />
                <meta property="og:description" content="Website resmi Abya, Fullstack Developer Node JS" />
                <meta property="og:image" content="/public/profile1.png" />
                <meta property="og:url" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/a.png" type="img/png" />
            </Head>
            {/* <SplashCursor /> */}
            <main className={`w-screen h-screen text-gray-700 bg-[#272727] overflow-x-hidden ${inter.className}`}>

                {visible && (<button
                    onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    className="fixed bottom-10 right-10 bg-white p-2 rounded-full z-50 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" fill="black" fontWeight={"bold"} className="bi bi-chevron-right transform -rotate-90" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </button>)}

                <nav className="px-6 lg:px-20 md:px-20 sm:px-8" id="navbar">
                    <div className="flex flex-row h-20 justify-between items-center py-7 border-b border-gray-500 mb-4 sm:mb-6">
                        <div className="h-full text-white font-extrabold text-2xl">
                            <h2 className="lg:block md:block hidden">Abya</h2>
                        </div>
                        <div className="flex flex-row lg:gap-16 md:gap-10 gap-4 sm:gap-8 h-full w-full justify-center sm:justify-center md:justify-end lg:justify-end text-white sm:font-semibold">
                            <Link href="/#home" className="h-full hover:text-yellow-500">Home</Link>
                            <Link href="/#skill" className="h-full hover:text-yellow-500">Skills</Link>
                            <Link href="/#about" className="h-full hover:text-yellow-500">About</Link>
                            <Link href="/projects" className="h-full hover:text-yellow-500">Projects</Link>
                            <Link href="/blog" className="h-full hover:text-yellow-500">Blog</Link>
                        </div>
                    </div>
                </nav>
                {/* BERANDA */}
                <div className="flex flex-col-reverse sm:p-10 lg:pr-32 lg:pl-0 sm:flex-col-reverse lg:flex-row pt-0" id="home">
                    <div className="flex flex-col gap-2  px-6 sm:px-12 md:px-16 lg:px-20">
                        <SplitText textAlign="left" text="Hello Buddy🙌" className="text-3xl text-white font-bold my-3 sm:mt-4 md:text-left lg:text-left sm:text-center lg:block hidden" />
                        <h2 className="lg:text-6xl font-bold text-white md:text-left lg:text-left sm:text-center sm:mt-6 mt-4 sm:text-3xl">
                            {"I'am "}
                        </h2>
                        <GradientText
                            className="lg:text-6xl font-bold md:text-left lg:text-left sm:text-center sm:text-3xl"
                            colors={["#e3f032", "#32f091", "#5ef032"]}
                            animationSpeed={2}>
                            {"Abya Bahari Wafdulloh"}
                        </GradientText>
                        <p className="lg:text-xl sm:text-lg font-semibold sm:mb-5 md:mb-10 bg-gradient-to-r from-green-400 via-blue-500 to-blue-800 inline-block text-transparent bg-clip-text">|
                            <TypingAnimation text={["Fullstack developer", "Web developer", "Frontend developer", "Backend developer", "Fullstack developer", "Backend developer"]} speed={50} />
                        </p>
                        <hr className="text-[#808080] w-1/3" />
                        <p className="lg:text-xl sm:text-lg text-[#808080] font-semibold">
                            Computer Engineering student who is enthusiastic and has a passion for the software development.
                            Known as a perfectionist and meticulous person, with strong analytical skills.
                            Always try to provide the best results in every project undertaken, with a focus on improving technical skills and knowledge in the computer field.
                            Committed to continuing to learn and develop in the dynamic technology industry.
                        </p>
                        <div className="mt-7 flex gap-5 sm:flex-row flex-col">
                            <Magnet>
                                <button onClick={() => { }} className="bg-green-500 font-semibold text-white lg:text-xl sm:text-lg px-11 py-3 rounded-md hover:scale-90 hover:transition-transform">
                                    Donwload CV
                                </button>
                            </Magnet>
                            <Magnet>
                                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="bg-transparent border text-white font-semibold lg:text-xl sm:text-lg px-11 py-3 rounded-md hover:scale-90 hover:transition-transform">
                                    Details
                                </button>
                            </Magnet>
                        </div>
                    </div>

                    <div className="flex flex-col relative items-center justify-center lg:min-w-96">
                        {/* Background Shapes */}
                        <div className="absolute w-72 h-72 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-70"></div>
                        <div className="absolute w-48 h-48 bg-green-500 bg-opacity-30 rounded-full top-5 left-1/2 transform -translate-x-1/2"></div>
                        <div className="absolute w-10 h-10 bg-green-400 top-7 left-3/4 transform rotate-45">
                            <div className="w-full h-full bg-green-400 absolute top-0 left-0"></div>
                        </div>

                        {/* Profile Image */}
                        <Image src="/profile1.png" width={300} height={400} alt="Profile" className="relative object-cover object-center z-10 lg:w-full sm:w-72 sm:h-72 w-52 lg:h-96 rounded-full border-4 border-slate-500" />

                        <h2 className="relative text-2xl text-white font-bold lg:block hidden">{"Let's Connect"}</h2>
                        <h2 className="relative text-2xl text-white font-bold sm:block lg:hidden">{"Let's Connect Buddy"}</h2>
                        <div className="relative flex gap-3 mt-2 text-white">
                            <svg onClick={() => window.open("https://www.instagram.com/abya.xc/profilecard/?igsh=ZzVpeGUzZGNjczBi", "_blank")} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white"
                                className="bi bi-instagram cursor-pointer" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" className="bi bi-twitter cursor-not-allowed" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                            </svg>
                            <svg onClick={() => window.open("https://www.linkedin.com/in/abyalaxx3541241-profile/", "_blank")} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white"
                                className="bi bi-linkedin cursor-pointer" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                            </svg>
                            <svg onClick={() => window.open("https://api.whatsapp.com/send?phone=6287765290292&text=Hello%20Abya%2C%20I%20am%20interested%20in%20your%20skills%20from%20your%20web%20profile.%20can%20we%20meet%3F", "_blank")} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" className="bi bi-whatsapp cursor-pointer" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* FEATURED PROJECTS */}
                <div className="px-44">
                    <div>
                        <h2 className="text-white lg:text-5xl sm:text-3xl text-xl my-6  text-center font-semibold">Featured Projects</h2>
                        <p className="mx-5 text-[#808080] lg:text-lg md:text-base sm:text-xs text-center mt-4 lg:mb-10 mb-4">
                            This project showcases my expertise in web development using Node JS<br />
                            with an approach focused on performance and scalability.
                        </p>
                    </div>
                </div>

                {/* SKILLS */}
                <div className="w-full flex flex-col items-center" id="skill">
                    <div className="mt-10 md:px-44 sm:px-20 px-4 flex flex-col gap-8">
                        <h2 className="text-white md:text-5xl sm:text-3xl text-2xl md:my-10 sm:my-4 my-0 mx-auto font-semibold">Tech Stack</h2>
                        <div className="md:flex md:flex-row sm:grid sm:grid-cols-3 sm:gap-4 flex flex-wrap justify-center items-center gap-4 px-8 sm:px-16">
                            <div className="col-span-1 md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                <Image alt="" width={128} height={128} src={tools.nodejs} />
                            </div>
                            <div className="col-span-1 md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                <Image alt="" width={128} height={128} src={tools.nextjs} />
                            </div>
                            <div className="col-span-2 md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                <Image alt="" width={128} height={128} src={tools.react} />
                            </div>
                            <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                <Image alt="" width={128} height={128} src={tools.js} />
                            </div>
                            <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                <Image alt="" width={128} height={128} src={tools.ts} />
                            </div>
                        </div>
                        <h2 onClick={() => setVisibleSkill(!visibleSkill)} className="text-white text-2xl cursor-pointer hover:text-[#a5d6f7] mx-auto z-50">{visibleSkill ? "See less" : "See more"}</h2>
                        {visibleSkill && (
                            <>
                                <div className="md:flex md:flex-row sm:grid sm:grid-cols-3 sm:gap-4 flex flex-wrap justify-center items-center gap-4 px-8 sm:px-16">
                                    <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                        <Image alt="" width={128} height={128} src={tools.html} />
                                    </div>
                                    <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                        <Image alt="" width={128} height={128} src={tools.css} />
                                    </div>
                                    <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                        <Image alt="" width={128} height={128} src={tools.tailwinds} />
                                    </div>
                                    <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                        <Image alt="" width={128} height={128} src={tools.mongodb} />
                                    </div>
                                    <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                        <div className="bg-[#a5d6f7] rounded-3xl">
                                            <Image alt="" width={128} height={128} src={tools.cloudinary} />
                                        </div>
                                    </div>
                                </div>
                                <div className="md:flex md:flex-row sm:grid sm:grid-cols-3 sm:gap-4 flex flex-wrap justify-center items-center gap-4 px-8 sm:px-16">
                                    <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                        <Image alt="" width={128} height={128} src={tools.vscode} />
                                    </div>
                                    <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                        <Image alt="" width={128} height={128} src={tools.postman} />
                                    </div>
                                    <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                        <Image alt="" width={128} height={128} src={tools.git} />
                                    </div>
                                    <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                        <Image alt="" width={128} height={128} src={tools.github} />
                                    </div>
                                </div>
                            </>
                        )}

                    </div>
                </div>

                <div className="xl:px-44 lg:px-44 md:px-20 sm:px-10 px-5 py-0" id="about">
                    <h2 className="text-white md:text-5xl sm:text-2xl text-xl my-6 sm:my-10  text-center font-semibold">About Me</h2>
                    <div className="md:grid md:grid-cols-3 sm:flex sm:flex-col gap-4">
                        <div className="col-span-1 text-white p-8 relative">
                            <Image alt="profile" src="/profile2.JPG" className=" w-full max-h-96 object-cover rounded-3xl" width={600} height={900} />
                            <span className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-slate-700 to-transparent " />
                        </div>
                        <div className="col-span-2 text-white overflow-hidden">
                            <h2 className="mb-4 text-[#808080] md:text-lg sm:text-base text-xs">
                                A developer who cannot be separated from a laptop screen and a cup of coffee, always ready to face new challenges while sipping the sensation of coffee to keep the spirits high.
                            </h2>
                            <table className="md:text-lg sm:text-base text-xs">
                                <tbody>
                                    <tr >
                                        <td className="pr-4 py-2 font-semibold text-white">Name</td>
                                        <td className="py-2 text-[#808080]">Abya Bahari Wafdulloh Sulkhan</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-4 py-2 font-semibold text-white">Date of Birth</td>
                                        <td className="py-2 text-[#808080]">21 March 2005</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-4 py-2 font-semibold text-white">Status</td>
                                        <td className="py-2 text-[#808080]">Student At Universitas Islam Kadiri-Kediri ( On-Going )</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-4 py-2 font-semibold text-white">Major</td>
                                        <td className="py-2 text-[#808080]">Computer Engineering</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-4 py-2 font-semibold text-white">Phone</td>
                                        <td className="py-2 text-[#808080]">087765290292</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

                <div>
                    <h2 className="text-white lg:text-5xl sm:text-3xl text-xl my-6  text-center font-semibold">Contact Me</h2>
                    <div className="md:px-44 lg:flex lg:flex-row md:flex md:gap-16 flex flex-col min-h-96">
                        <div className="w-full text-white p-4">
                            <h2 className="sm:text-3xl text-lg my-6 font-semibold mb-4 text-center">{"Let's Get in Touch"}</h2>
                            <p className="text-center mt-4 sm:mb-12 mb-2 text-[#808080] text-sm sm:text-base">
                                {"I’m currently looking for any new opportunities, my inbox is always open.Whether you have a question or just want to say hi, I’ll try my best to get back to you!"}
                            </p>
                            <h2 className="font-semibold sm:my-2 sm:text-lg text-sm text-center">Address</h2>
                            <p className="text-center text-[#808080] text-sm sm:text-base">Plemahan Sub-district, Kediri Regency, East Java, Indonesia</p>
                            <h2 className="font-semibold sm:my-2 sm:text-lg text-sm text-center">Phone</h2>
                            <p className="text-center text-[#808080] text-sm sm:text-base">+62 877 6529 0292</p>
                            <h2 className="font-semibold sm:my-2 sm:text-lg text-sm text-center">Email</h2>
                            <p className="text-center text-[#808080] text-sm sm:text-base">abyalaxx@gmail.com</p>
                        </div>

                        <div className=" w-full shadow-2xl shadow-black text-white">
                            <form className="flex flex-col gap-6 sm:p-10 p-6" onSubmit={handleSubmit}>
                                <input className="min-h-11 bg-transparent focus:outline-none border-b-2 border-slate-500 appearance-none" name="name" type="text" placeholder="Your Name" onChange={(e) => setForm({ ...formState, from_name: e.target.value })} />
                                <input className="min-h-11 bg-transparent focus:outline-none border-b-2 border-slate-500 appearance-none" type="email" name="email" placeholder="Your Email" onChange={(e) => setForm({ ...formState, from_email: e.target.value })} />
                                <input className="min-h-11 bg-transparent focus:outline-none border-b-2 border-slate-500 appearance-none" type="number" min={9} name="phone" placeholder="Your Phone" onChange={(e) => setForm({ ...formState, from_phone: e.target.value })} />
                                <textarea className="bg-transparent focus:outline-none border-b-2 border-slate-500 appearance-none" name="message" placeholder="Your Message" onChange={(e) => setForm({ ...formState, message: e.target.value })} />

                                <button className="bg-slate-500 hover:bg-slate-400 font-semibold text-lg px-11 py-3 rounded-md disabled:cursor-not-allowed" type="submit" disabled={isLoading}>
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* FOOTER */}
                <footer className="bg-[#1E1E1E] flex gap-5 flex-col justify-between mt-24 items-center">

                    <h2 className="text-center text-2xl text-[#aeaeae] mt-8">This portfolio website is still in the development stage</h2>
                    <h2 className="text-center text-xl text-white font-semibold">Abya Laxx</h2>
                    <div className="flex flex-row md:gap-8 gap-4 sm:gap-8 h-full w-full justify-center sm:justify-center text-white">
                        <Link href="/#home" className="h-full hover:text-yellow-500  ">Home</Link>
                        <Link href="/#skill" className="h-full hover:text-yellow-500 ">Skills</Link>
                        <Link href="/#about" className="h-full hover:text-yellow-500 ">About</Link>
                        <Link href="/portfolio" className="h-full hover:text-yellow-500 ">Portfolio</Link>
                        <Link href="/blog" className="h-full hover:text-yellow-500  ">Blog</Link>
                    </div>

                    <div className="w-full flex justify-center items-center gap-4 py-3">
                        <svg onClick={() => window.open("https://www.instagram.com/abya.xc/profilecard/?igsh=ZzVpeGUzZGNjczBi", "_blank")} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white"
                            className="bi bi-instagram cursor-pointer" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" className="bi bi-twitter cursor-not-allowed" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                        </svg>
                        <svg onClick={() => window.open("https://www.linkedin.com/in/abyalaxx3541241-profile/", "_blank")} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white"
                            className="bi bi-linkedin cursor-pointer" viewBox="0 0 16 16">
                            <path
                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                        <svg onClick={() => window.open("https://api.whatsapp.com/send?phone=6287765290292&text=Hello%20Abya%2C%20I%20am%20interested%20in%20your%20skills%20from%20your%20web%20profile.%20can%20we%20meet%3F", "_blank")} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" className="bi bi-whatsapp cursor-pointer" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                    </div>

                    <div className="flex justify-center items-center text-white w-full p-5 bg-black">
                        <p>© 2024 <b className="text-green-600">AbyaLaxx</b> All Rights Reserved, Inc</p>
                    </div>
                </footer>

            </main>
        </>
    );
}

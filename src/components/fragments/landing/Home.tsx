import { useContext, useEffect, useState } from "react";
import { ToasterContext } from "../../../context/ToasterContext";
import TypingAnimation from "../../../utils/typing";
import Magnet from "../../animations/magnet";
import SplitText from "../../animations/text/split";
import GradientText from "../../animations/text/gradient";

const Home = () => {
    const [visible, setVisible] = useState(false);
    const { setToaster } = useContext(ToasterContext)

    const onButtonClick = () => {
        const pdfUrl = "/assets/CV.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        setToaster({
            variant: "success",
            message: "Welcome to my website. I hope you enjoy it!",
        })
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setToaster]);

    return (
        <div className="flex flex-col-reverse sm:p-10 lg:pr-32 lg:pl-0 sm:flex-col-reverse lg:flex-row pt-0" id="home">
            {visible && (
                <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="fixed bottom-10 right-10 bg-white p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" fill="black" fontWeight={"bold"} className="bi bi-chevron-right transform -rotate-90" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </button>
            )}
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
                        <button onClick={onButtonClick} className="bg-green-500 font-semibold text-white lg:text-xl sm:text-lg px-11 py-3 rounded-md hover:scale-90 hover:transition-transform">
                            Donwload CV
                        </button>
                    </Magnet>
                    <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="bg-transparent border text-white font-semibold lg:text-xl sm:text-lg px-11 py-3 rounded-md hover:scale-90 hover:transition-transform">
                        Details
                    </button>
                </div>
            </div>

            <div className="flex flex-col relative items-center justify-center lg:min-w-96">
                {/* <!-- Background Shapes --> */}
                <div className="absolute w-72 h-72 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-70"></div>
                <div className="absolute w-48 h-48 bg-green-500 bg-opacity-30 rounded-full top-5 left-1/2 transform -translate-x-1/2"></div>
                <div className="absolute w-10 h-10 bg-green-400 top-7 left-3/4 transform rotate-45">
                    <div className="w-full h-full bg-green-400 absolute top-0 left-0"></div>
                </div>
                {/* <!-- Profile Image --> */}
                <img src="/profile1.png" alt="Profile" className="relative object-cover object-center z-10 lg:w-full sm:w-72 sm:h-72 w-52 lg:h-96 rounded-full border-4 border-slate-500" />
                <h2 className="relative text-2xl text-white font-bold lg:block hidden">Let's Connect </h2>
                <h2 className="relative text-2xl text-white font-bold sm:block lg:hidden">Let's Connect Buddy </h2>
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
    )
};

export default Home;
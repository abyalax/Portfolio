import { useEffect, useState } from "react";
import { tools } from "../../utils/getter";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transform: "translateY(0px)", transition: { duration: 0.7 } },
        hidden: { opacity: 0, scale: 0, transform: "translateY(300px)" },
    }
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const [visible, setVisible] = useState(false);
    return (
        <div className="w-full flex flex-col items-center" id="skill">
            <motion.div ref={ref} variants={boxVariant} initial='hidden' animate={control} className="mt-10 md:px-44 sm:px-20 px-4 flex flex-col gap-8">
                <h2 className="text-white md:text-5xl sm:text-3xl text-2xl md:my-10 sm:my-4 my-0 mx-auto font-semibold">Tech Stack</h2>
                <div className="md:flex md:flex-row sm:grid sm:grid-cols-3 sm:gap-4 flex flex-wrap justify-center items-center gap-4 px-8 sm:px-16">
                    <div className="col-span-1 md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                        <img src={tools.nodejs} />
                    </div>
                    <div className="col-span-1 md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                        <img src={tools.nextjs} />
                    </div>
                    <div className="col-span-2 md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                        <img src={tools.react} />
                    </div>
                    <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                        <img src={tools.js} />
                    </div>
                    <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                        <img src={tools.ts} />
                    </div>
                </div>
                <h2 onClick={() => setVisible(!visible)} className="text-white text-2xl cursor-pointer hover:text-[#a5d6f7] mx-auto">{visible ? "See less" : "See more"}</h2>
                {visible && (
                    <>
                        <div className="md:flex md:flex-row sm:grid sm:grid-cols-3 sm:gap-4 flex flex-wrap justify-center items-center gap-4 px-8 sm:px-16">
                            <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                <img src={tools.html} />
                            </div>
                            <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                <img src={tools.css} />
                            </div>
                            <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                <img src={tools.tailwinds} />
                            </div>
                            <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                <img src={tools.mongodb} />
                            </div>
                            <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                <div className="bg-[#a5d6f7] rounded-3xl">
                                    <img src={tools.cloudinary} />
                                </div>
                            </div>
                        </div>
                        <div className="md:flex md:flex-row sm:grid sm:grid-cols-3 sm:gap-4 flex flex-wrap justify-center items-center gap-4 px-8 sm:px-16">
                            <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                <img src={tools.vscode} />
                            </div>
                            <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                <img src={tools.postman} />
                            </div>
                            <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                <img src={tools.git} />
                            </div>
                            <div className="md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl hover:transform hover:scale-110 cursor-pointer">
                                <img src={tools.github} />
                            </div>
                        </div>
                    </>
                )}

            </motion.div>
        </div>
    )
};

export default Skills;
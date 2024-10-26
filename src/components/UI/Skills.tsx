import { useEffect, useState } from "react";
import svg from "../../assets/getter";
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
        <div className="w-full flex flex-col items-center mb-48" id="skill">
            <motion.div ref={ref} variants={boxVariant} initial='hidden' animate={control} className="mt-10 px-44 flex flex-col gap-8">
                <h2 className="text-white text-5xl my-10 mx-auto font-semibold">Tech Stack</h2>
                <div className="flex flex-row justify-center gap-8">
                    <div className="w-44 h-44 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                        <img src={svg.nodejs} />
                    </div>
                    <div className="w-44 h-44 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                        <img src={svg.nextjs} />
                    </div>
                    <div className="w-44 h-44 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                        <img src={svg.react} />
                    </div>
                    <div className="w-44 h-44 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                        <img src={svg.js} />
                    </div>
                    <div className="w-44 h-44 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                        <img src={svg.ts} />
                    </div>
                </div>
                <h2 onClick={() => setVisible(!visible)} className="text-white text-2xl cursor-pointer hover:text-[#a5d6f7] mx-auto">{visible ? "See less" : "See more"}</h2>
                {visible && (
                    <>
                        <div className="flex flex-row justify-center gap-8">
                            <div className="w-44 h-44 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                                <img src={svg.html} />
                            </div>
                            <div className="w-44 h-44 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                                <img src={svg.css} />
                            </div>
                            <div className="w-44 h-44 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                                <img src={svg.tailwinds} />
                            </div>
                            <div className="w-44 h-44 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                                <img src={svg.mongodb} />
                            </div>
                            <div className="w-44 h-44 p-5 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                                <div className="bg-[#a5d6f7] rounded-3xl">
                                    <img src={svg.cloudinary} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center gap-8">
                            <div className="w-44 h-44 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                                <img src={svg.vscode} />
                            </div>
                            <div className="w-44 h-44 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                                <img src={svg.postman} />
                            </div>
                            <div className="w-44 h-44 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                                <img src={svg.git} />
                            </div>
                            <div className="w-44 h-44 p-3 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                                <img src={svg.github} />
                            </div>
                        </div>
                    </>
                )}

            </motion.div>
        </div>
    )
};

export default Skills;
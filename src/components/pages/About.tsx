import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    const boxVariant1 = {
        visible: { opacity: 1, scale: 1, transform: "translateX(0px)", transition: { duration: 0.7 } },
        hidden: { opacity: 0, scale: 0, transform: "translateX(-300px)" },
    }

    const boxVariant2 = {
        visible: { opacity: 1, scale: 1, transform: "translateX(0px)", transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0, transform: "translateX(160px)" },
    }

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <div className="px-44" id="about">
            <h2 className="text-white text-5xl my-10 text-center font-semibold">About Me</h2>
            <div className="grid grid-cols-3">
                <motion.div ref={ref} variants={boxVariant1} initial='hidden' animate={control} className="col-span-1 text-white p-8 relative">
                    <img src="profile2.JPG" className=" w-full h-96 object-cover rounded-3xl" />
                    <span className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-slate-700 to-transparent " />
                </motion.div>
                <motion.div ref={ref} variants={boxVariant2} initial='hidden' animate={control} className="col-span-2 text-white overflow-hidden
                ">
                    <h2 className="mb-4 text-[#808080] text-lg">
                        A developer who cannot be separated from a laptop screen and a cup of coffee, always ready to face new challenges while sipping the sensation of coffee to keep the spirits high.
                    </h2>
                    <table className="text-lg">
                        <tbody>
                            <tr className="">
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
                </motion.div>

            </div>
        </div>
    )
};

export default About;
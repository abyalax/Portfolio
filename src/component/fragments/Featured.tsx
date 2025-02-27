import { useRef } from "react";
import { useRouter } from "next/router";
import { svgIcon } from "@/utils/getter";
import { Project } from "@prisma/client";
import Image from "next/image";

const Featured = ({ projects }: { projects: Project[] }) => {
    const { push } = useRouter()
    return (
        <section className="px-44">
            <div>
                <h2 className="text-white lg:text-5xl sm:text-3xl text-xl my-6  text-center font-semibold">Featured Projects</h2>
                <p className="mx-5 text-[#808080] lg:text-lg md:text-base sm:text-xs text-center mt-4 lg:mb-10 mb-4">
                    This project showcases my expertise in web development using JavaScript and TypeScript, <br />
                    with an approach focused on performance and scalability.
                </p>
            </div>

            <div className="flex justify-center items-center gap-16">
                {projects.map((project) => (
                    <div onDoubleClick={() => push(`/projects/${project.id}`)} key={project.id} className="p-4 rounded-xl flex flex-col shadow-xl shadow-yellow-400 hover:transform hover:scale-105 duration-300">
                        <div className="cursor-pointer flex justify-center items-start flex-col w-96 h-96 ">

                            {project.imageURL.length ? (
                                <Image alt="" width={500} height={300} src={project.imageURL[0]} className="rounded-md w-full h-1/2" />
                            ) : (
                                <div className="flex justify-center items-center w-full h-full rounded-md bg-slate-300">
                                    <h2>Image Preview Not Available</h2>
                                </div>
                            )}

                            <div className="w-full h-1/2 text-wrap">
                                <h2 className="text-white text-center text-lg mt-2">{project.title}</h2>
                                <p className="text-[#808080] my-4">{project.description}</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-yellow-500 text-xs mt-2 mb-4">{project.techStack}</p>
                            <div className="border-t border-slate-600 flex gap-2 justify-end items-center pt-2 pr-2">
                                <Image alt="" width={60} height={60} src={svgIcon.githubIcon} className="w-7 h-7 mt-1 cursor-pointer hover:transform hover:scale-150 duration-300" onClick={() => window.open(project.githubURL, "_blank")} />
                                <Image alt="" width={60} height={60} src={svgIcon.linkIcon} className="w-5 h-5 cursor-pointer hover:transform hover:scale-150 duration-300" onClick={() => window.open(project.demoURL, "_blank")} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
};

export default Featured;
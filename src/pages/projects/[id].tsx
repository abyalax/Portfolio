import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/component/fragments/Navbar";
import Footer from "@/component/fragments/Footer";
import Projects from ".";
import { useRouter } from "next/navigation";
import { Project } from "@prisma/client";
import { getProjectByID } from "@/services/projects";
import ReactMarkdown from "react-markdown";

export async function getServerSideProps({ params }: { params: { id: string } }) {
    const id = parseInt(params.id)
    const project = await getProjectByID(id)
    return {
        props: { project }
    };
}

const ProjectDetailPage = ({ project }: { project: Project }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(false);
    const router = useRouter()

    useEffect(() => {
        const interval = setInterval(() => {
            carouselInfiniteScroll();
        }, 3000);
        return () => clearInterval(interval);
    })

    const carouselInfiniteScroll = () => {
        if (project?.imageURL.length) {
            if (currentIndex === project.imageURL.length - 1) {
                return setCurrentIndex(0);
            }
            return setCurrentIndex(currentIndex + 1);
        }
    }

    if (project) {
        return (
            <div className="bg-black min-h-screen">
                <Navbar />
                <button onClick={() => router.back()} className="bg-slate-300 ml-20 flex items-center justify-center font-semibold lg:text-xl sm:text-lg px-3 py-1 rounded-md hover:scale-90 hover:transition-transform">
                    <svg className="text-slate-500 rotate-180" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                    </svg>
                    Kembali
                </button>
                <div className="px-44 mt-4">
                    <h2 className="text-white text-3xl font-semibold">{project.title}</h2>
                    <div className="flex flex-col justify-center  text-white">

                        <div className="w-full mx-auto my-10 rounded-xl overflow-hidden">
                            <div className=" flex flex-nowrap overflow-hidden rounded-xl ">
                                {project.imageURL.map((item, index) => (
                                    <div key={index} style={{ transform: `translate(-${currentIndex * 100}%)` }} onMouseOver={() => setVisible(true)} onMouseOut={() => setVisible(false)} className="relative min-w-full w-full flex items-center justify-center ">
                                        <button className={`${visible ? 'opacity-100' : 'opacity-0'} absolute left-0`} onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + project.imageURL.length) % project.imageURL.length)}>
                                            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                                                <svg className="text-slate-500 rotate-180" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                                </svg>
                                            </div>
                                        </button>
                                        <Image alt="" width={1200} height={800} priority src={item} className="rounded-xl w-[90%]" />
                                        <button className={`${visible ? 'opacity-100' : 'opacity-0'} absolute right-0`} onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % project.imageURL.length)}>
                                            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                                                <svg className="text-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <Link href={project.demoURL} className="hover:text-yellow-500 ml-20">{project.demoURL}</Link>
                        </div>

                        <ReactMarkdown>{project.content}</ReactMarkdown>

                    </div>
                </div>
                <Footer />
            </div>
        )
    } else {
        return <Projects projectReal={[]} projectDummy={[]} />
    }
};

export default ProjectDetailPage;
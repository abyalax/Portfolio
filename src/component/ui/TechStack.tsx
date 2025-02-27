import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";

const blurDataURL = "/blur.webp";

type Props = {
    src: string | StaticImport;
    title: string,
    description: string
};

const TechStack = ({ src, title, description }: Props) => {
    const [show, setShow] = useState(false);

    return (
        <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
            className="relative col-span-1 md:w-44 md:h-44 sm:w-40 sm:h-40 w-32 h-32 p-3 bg-[#0a0a0a] border-4 border-[#404040] flex justify-center items-center rounded-3xl cursor-pointer hover:shadow-xl hover:shadow-yellow-400"
        >
            <div id="tooltip-default" role="tooltip"
                className={`absolute text-center bottom-full mb-2 px-3 py-2 font-medium text-white bg-gray-700 rounded-lg shadow-lg transition-opacity duration-300 
                ${show ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <h2 className="text-lg my-0 -mb-3">{title}</h2>
                <p className="text-sm">{description}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#374151" className="bi bi-triangle-fill absolute top-[90%] rotate-180 left-1/2 transform -translate-x-1/2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z" />
                </svg>
            </div>
            {/* Gambar */}
            <Image blurDataURL={blurDataURL} placeholder="blur" loading="lazy" alt="Tech Stack Logo" width={128} height={128} src={src} className="hover:transform hover:scale-125 duration-300" />
        </div>
    );
};

export default TechStack;

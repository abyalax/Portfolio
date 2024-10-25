import svg from "../../assets/getter";

const Skills = () => {
    return (
        <div className="w-full flex flex-col items-center px-32">
            <h2 className="text-white text-5xl my-10 font-semibold">Tools and Skills</h2>
            <div className="flex justify-center ">
                <div className="m-4 w-44 h-44 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                    <img src={svg.nodejs} />
                </div>
                <div className="m-4 w-44 h-44 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                    <img src={svg.react} />
                </div>
                <div className="m-4 w-44 h-44 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                    <img src={svg.ts} />
                </div>
                <div className="m-4 w-44 h-44 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                    <img src={svg.vscode} />
                </div>
                <div className="m-4 w-44 h-44 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                    <img src={svg.html} />
                </div>
                <div className="m-4 w-44 h-44 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                    <img src={svg.css} />
                </div>
                <div className="m-4 w-44 h-44 bg-[#323131] border-4 border-[#404040] flex justify-center items-center rounded-3xl ">
                    <img src={svg.tailwinds} />
                </div>
            </div>
        </div>
    )
};

export default Skills;
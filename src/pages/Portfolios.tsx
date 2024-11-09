import { svgIcon } from "../utils/getter";
import Navbar from "../components/fragments/Navbar";
import { portfolio } from "../utils/portfolio/index"
import { useNavigate } from "react-router-dom";

const Portfolios = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-[#272727] min-h-screen">
      <Navbar />
      <div className="lg:px-44 md:px-32 sm:px-20 px-5">
        <h2 className="text-white lg:text-3xl md:text-xl sm:text-base text-center">Past Project Experience</h2>
        <p className="text-[#808080] lg:text-lg md:text-base sm:text-xs text-center mt-4 lg:mb-10 mb-4">Explore the Project I've worked on so far</p>
        <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:flex sm:w-full sm:flex-wrap sm:gap-4 lg:gap-6">

          {portfolio.map((project) => (
            <div onClick={() => navigate(`/portfolio/${project.id}`)} key={project.id} className="lg:col-span-1 my-2 bg-[#1D1D1D] min-w-56 sm:w-full p-4 rounded-xl flex flex-col justify-between cursor-pointer">
              <div className="cursor-pointer">
                <img src={project.img[0]} className="rounded-md" />
                <h2 className="text-white text-center text-lg mt-2">{project.title}</h2>
                <p className="text-[#808080] my-4">{project.description}</p>
              </div>
              <div>
                <p className="text-yellow-500 text-xs mt-2 mb-4">{project.techStack}</p>
                <div className="border-t border-slate-600 flex gap-2 justify-end items-center pt-2 pr-2">
                  <img src={svgIcon.githubIcon} className="w-7 h-7 mt-1 cursor-pointer" onClick={() => window.open(project.urlGithub, "_blank")} />
                  <img src={svgIcon.linkIcon} className="w-5 h-5 cursor-pointer" onClick={() => window.open(project.urlWeb, "_blank")} />
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
};

export default Portfolios;
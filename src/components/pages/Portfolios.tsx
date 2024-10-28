import { projects, svgIcon } from "../../assets/getter";
import Navbar from "./Navbar";

const Portfolios = () => {
  return (
    <div className="bg-[#272727] min-h-screen">
      <Navbar />
      <div className="px-44">
        <h2 className="text-white text-3xl text-center">Past Project Experience</h2>
        <p className="text-[#808080] text-lg text-center mt-4 mb-10">Explore the Project I've worked on so far</p>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 bg-[#1D1D1D] p-4 rounded-xl flex flex-col justify-between">
            <div>
              <img src={projects.webProfile} className="rounded-md" />
              <h2 className="text-white text-center text-lg mt-2">Personal Website</h2>
              <p className="text-[#808080] my-4">My Personal Website</p>
            </div>
            <div>
              <p className="text-yellow-500 text-xs mt-2 mb-4">React JS, Tailwinds</p>
              <div className="border-t border-slate-600 flex gap-2 justify-end items-center pt-2 pr-2">
                <img src={svgIcon.githubIcon} className="w-7 h-7 mt-1 cursor-pointer" onClick={() => window.open("https://github.com/abyalax/Portfolio", "_blank")} />
                <img src={svgIcon.linkIcon} className="w-5 h-5 cursor-pointer" onClick={() => window.open("https://profile-abya.vercel.app/", "_blank")} />
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-[#1D1D1D] p-4 rounded-xl flex flex-col justify-between">
            <div>
              <img src={projects.tokopedia} className="rounded-md" />
              <h2 className="text-white text-center text-lg mt-2">Clone Tokopedia</h2>
              <p className="text-[#808080] my-4">Project MERN Stack for Learning by Studi Case</p>
            </div>
            <div>
              <p className="text-yellow-500 text-xs mt-2 mb-4">MongoDB, Express JS, React JS, Node JS</p>
              <div className="border-t border-slate-600 flex gap-2 justify-end items-center pt-2 pr-2">
                <img src={svgIcon.githubIcon} className="w-7 h-7 mt-1 cursor-pointer" onClick={() => window.open("https://github.com/abyalax/Project-MERN-Frontend", "_blank")} />
                <img src={svgIcon.linkIcon} className="w-5 h-5 cursor-pointer" onClick={() => window.open("https://fake-tokopedia.vercel.app", "_blank")} />
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-[#1D1D1D] p-4 rounded-xl flex flex-col justify-between">
            <div>
              <img src={projects.groq} className="rounded-md" />
              <h2 className="text-white text-center text-lg mt-2">Groq AI Chatbot</h2>
              <p className="text-[#808080] my-4">Project React for Chat with AI</p>
            </div>
            <div>
              <p className="text-yellow-500 text-xs mt-2 mb-4">React JS, Tailwinds</p>
              <div className="border-t border-slate-600 flex gap-2 justify-end items-center pt-2 pr-2">
                <img src={svgIcon.githubIcon} className="w-7 h-7 mt-1 cursor-pointer" onClick={() => window.open("https://github.com/abyalax/Mobile-App-CMS", "_blank")} />
                <img src={svgIcon.linkIcon} className="w-5 h-5 cursor-not-allowed" />
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-[#1D1D1D] p-4 rounded-xl flex flex-col justify-between">
            <div>
              <img src={projects.blogCMS} className="rounded-md" />
              <h2 className="text-white text-center text-lg mt-2">Blog App Mobile</h2>
              <p className="text-[#808080] my-4">Project React Native with Expo for my Learning Journey at Mobile Development</p>
            </div>
            <div>
              <p className="text-yellow-500 text-xs mt-2 mb-4">React Native</p>
              <div className="border-t border-slate-600 flex gap-2 justify-end items-center pt-2 pr-2">
                <img src={svgIcon.githubIcon} className="w-7 h-7 mt-1 cursor-pointer" onClick={() => window.open("https://github.com/abyalax/Mobile-App-CMS", "_blank")} />
                <img src={svgIcon.linkIcon} className="w-5 h-5 cursor-not-allowed" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default Portfolios;
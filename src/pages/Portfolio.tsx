import { useParams } from "react-router-dom";
import { portfolio } from "../utils/portfolio/index"
import Portfolios from "./Portfolios";
import Navbar from "../components/fragments/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/fragments/Footer";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const { id } = useParams();

  const project = portfolio.find((project) => project.id === parseInt(id!));

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);
    return () => clearInterval(interval);
  })

  const carouselInfiniteScroll = () => {
    if (project?.img.length) {
      if (currentIndex === project.img.length - 1) {
        return setCurrentIndex(0);
      }
      return setCurrentIndex(currentIndex + 1);
    }
  }

  if (project) {
    return (
      <div className="bg-[#272727] min-h-screen">
        <Navbar />
        <div className="px-44">
          <h2 className="text-white text-3xl font-semibold">{project.title}</h2>
          <div className="flex flex-col justify-center  text-white">

            <div className="w-full mx-auto my-10 rounded-xl overflow-hidden">
              <div className=" flex flex-nowrap overflow-hidden rounded-xl ">
                {project.img.map((item, index) => (
                  <div key={index} style={{ transform: `translate(-${currentIndex * 100}%)` }} onMouseOver={() => setVisible(true)} onMouseOut={() => setVisible(false)} className="relative min-w-full w-full flex items-center justify-center ">
                    <button className={`${visible ? 'opacity-100' : 'opacity-0'} absolute left-0`} onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + project.img.length) % project.img.length)}>
                      <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                        <svg className="text-slate-500 rotate-180" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                      </div>
                    </button>
                    <img src={item} className="rounded-xl w-[90%]" />
                    <button className={`${visible ? 'opacity-100' : 'opacity-0'} absolute right-0`} onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % project.img.length)}>
                      <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                        <svg className="text-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-2 my-4">
              <h2 className="text-3xl font-bold mt-8">Description</h2>
              <p>{project.description}</p>

              <h2 className="mt-4 text-2xl font-semibold">Tech Stack</h2>
              <p>{project.techStack}</p>

              <h2 className="mt-4 text-2xl font-semibold">Akses Web Demo</h2>
              <Link to={project.urlWeb} className="hover:text-yellow-500">{project.urlWeb}</Link>

              <h2 className="mt-4 text-2xl font-semibold">Feature</h2>
              {project.feature.map((feature, index) => (
                <ul>
                  <li key={index} className="text-xl mt-3 font-semibold ml-3">{`${index + 1 }. ${feature.title}`}</li>
                  <li className="text-lg ml-8">{feature.description}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  } else {
    return <Portfolios />
  }

};

export default Portfolio;
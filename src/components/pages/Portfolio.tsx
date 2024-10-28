import Navbar from "./Navbar";

const Portfolio = () => {
  return (
    <div className="bg-[#272727] min-h-screen">
      <Navbar />
      <div className="px-44">
        <h2 className="text-white text-3xl text-center">Past Project Experience</h2>
        <p className="text-[#808080] text-lg text-center mt-4 mb-10">Explore the Project I've worked on so far</p>
        <div className="flex gap-6">
          <div className="w-1/3 bg-slate-300">
            satu
          </div>
          <div className="w-1/3 bg-slate-300">
            dua
          </div>
          <div className="w-1/3 bg-slate-300">
            tiga
          </div>
        </div>
      </div>
    </div>
  )
};

export default Portfolio;
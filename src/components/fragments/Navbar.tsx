import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="px-6 lg:px-20 md:px-20 sm:px-8">
            <div className="flex flex-row h-20 justify-between items-center py-7 border-b border-gray-500 mb-4 sm:mb-6">
                <div className="h-full text-white font-extrabold text-2xl">
                    <h2 className="lg:block md:block hidden">Abya</h2>
                </div>
                <div className="flex flex-row lg:gap-16 md:gap-10 gap-4 sm:gap-8 h-full w-full justify-center sm:justify-center md:justify-end lg:justify-end text-white sm:font-semibold">
                    <a href="/#home" className="h-full hover:text-yellow-500">Home</a>
                    <a href="/#skill" className="h-full hover:text-yellow-500">Skills</a>
                    <a href="/#about" className="h-full hover:text-yellow-500">About</a>
                    <Link to="/projects" className="h-full hover:text-yellow-500">Portfolio</Link>
                    <Link to="/blogs" className="h-full hover:text-yellow-500">Blog</Link>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
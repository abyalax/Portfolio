import Button from "./Button";

const Home = () => {

    const biografi = import.meta.env.VITE_BIOGRAFI

    return (
        <div className="flex p-32 pt-44">
            <div className="flex-1 flex flex-col gap-2">
                <h2 className=" text-2xl text-white font-bold my-3">Hello Buddy🙌</h2>
                <h2 className="text-6xl text-white font-bold">I'am <span className="text-green-500">Abya Bahari Wafdulloh</span></h2>
                <p className="text-[#808080] text-xl font-semibold mb-10">Fullstack developer</p>
                <hr className="text-[#808080] w-1/3" />
                <p className="text-xl text-[#808080] font-semibold">
                    {biografi}
                </p>
                <div className="mt-7 flex gap-5">
                    <Button className="bg-green-500 font-semibold text-white text-xl">
                        Donwload CV
                    </Button>
                    <Button className="bg-transparent border text-white font-semibold text-xl">
                        Details
                    </Button>
                </div>
            </div>
            <div className="flex flex-col relative items-center justify-center">
                {/* <!-- Background Shapes --> */}
                <div className="absolute w-72 h-72 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-70"></div>
                <div className="absolute w-48 h-48 bg-green-500 bg-opacity-30 rounded-full top-5 left-1/2 transform -translate-x-1/2"></div>
                <div className="absolute w-10 h-10 bg-green-400 top-7 left-3/4 transform rotate-45">
                    <div className="w-full h-full bg-green-400 absolute top-0 left-0"></div>
                </div>
                {/* <!-- Profile Image --> */}
                <img src="../../../public/assets/profile1.png" alt="Profile" className="relative object-cover object-center z-10 w-96 h-96 rounded-full border-4 border-gray-800" />
                <h2 className="relative text-2xl text-white font-bold">Let's Connect </h2>
                <div className="relative flex text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                </div>
            </div>
        </div>
    )
};

export default Home;
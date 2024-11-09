
const Featured = () => {

    return (
        <div className="px-44">
            <div>
                <h2 className="text-white lg:text-5xl sm:text-3xl text-xl my-6  text-center font-semibold">Featured Projects</h2>
                <p className="mx-5 text-[#808080] lg:text-lg md:text-base sm:text-xs text-center mt-4 lg:mb-10 mb-4">
                    This project showcases my expertise in web development using JavaScript and TypeScript, <br />
                    with an approach focused on performance and scalability.
                </p>
            </div>
        </div>

    )
};

export default Featured;

/*
<div className="w-full mx-auto my-10 rounded-xl">
                <div className=" flex flex-nowrap rounded-xl bg-blue-500    ">
                    {portfolio.map((item, index) => (
                        <div key={index} style={{ transform: `translate(-${currentIndex * 100}%)` }} className="relative min-w-full w-full flex bg-red-500 items-center justify-center ">

                            <div onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolio.length) % portfolio.length)} className="absolute h-1/2 w-auto left-0 flex items-center justify-center bg-white">
                                <img src={item.img[currentIndex - 1]} className="rounded-xl" />
                            </div>

                            <img src={item.img[currentIndex]} className="rounded-xl h-[50%] w-auto" />

                            <div onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1 + portfolio.length) % portfolio.length)} className="absolute h-1/2 w-auto right-0 flex items-center justify-center bg-white">
                                <img src={item.img[currentIndex + 1]} className="rounded-xl" />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
*/
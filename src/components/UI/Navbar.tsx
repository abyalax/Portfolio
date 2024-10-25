
const Navbar = () => {
    return (
        <div className="p-10 px-32">
            <div className="flex flex-row h-20 justify-between items-center p-7">
                <div className="h-full text-white font-extrabold text-2xl">
                    <h2>Abya laxx</h2>
                </div>
                <div className="flex flex-row gap-16 h-full text-white font-semibold">
                    <a href="#home" className="h-full">Home</a>
                    <a href="#skill" className="h-full">Skills</a>
                    <a href="#about" className="h-full">About</a>
                    <a href="" className="h-full">Portfolio</a>
                    <a href="" className="h-full">Blog</a>
                </div>
            </div>
            <hr style={{borderColor: 'gray', marginTop: '20px'}} />
        </div>
    )
};

export default Navbar;
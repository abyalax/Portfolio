
const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 p-10 px-32">
            <div className="flex flex-row h-20 justify-between items-center p-7">
                <div className="h-full text-white font-extrabold text-2xl">
                    <h2>Abya laxx</h2>
                </div>
                <div className="flex flex-row gap-16 h-full text-white font-semibold">
                    <a href="" className="h-full">Home</a>
                    <a href="" className="h-full">Mentorship</a>
                    <a href="" className="h-full">Portfolio</a>
                    <a href="" className="h-full">Snippet</a>
                    <a href="" className="h-full">Blog</a>
                </div>
            </div>
            <hr style={{borderColor: 'gray', marginTop: '20px'}} />
        </div>
    )
};

export default Navbar;
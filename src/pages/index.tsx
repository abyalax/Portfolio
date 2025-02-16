import Home from "../components/fragments/landing/Home"
import Navbar from "../components/fragments/Navbar"
import About from "../components/fragments/landing/About"
import Skills from "../components/fragments/landing/Skills"
import Contact from "../components/fragments/landing/Contact"
import Footer from "../components/fragments/landing/Footer"
import Featured from "../components/fragments/landing/Featured"

const LandingPage = () => {
    return (
        <div className="bg-[#272727] min-h-screen overflow-x-hidden">
            <Navbar />
            <Home />
            <Skills />
            <About />
            <Featured />
            <Contact />
            <Footer />
        </div>
    )
};

export default LandingPage;
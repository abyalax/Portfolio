import Home from "./components/pages/Home"
import Navbar from "./components/pages/Navbar"
import About from "./components/pages/About"
import Skills from "./components/pages/Skills"
import "./index.css"
import Contact from "./components/pages/Contact"
import Footer from "./components/pages/Footer"
function App() {

  return (
    <div className="bg-[#272727] min-h-screen overflow-x-hidden">
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

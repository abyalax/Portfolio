import Home from "./pages/Home"
import Navbar from "./components/fragments/Navbar"
import About from "./pages/About"
import Skills from "./pages/Skills"
import "./index.css"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"
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

import "./index.css"
import Home from "./pages/Home"
import Navbar from "./components/fragments/Navbar"
import About from "./components/fragments/About"
import Skills from "./components/fragments/Skills"
import Contact from "./components/fragments/Contact"
import Footer from "./components/fragments/Footer"
import Featured from "./components/fragments/Featured"
function App() {

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
}

export default App

import Home from "./components/UI/Home"
import Navbar from "./components/UI/Navbar"
import About from "./components/UI/About"
import Skills from "./components/UI/Skills"
import "./index.css"
function App() {

  return (
    <div className="bg-[#272727] min-h-screen h-[4000px]">
      <Navbar />
      <Home />
      <Skills />
      <About />
    </div>
  )
}

export default App

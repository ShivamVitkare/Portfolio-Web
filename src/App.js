import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="overflow-hidden max-w-[1500px]">
        <Navbar/>
      <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  );
}

export default App;

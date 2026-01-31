import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About  from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Roadmap from "./components/Roadmap"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Roadmap/>
    </div>
  );
}

export default App;
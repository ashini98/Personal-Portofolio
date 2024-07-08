import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return(
    <div className="overflow-x-hidden antialiased text-neutral-300 selection:bg-blue-300 selection:text-blue-900">
     <div className="fixed top-0 w-full h-full -z-10">
     <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 
    py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
     </div>
     
    <div className="container px-8 mx-auto">
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
    </div>
  );
};

export default App

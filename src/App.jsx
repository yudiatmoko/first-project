import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Service from "./components/Service";
import About from "./components/About.jsx";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

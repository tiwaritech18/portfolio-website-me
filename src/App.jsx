import './App.css';
import './media-queries.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <Navbar />
      <Herosection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './media-queries.css';
import Home from './pages/Home';
import AdditionalProjects from './pages/AdditionalProjects';
import Loader from './utils/Loader';
import AboutSection from './components/About';
import ContactSection from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeoutId); // Cleanup function to clear timeout
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar/>
          <Routes>
            <Route path='/addprojects' element={<AdditionalProjects />} />
            <Route path='/about' element={<AboutSection />} />
            <Route path='/contact' element={<ContactSection />} />
            <Route path='/' element={<Home />} />
          </Routes>
          <Footer/>
        </>
      )}
    </Router>
  );
}

export default App;

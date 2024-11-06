import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Startups from './pages/Startups';
import Investors from './pages/Investors';
import About from './pages/About';
import SignIn from './pages/SignIn';
import CustomCursor from './components/CustomCursor';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Check if device supports hover
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (hasHover) {
      document.documentElement.classList.add('has-custom-cursor');
    }
  }, []);

  return (
    <Router>
      <div className="bg-white">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
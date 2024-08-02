import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/Pagenotfound';
import PrivacyPolicy from './pages/Policy'; // Add this import

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<PrivacyPolicy />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home'; // Add the missing closing quotation mark
import About from './Components/Pages/About';
import Navbar1 from './Components/Navbar1/Navbar1';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
import Contact from './Components/Pages/Contact';
import Slider from './Components/Slider/Slider'
import Video from './Components/Pages/video';
import Mentor from './Components/Mentor/Mentor';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Navbar1/>
        <Slider/>
        <Home></Home>
        <Mentor/>
        <Video/>
       

        <Routes>
          
          <Route path="/About" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Navbar1" element={<Navbar1 />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Contact" element={<Contact />} />
          {/* Add a catch-all route for unknown paths */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

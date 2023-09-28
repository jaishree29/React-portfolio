import React from "react";
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/navbar/Home";
import About from "./components/navbar/About";
import Skills from "./components/navbar/Skills";
import Contact from "./components/navbar/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/skills' element={<Skills/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;

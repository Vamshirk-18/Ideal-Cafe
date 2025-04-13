import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Offers from './pages/Offers';
import Home from './pages/Home';
import Profile from './pages/Profile';        
import Navbar from './pages/Navbar';
import Contact from './pages/Contact';
import Location from './pages/Location';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import SpinWheel from './pages/SpinWheel';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/offers" element={<Offers />} />       
        <Route path="/spin" element={<SpinWheel />} />
      </Routes>
    </Router>
  );
}

export default App;

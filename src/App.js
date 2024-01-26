import React from 'react';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Products from './components/products/Products'
import Contact from './components/contact/Contact'
import  Announcement from './components/announcement/Announcement'
import  Cart from './components/cart/Cart'

import Home from './components/home/Home';
import About from './components/about/About';



function App() {
  return (

    
    <Router>
    <Header/>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/announcement" element={<Announcement />} />
                <Route path="/cart" element={<Cart />} />
                
            </Routes>
            <Footer/>
        </Router>

    

    
          


        
        
      
  );
}

export default App;

import React from 'react'
import './Header.css'
import logo from '../assests/logo.png'
import { TfiAnnouncement } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
        <header className="App-header">
<Link to="/"><img src={logo} alt="shop logo" class="logo"></img></Link>

        <div class="search-bar">
           
            <input type="text" placeholder="search products.."></input>
            <button type="button"><IoIosSearch id='searchicon'/></button>
        </div>
        

        <nav>
          <ul class="nav-menu">
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/products">products</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/contact">contact</Link>
            </li>

            
          </ul>
        </nav>
        <Link to="/announcement"><TfiAnnouncement class="icon"/></Link>
        <Link to="/cart"><FiShoppingCart class="icon"/></Link>
        <FaRegCircleUser class="icon"/>
        
        </header>
    
  )
}

export default Header
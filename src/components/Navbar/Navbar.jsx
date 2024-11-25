import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import './Main.css'
import logo from '../../Assets/logomain.png'
import search from '../../Assets/search-solid.svg'
function Header() {
  return (
    <nav className='main-nav'>
    <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt='logo' width={'150px'} height={"35px"} />
        </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Products</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
        <form>
            <input type="text" placeholder='Search...'/>
            <img src={search} alt="search" width="18" className='search-icon'/>
        </form>
            <Link to='/Login' className='nav-item nav-links'>Log in</Link> 
            
    </div>
</nav>
  );
}

export default Header;

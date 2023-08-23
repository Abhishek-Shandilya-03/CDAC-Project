import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./header.css"

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },

  {
    path: "/about",
    display: "About",
  },

  {
    path: "/tours",
    display: "Tours",
  },

  {
    path: "/booked",
    display: "My-Bookings",
  },
];


const Header = () => {
  return (
    <header className='header'>
      <div className='nav-wrapper'>
        <div className='logo'>
          <Link to="/"><h1>SnapTravel</h1></Link>
        </div>
        <div>
          <nav>
            <ul className='nav-menu'>
              {nav__links.map((item, index) => (
                <li className='nav-item' key={index}>
                  <NavLink className="menu-link" to={item.path}>{item.display}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='nav-buttons'>
          <button className='login'><Link to='/login'>Login</Link></button>
          <button className='signup'><Link to='/register'>Sign up</Link></button>
          
        </div>
      </div>
    </header>
  )
}

export default Header

import './NavbarStyles.css'
import React, { useState } from 'react'
import { MenuItems } from './MenuItem'

export const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  return (
    <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Trippy</h1>

        <div 
          onClick={() => setToggle(!toggle)}
          className='menu-icons'>
          <i 
          className={toggle ? 'fas fa-times' : 'fas fa-bars' }></i>
        </div>

        <ul className='nav-menu'>
          {MenuItems.map((item, index) => {
            return(
              <li key={index}>
                  <a className={item.cName} href={item.url}>
                    <i className={item.icon}></i> {item.title}
                  </a>
             </li> 
            )
          })}
          <button>Sign Up</button>
        </ul>
    </nav>
  )
}

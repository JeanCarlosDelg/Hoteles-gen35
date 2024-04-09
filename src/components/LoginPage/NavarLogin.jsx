import React from 'react'
import { Link } from 'react-router-dom'
import './slyle/NavarLogin.css'

const NavarLogin = () => {
  return (
    <div>
      <nav className='hotelNav__navbar'>
        <ul className='hotelNav__list'>
          <li className='hotelNav__item'><Link className='label__item' to='/register'>Register</Link></li>
          <li className='hotelNav__item'><Link className='label__item' to='/login'>Login</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavarLogin
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/PrincipalHeader.css'


const PrincipalHeader = () => {

  return (
    <header className='header__container'>
      <div className='header__sub-container'>
        <h1 className='header__logo'><Link className='name__logo' to='/'>Hotels<span>App</span></Link></h1>
      </div>
    </header>
  )
}

export default PrincipalHeader
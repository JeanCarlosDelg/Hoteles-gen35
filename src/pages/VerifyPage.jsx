import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import { Link, useParams } from 'react-router-dom'
import './styles/VerifyPage.css'

const VerifyPage = () => {
  const { email_code } = useParams()
  const { verify } = useAuth()

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('userData')))

  useEffect(() => {
    verify(email_code)
  }, [email_code])

  return (
    <div>
      <div className='hotelNav__container'>
        <div className='header__cont-logo2'>
          <h1 className='header__logo2'><Link className='name__logo-perfil' to='/'>Hotels<span>App</span></Link></h1>
        </div>
      </div>
      <div className='verify__cotainer'>
        <h3 className='verify__welcome'>Welcome </h3>
        <span className='verify__name'>{" "}{user.firstName} {user.lastName}</span>
        <h4 className='verify__email'> Your email <span className='verify__span'>{" "}{user.email}</span> is verified correctly </h4>
        <div className='verify__logo-container'>
          <i className='bx bxs-check-circle verify__logo'></i>
        </div>
        <Link to='/login' className='btn__login'>Login</Link>
      </div>
    </div>
  )
}

export default VerifyPage
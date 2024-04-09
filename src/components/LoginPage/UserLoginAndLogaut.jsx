import React, { useState } from 'react'
import './slyle/UserLoginAndLogaut.css'
import { useNavigate } from 'react-router-dom'

const UserLoginAndLogaut = () => {

  const navigate = useNavigate()
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const handlePerfil = () => {
    navigate('/login')
  }

  return (
    <div onClick={handlePerfil} className='perfil__container'>
      <div className='perfil__name-cont'>
        <h2 className='perfil__first-name'>
          {user?.firstName}
        </h2>
        <h2 className='perfil__last-name'>
          {user?.lastName}
        </h2>
      </div>
      <header className='perfil__header-cont'>
        <img className='perfil__img'
          src={
            user?.gender === 'female'
              ? '/female.jpeg'
              : '/male.jpeg'
          }
          alt="" />
      </header>
    </div>
  )
}

export default UserLoginAndLogaut
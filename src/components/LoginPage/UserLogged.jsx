import { Link } from 'react-router-dom'
import './slyle/UserLogged.css'
import { useState } from 'react'
import UserDelete from './UserDelete'

const UserLogged = ({ setUser, user }) => {

  const [deleteIsClose, setDeleteIsClose] = useState(true)

  const handleDelete = () => {
    setDeleteIsClose(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('userData')
    setUser()
  }

  return (
    <div>
      <div className='hotelNav__container'>
        <div className='header__cont-logo2'>
          <h1 className='header__logo2'><Link className='name__logo-perfil' to='/'>Hotels<span>App</span></Link></h1>
        </div>
      </div>
      <article className='perfil'>
        <header className='perfil__header-img'>
          <img className='img__perfil'
            src={
              user.gender === 'female'
                ? '/female.jpeg'
                : '/male.jpeg'
            }
            alt="" />
        </header>
        <h2 className='perfil__names'>
          {user.firstName} {user.lastName}
        </h2>
        <h3 className='perfil__email'>{user.email}</h3>
        <div className='perfil__btn'>
        <button className='perfil__btn-logout' onClick={handleLogout}>Logout</button>
        <button className='perfil__btn-delete' onClick={handleDelete}>Delete acount</button>
        </div>
        <div>
          <UserDelete 
            deleteIsClose={deleteIsClose}
            setDeleteIsClose={setDeleteIsClose}
            user={user}
          />
        </div>
      </article>
    </div>
  )
}

export default UserLogged
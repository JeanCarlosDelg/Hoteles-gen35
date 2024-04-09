import './slyle/UserLogged.css'

const UserLogged = ({ setUser, user }) => {

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser()
  }

  console.log(user)

  return (
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
      <button className='perfil__btn' onClick={handleLogout}>Logout</button>
    </article>
  )
}

export default UserLogged
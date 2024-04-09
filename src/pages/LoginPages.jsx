import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import UserLogged from '../components/LoginPage/UserLogged'
import { useNavigate } from 'react-router-dom'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { userSchemaLogin } from '../components/ValidationsTheForm/userSchema'

const LoginPages = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const { register, handleSubmit, reset, formState: {errors} } = useForm()
  //   {
  //   resolver: zodResolver(userSchemaLogin)
  // })
  
  const { loginUser } = useAuth()
  
  const navigate = useNavigate()

  const submit = data => {
    loginUser(data)
    reset({
      email: '',
      password: '',
    })
  }
  
    const handleNavigateRegister = () => {
      navigate('/register')
    }

  if (localStorage.getItem('token')) {
    return <UserLogged setUser={setUser} user={user} />
  }


  return (
    <div className='form__total-container'>
      <div className='form__container'>
        <form className='form__total' onSubmit={handleSubmit(submit)}>
          <div className='form__cont-name'>
            <h2 className='form__name'>Login</h2>
          </div>
          <label className='form__label'>
            <span className='form__item'>Email</span>
            <input className='form__value' required {...register('email')} type="email" />
          </label>
          <label className='form__label'>
            <span className='form__item'>Password</span>
            <input className='form__value' required {...register('password')} type="password" />
          </label>
          <button className='form__btn'>Submit</button>
        </form>
        <div className='info-register'>
          <h2 className='register_detail'>Don't you have an account?</h2>
          <div className='bnt__register-cont'>
            <button onClick={handleNavigateRegister} className='btn-register'>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPages
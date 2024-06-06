import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './styles/ResetPass.css'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import { Toaster, toast } from 'sonner'

const ResetPassPage = () => {

  const navigate = useNavigate()

  const { handleSubmit, reset, register } = useForm()

  const { resetPass } = useAuth()

  const submit = (data) => {
    const frontBaseUrl = `${location.protocol}//${location.host}/#/reset_password`
    const body = { ...data, frontBaseUrl }
    console.log(body)
    resetPass(body)
    reset()
  }

  return (
    <div className='reset__container'>
      <div className='hotelNav__container'>
        <div className='header__cont-logo2'>
          <h1 className='header__logo2'><Link className='name__logo-perfil' to='/'>Hotels<span>App</span></Link></h1>
        </div>
      </div>
      <div className='reset__sub-container'>
        <h2 className='reset__title'>RESET PASSWORD</h2>
        <div>
          <form onSubmit={handleSubmit(submit)} className='reset__form'>
            <label className='reset__label'>
            <span className='reset__span'>Email address</span>
            <input className='reset__input' {...register('email')} type="email" placeholder='Inset your email to reset your password' />
            <button className='reset__btn'>Submit</button>
            </label>
          </form>
        </div>
      </div>
      <Toaster
        richColors
        theme='dark'
      />
    </div>
  )
}

export default ResetPassPage
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'
import { Toaster, toast } from 'sonner'

const ResetPassCode = () => {

  const { code } = useParams()

  const navigate = useNavigate()

  const { handleSubmit, reset, register } = useForm()

  const { resetPassCode } = useAuth()

  const submit = (data) => {
    const confirmPass = data.password !== data.confirmPassword
    if (confirmPass) {
      const toastId = toast.loading('loading...')
      setTimeout(() => {
        toast.error('The passwords do not match', {
          id: toastId
        })
      }, 1000)
    } else {
      const body = {
        password: data.password
      }
      resetPassCode(code, body)
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
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
              <span className='reset__span'>New Password</span>
              <input className='reset__input' {...register('password')} type="password" placeholder=' Enter password' />
            </label>
            <label className='reset__label'>
              <span className='reset__span'>Confirm your password</span>
              <input className='reset__input' {...register('confirmPassword')} type="password" placeholder=' Enter password again' />
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

export default ResetPassCode
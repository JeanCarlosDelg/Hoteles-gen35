import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import HotelsIdPage from './pages/HotelsIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPages from './pages/LoginPages'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getHotelsThunk } from './store/states/Hotels.slice'
import ReservationsPage from './pages/ReservationsPage'
import ProtectecRoute from './pages/ProtectecRoute'
import VerifyPage from './pages/VerifyPage'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    // const url = 'https://hotels-(borrar)api.academlo.tech/hotels'
    // const url = 'https://entreg6-(borrar)backend.onrender.com/hotels'
    const url = 'http://localhost:8080/hotels'
    dispatch(getHotelsThunk(url))
  }, [])


  return (
    <div className='container__principal'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hotels/:id' element={<HotelsIdPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPages />} />
        <Route path='/verify/:email_code' element={<VerifyPage />} />
        {/* <Route path='/reset_password' element={< />} /> */}
        <Route element={<ProtectecRoute />} >
          <Route path='/reservations' element={<ReservationsPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

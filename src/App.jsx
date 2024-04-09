import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import HotelsIdPage from './pages/HotelsIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPages from './pages/LoginPages'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getHotelsThunk } from './store/states/Hotels.slice'
import PrincipalHeader from './components/shared/PrincipalHeader'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(getHotelsThunk(url))
  }, [])
  

  return (
    <div className='container__principal'>
      <PrincipalHeader />
      <Routes>
        <Route path='/' element={<HomePage /> } />
        <Route path='/hotels/:id' element={<HotelsIdPage /> } />
        <Route path='/register' element={<RegisterPage /> } />
        <Route path='/login' element={<LoginPages /> } />
      </Routes>
    </div>
  )
}

export default App

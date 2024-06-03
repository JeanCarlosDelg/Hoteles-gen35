import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const useAuth = () => {

  const navigate = useNavigate()
  
    // Register
  const registerUser = (data) => {
    const url = 'https://entreg6-backend.onrender.com/users'
    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        toast.success('User create successfully')
        navigate('/login')
      })
      .catch(err => {
        console.log(err)
        toast.error('User create fail')
      })
    }
    
    // login 
    const loginUser = (data) => {
      const url = 'https://entreg6-backend.onrender.com/users/login'
      axios.post(url, data)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        toast.success('Login successfully')
        navigate('/')
      })
      .catch(err => {
        console.log(err.response?.data.message)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        toast.error(err.response?.data.message)
      })
  }


  return { registerUser, loginUser }
}

export default useAuth
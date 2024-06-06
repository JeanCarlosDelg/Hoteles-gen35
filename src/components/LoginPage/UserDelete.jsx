import { useNavigate } from 'react-router-dom'
import useCrud from '../../hooks/useCrud'
import './slyle/DeleteUser.css'
import useAuth from '../../hooks/useAuth'

const UserDelete = ({ deleteIsClose, setDeleteIsClose, user }) => {

  const navigate = useNavigate()

  const { remove } = useAuth()

  const handleOpenDeleteAccept = () => {
    remove(user.id)
    setDeleteIsClose(true)
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userData");
    navigate('/')
  }

  const handleOpenDeleteCancel = () => {
    setDeleteIsClose(true)
  }


  return (
    <div className={`delete__container ${deleteIsClose && 'delete__close'}`}>
      <article className='delete'>
        <h2 className='delete__subTitle'>Delete account </h2>
        <p>Hello <span className='name__delete'>{`${user?.firstName} ${user?.lastName},`}</span> are you sure you want to delete your account??</p>
        <div className='delete__exit' onClick={handleOpenDeleteCancel}>X</div>
        <button className='delete-user__btn' onClick={handleOpenDeleteAccept}>Accept</button>
        <button className='delete-user__btn' onClick={handleOpenDeleteCancel}>Cancel</button>
      </article>
    </div>
  )
}

export default UserDelete

import { useForm } from 'react-hook-form'
import useCrud from '../../hooks/useCrud'
import './styles/FormReserve.css'

const FormReserve = ({ hotel }) => {

  const { register, handleSubmit, reset } = useForm()

  const [,, createReserver ] = useCrud()

  const submit = data => {
    const url = `https://hotels-api.academlo.tech/bookings`
    const sendObj = {
      "checkIn": data.checkIn,
      "checkOut": data.checkOut,
      "hotelId": Number(hotel?.id)
    }
    createReserver(url, sendObj)
  }

  return (
    <section className='reserve__container'>
      <h3 className='reserve__title'>Do you want to reserve this hotel?</h3>
      <form className='reserve__form' onSubmit={handleSubmit(submit)}>
        <div className='container__fechas'>
          <label className='reserve__label'>
            <span className='reserve__span'>Check-in</span>
            <input className='reserve__input' {...register('checkIn')} type="date" />
          </label>
          <label className='reserve__label'>
            <span className='reserve__span'>Check-out</span>
            <input className='reserve__input' {...register('checkOut')} type="date" />
          </label>
        </div>
        <div className='container__btn-reserve'>
          <button className='reserve__btn'>Submit</button>
        </div>
      </form>
    </section>
  )
}

export default FormReserve
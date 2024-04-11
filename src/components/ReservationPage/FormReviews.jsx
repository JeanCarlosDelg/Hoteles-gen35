import React from 'react'
import { useForm } from 'react-hook-form'
import useCrud from '../../hooks/useCrud'

const FormReviews = ({ reserveSelected }) => {

  const { handleSubmit, reset, register } = useForm()

  const [,,createReview] = useCrud()

  const submit = data => {
    const url = 'https://hotels-api.academlo.tech/reviews'
    const newObj= {
      rating: +data.rating,
      comment: data.comment,
      hotelId: reserveSelected?.hotel.id
    }
    createReview(url, newObj)
    reset = {
        rating: '',
        comment: ''
    }
  }

  return (
    <article>
      <h1>Reserve</h1>
      <header className=''>
        <img className='img__modal' src={reserveSelected?.hotel.images[0].url} alt="" />
      </header>
      <section className=''>
        <h3 className=''>{reserveSelected?.hotel.name}</h3>
        <div className=''>{reserveSelected?.hotel.city.name}, {reserveSelected?.hotel.city.country}</div>
      </section>
      <section className=''>
        <ul className=''>
          <li className=''>
            <span className=''>Reservation Days</span>
            <span className=''>{reserveSelected?.reservationsDays}</span>
          </li>
          <li className=''>
            <span className=''>subtotal Price</span>
            <span className=''>{reserveSelected?.subtotal}USD</span>
          </li>
        </ul>
      </section>
      <form onSubmit={handleSubmit(submit)} >
        <label>
          <span>Rating</span>
          <select {...register('rating')} >
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>
        </label>
        <label>
          <span>Comments</span>
          <textarea {...register('comment')} ></textarea>
        </label>
        <button>Submit</button>
      </form>
    </article>
  )
}

export default FormReviews
import { useEffect, useState } from "react"
import useCrud from "../hooks/useCrud"
import ReserveCard from "../components/ReservationPage/ReserveCard"
import './styles/ReservationsPage.css'
import NavarLogin from "../components/LoginPage/NavarLogin"
import FormReviews from "../components/ReservationPage/FormReviews"

const ReservationsPage = () => {

  const [reserveSelected, setReserveSelected] = useState()

  const [bookings, getBookings, , deleteBooking] = useCrud()

  useEffect(() => {
    const url = `https://hotels-api.academlo.tech/bookings`
    getBookings(url)
  }, [])

  return (
    <section className="reservationpage__container">
      {
        localStorage.getItem('token')
          ? <UserLoginAndLogaut />
          : <NavarLogin />
      }
      <FormReviews
        reserveSelected={reserveSelected}
      />
      <h2 className="reservationpage__title">Reservations</h2>
      <div className="reservationpage__cards">
        {
          bookings?.map(reserve => (
            <ReserveCard
              key={reserve.id}
              reserve={reserve}
              setReserveSelected={setReserveSelected}
              deleteBooking={deleteBooking}
            />
          ))
        }
      </div>
    </section>
  )
}

export default ReservationsPage
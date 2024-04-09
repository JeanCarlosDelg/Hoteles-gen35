import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import OtherHotels from '../components/HomePage/otherHotels/OtherHotels';
import Ubications from '../components/Mapa/Ubications';
import './styles/HotelsIdPage.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import NavarLogin from '../components/LoginPage/NavarLogin';
import Slider from '../components/Slider/Slider';
import UserLoginAndLogaut from '../components/LoginPage/UserLoginAndLogaut';

const HotelsIdPage = () => {

  const { id } = useParams()

  const url = `https://hotels-api.academlo.tech/hotels/${id}`
  const [hotel, getHotel] = useFetch(url)

  useEffect(() => {
    getHotel()
  }, [id])

  return (
    <div className='details'>
      {
        localStorage.getItem('token')
          ? <UserLoginAndLogaut />
          : <NavarLogin />
      }
      <div className='detail__header'>
        <h2 className='details__name'>{hotel?.name}</h2>
        <h4 className='details__rating'>
          {
            [... new Array(5)].map((star, index) => (
              index < Math.floor(hotel?.rating) ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />
            ))
          }
        </h4>
      </div>
      <div className='details__cont-aside'>
        <div className='details__cont'>
          <Slider
            hotel={hotel}
          />
        </div>
        <div className='details__cont'>
          {
            hotel &&
            <Ubications
              hotel={hotel}
            />
          }
        </div>
      </div>
      <section className='details__section'>
        <h3 className='details__name-descriptions'>{hotel?.city.name}, {hotel?.city.country}</h3>
        <p className='details__directions'>
          <i className='bx bx-map'></i>
          <span>{hotel?.address}</span>
        </p>
        <p className='details__description'>
          {hotel?.description}
        </p>
      </section>
      <div>
        <OtherHotels
          hotel={hotel}
        />
      </div>

      {/* <div className="flex">
        <div className="caja"> caja 1</div>
        <div className="caja"> caja 2</div>
        <div className="caja"> caja 3</div>
        <div className="caja"> caja 4</div>
        <div className="caja"> caja 5</div>
        <div className="caja"> caja 6</div>
        <div className="caja"> caja 7</div>
        <div className="caja"> caja 8</div>
        <div className="caja"> caja 9</div>
        <div className="caja"> caja 10</div>
      </div> */}
    </div>
  )
}

export default HotelsIdPage
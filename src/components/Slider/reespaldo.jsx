import React, { useEffect, useRef, useState } from 'react'
import './styles/Slider.css'

const Slider = ({ hotel }) => {

  const listRef = useRef()

  const [currentIndexImg, setCurrentIndexImg] = useState(0)

  useEffect(() => {
    const listNode = listRef.current
    const imgNode = listNode.querySelectorAll('li > img')[currentIndexImg]

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [currentIndexImg])

  const scrollToImg = (direction) => {
    if (direction === 'prev') {
      setCurrentIndexImg(curr => {
        const isFirstSlide = currentIndexImg === 0
        return isFirstSlide ? 0 : curr - 1
      })
    } else {
      const isLastSlide = currentIndexImg === hotel?.images.length - 1
      if (!isLastSlide) {
        setCurrentIndexImg( curr => curr + 1)
      }
    }
  }


  console.log(hotel)

  return (
    <div className='slider__container'>
      <div className='slider__sub-container'>
        <div onClick={() => scrollToImg('prev')} className="leftArrow">
          <i className='bx bxs-chevron-left'></i>
        </div>
        <div onClick={() => scrollToImg('next')} className="rightArrow">
          <i className='bx bxs-chevron-right'></i>
        </div>
        <div className="container__imgs">
          <ul ref={listRef}>
            {
              hotel?.images.map(itemImg => (
                <li key={itemImg.id}>
                  <img src={itemImg.url} width={500} height={280} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Slider
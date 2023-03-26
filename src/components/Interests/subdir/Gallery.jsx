import { useState } from 'react'

import {ImCross} from "react-icons/im"
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai"
import {RiMapPin2Fill} from "react-icons/ri"

import './Gallery.css'

const WSPGallery = ({galleryImages}) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  return (
    <div>

      {openModal && 
        <div className='sliderWrap'>
          

          <ImCross className='btnClose' onClick={handleCloseModal} />
          <AiOutlineArrowRight className='btnNext' onClick={nextSlide} />
          <AiOutlineArrowLeft className='btnPrev' onClick={prevSlide} />
          
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].src} alt='' />        
          </div>
        
        <span className='bottom-bar'> <RiMapPin2Fill /> {galleryImages[slideNumber].title}</span>
        </div>
      }

      {/* <br />
      Current slide number:  {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /><br /> */}

      <div className='galleryWrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img src={slide.src} alt='' />
              </div>
            )
          })
        }
      </div>
      <div style={{ height: '40px' }}></div>
    </div>
  )
}

export default WSPGallery
import React,{useState} from 'react'

import './hotel.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/MailList/MailList'
import Footer from '../../components/Footer/Footer'

const Hotel = () => {

  const [sliderNumber, setSliderNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const photos = [
    { src : "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    { src : "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    { src : "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    { src : "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    { src : "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    { src : "https://images.pexels.com/photos/26139/pexels-photo-26139.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
  ]

  const handlePreview = (i) =>{
    setSliderNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) =>{
    let newSlideNumber;
    if(direction === "left"){
      newSlideNumber = sliderNumber ===0 ? 5 : sliderNumber-1
    }else{
      newSlideNumber = sliderNumber ===5 ? 0 : sliderNumber+1
    }
    setSliderNumber(newSlideNumber)
  }
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {
          open && 
          <div className="slider">
            <FontAwesomeIcon 
               onClick={()=> setOpen(false)}
               icon={faCircleXmark} 
               className="close"/>
            <FontAwesomeIcon
               onClick={()=> handleMove('left')}  
               icon={faCircleArrowLeft} 
               className="arrow"/>
                <div className="sliderWrapper">
                    <img className="sliderImg" src={photos[sliderNumber].src} alt="sliderImg" />
                </div>
            <FontAwesomeIcon
               onClick={()=> handleMove('right')}  
              icon={faCircleArrowRight} 
              className="arrow"/>
          </div>
        }
        <div className="hotelWrapper">
          <button className="bookNowBtn">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Skylark Garden</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Bank More , Dhanbad</span>
            <span className="hotelDistance">500 meter from Railway Station</span>
            <span className="hotelPriceHighLight">
              Book a night and enjoy free taxi service
            </span>

            <div className="hotelImages">
                {
                  photos.map((p,i)=>(
                    <div className="hotelImgWrapper">
                      <img src={p.src} 
                      onClick={()=>handlePreview(i)}
                      className="hotelImg"
                      alt="hotelimg" />
                    </div>
                  ))
                }
            </div>

            <div className="hotelDetails">
               <div className="hotelDetailsTexts">
                 <h1 className="hotelTitle">Stay in the heart of Coal mines</h1>
                 <p className="hotelDesc">
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque officiis non, nam soluta repellendus cum expedita eaque numquam. Voluptas numquam nobis cumque corrupti 
                   nam perferendis, natus a perspiciatis maiores earum?
                 </p>
               </div>
               <div className="hotelDetailPrice">
                 <h1>Perfect for 2-3 night/day</h1>
                 <span>Located in the center of Djanbad, just some distance from Railway station</span>
                 <h2>
                   <b>Rs 5600</b> (10 nights)
                 </h2>
                 <button>Reserve or Book now</button>
               </div>
            </div>
          </div>
        </div>
          
        
      </div>
           <MailList/>
           <Footer/>
    </div>
  )
}

export default Hotel
import React from 'react'

import hotel7 from '../../images/hotel7.jpg'
import hotel8 from '../../images/hotel8.jpg'
import hotel9 from '../../images/hotel9.jpg'
import hotel10 from '../../images/hotel10.jpg'
import './featuredProperty.css'

const FeaturedProperty = () => {
  return (
    <div className='fp'>
        <div className='fpItem'>

            <img className='fpImg' src={hotel7} alt="hotel" />
            <span className="fpName">Skylark</span>
            <span className="fpPlace">Bank More, Dhanbad</span>
            <span className="fpPrice">Starting from Rs 499</span>

            <div className="fpRatings">
                <button>7.5</button>
                <span>Good</span>
            </div>

        </div>

        <div className='fpItem'>
            <img className='fpImg' src={hotel8} alt="hotel" />
            <span className="fpName">Park Avenue</span>
            <span className="fpPlace">Ranchi</span>
            <span className="fpPrice">Starting from Rs 899</span>

            <div className="fpRatings">
                <button>8.5</button>
                <span>Exellent</span>
            </div>

        </div>
        <div className='fpItem'>
            <img className='fpImg' src={hotel9} alt="hotel" />
            <span className="fpName">Palace Garden</span>
            <span className="fpPlace">Hazaribagh</span>
            <span className="fpPrice">Starting from Rs 599</span>

            <div className="fpRatings">
                <button>7.5</button>
                <span>Exellent</span>
            </div>

        </div>
        <div className='fpItem'>
            <img className='fpImg' src={hotel10} alt="hotel" />
            <span className="fpName">Nilkanth Palace</span>
            <span className="fpPlace">Jamshedpur</span>
            <span className="fpPrice">Starting from Rs 699</span>

            <div className="fpRatings">
                <button>6.5</button>
                <span>Average</span>
            </div>

        </div>
    </div>
  )
}

export default FeaturedProperty
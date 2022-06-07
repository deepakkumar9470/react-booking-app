import React from 'react'
import './propertyList.css'
import hotel1 from '../../images/hotel1.jpg'
import hotel2 from '../../images/hotel2.jpg'
import hotel3 from '../../images/hotel3.jpg'
import hotel4 from '../../images/hotel4.jpg'
import hotel5 from '../../images/hotel5.jpg'
import hotel6 from '../../images/hotel6.jpg'


const PropertyList = () => {

  return (
    <div className='plist'>
        <div className="plistItem">
            <img className='plistImg' src={hotel1} alt="hotel1" />
            <div className="plistTitles">
                <h1>Dhanbad</h1>
                <h2>120 hotels</h2>
            </div>
        </div>
        <div className="plistItem">
            <img className='plistImg' src={hotel2} alt="hotel1" />
            <div className="plistTitles">
                <h1>Ranchi</h1>
                <h2>150 hotels</h2>
            </div>
        </div>
        <div className="plistItem">
            <img className='plistImg' src={hotel3} alt="hotel1" />
            <div className="plistTitles">
                <h1>Bokaro</h1>
                <h2>110 hotels</h2>
            </div>
        </div>
        <div className="plistItem">
            <img className='plistImg' src={hotel4} alt="hotel1" />
            <div className="plistTitles">
                <h1>Hazaribagh</h1>
                <h2>90 hotels</h2>
            </div>
        </div>
        <div className="plistItem">
            <img className='plistImg' src={hotel5} alt="hotel1" />
            <div className="plistTitles">
                <h1>Jamshedpur</h1>
                <h2>200 hotels</h2>
            </div>
        </div>
        <div className="plistItem">
            <img className='plistImg' src={hotel6} alt="hotel1" />
            <div className="plistTitles">
                <h1>Daltonganj</h1>
                <h2>50 hotels</h2>
            </div>
        </div>

    </div>
  )
}

export default PropertyList
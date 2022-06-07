import React from 'react'

import './searchItem.css'

import hotel11 from '../../images/hotel11.jpg'
import hotel12 from '../../images/hotel12.jpg'
import hotel13 from '../../images/hotel13.jpg'


const SearchItem = () => {
  return (
    <div className="searchItem">
        <img className="siImg" src={hotel12} alt="hotel" />

        <div className="siDesc">
            <h1 className="siTitle">Tower Street apartment</h1>
            <span className="siDistance">500m from bankmore</span>
            <span className="siTaxiOp">Free airport taxi</span>
    <span className="siSubTitle">Studio apartment with air conditioning</span>
    <span className="siFeatures">Entire Studio 1 bathroom  21m² 1 full bed</span>
    <span className="siCancelOp">Free cancelation</span>
    <span className="siCancelOpSubtitle">You can cancel later, so lock in this price today!</span>

        </div>

        <div className="siDetails">
            <div className="siRatings">
                <span>Excelent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailsTexts">
                <span className="siPrice">Rs 3500/-</span>
                <div className="siDetailTaxiOp">Includes taxes and fees</div>
                <button className="siCheckBtn">See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem
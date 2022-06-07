import React from 'react'

import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <h1>Save time , save money!</h1>
        <span>Sign up and we will send notifications</span>

        <div className="mailInputContainer">
            <input type="text" placeholder='Your Email'/>
            <button>Subscribe</button>
        </div>

    </div>
  )
}



export default MailList
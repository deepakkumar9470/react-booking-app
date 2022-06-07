import React from 'react'

import Featured from '../../components/Featured/Featured'
import FeaturedProperty from '../../components/FeaturedProperty/FeaturedProperty'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MailList from '../../components/MailList/MailList'
import Navbar from '../../components/Navbar/Navbar'
import PropertyList from '../../components/PropertyList/PropertyList'

import './home.css'
const Home = () => {

  
  return (
    <div>
       <Navbar/>
       <Header/>

       <div className="homeContainer">
          <Featured/>
          <h1 className='homeTitle'>Browse by property types</h1>
          <PropertyList/>
          <h1 className='homeTitle'>Home guests love</h1>
          <FeaturedProperty/>
          <MailList/>
          <Footer/>
       </div>
    </div>
  )
}

export default Home
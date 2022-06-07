import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import './list.css'
import {useLocation} from 'react-router-dom'
import { DateRange } from 'react-date-range';
import {format} from 'date-fns'
import SearchItem from '../../components/SearchItem/SearchItem'

const List = () => {

  const location  = useLocation()
  const [date,setDate] = useState(location.state.state)
  const [destination,setDestination] = useState(location.state.destination)
  const [option,setOption] = useState(location.state.option)
  const [openDate, setOpenDate] = useState(false)

  console.log(location)
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
       <div className="listContainer">
         <div className="listWrapper">
           <div className="listSearch">
             <h1 className="lsTitle">Search</h1>
             <div className="lsItem">
               <label htmlFor="search">Destination</label>
               <input placeholder={destination} type="text"/>
             </div>

             <div className="lsItem">
               <label htmlFor="check">Check-in Date</label>
               <span onClick={()=>setOpenDate(!openDate)} >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span> 
               {
             openDate && 
             (<DateRange
             onChange={item => setDate([item.selection])}
             minDate={new Date()}
             ranges={date}
             
           />)}
             </div>
              
              <div className="lsItem">
                <label htmlFor="option">Options</label>
                <div className="lsOptions">

                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input type="text" className="lsOptionInput"/>
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input type="text" className="lsOptionInput"/>
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Adult
                    </span>
                    <input min={1} type="text" className="lsOptionInput" placeholder={option.adult}/>
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Children
                    </span>
                    <input min={0} type="text" className="lsOptionInput" placeholder={option.children}/>
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Room <small>per night</small>
                    </span>
                    <input min={1} type="text" className="lsOptionInput" placeholder={option.room}/>
                  </div>

                </div>
              </div>

           <button>Search</button>
           </div>

           <div className="listResults">
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>

           </div>
         </div>
       </div>
    </div>
  )
}

export default List
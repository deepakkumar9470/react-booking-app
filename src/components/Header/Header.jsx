
import { faBed, faCar, faPlane, faTaxi ,faCalendar, faPerson} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState} from 'react'
import { DateRange } from 'react-date-range';

import {format}  from 'date-fns'
import './header.css'
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
  const [openDate,setOpenDate] = useState(false)
  const [destination, setDestination] = useState('')
  const navigate = useNavigate()

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openoption, setOpenOption] = useState(false)
  const [option ,setOption] = useState({
    adult: 1,
    children : 0,
    room : 1
  })

const handleOption = (name,operation)=>{
     setOption((prev)=>{
       return {
         ...prev, [name] : operation === 'i' ? option[name] + 1 : option[name]-1,
       }
     })
}

const handleSearch =() =>{
  navigate('/hotel', {state : {destination, state,option}})
}
  return (
    <div className='header'>
      <div className={type === "list"? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
           <div className="headerListItem active">
           <FontAwesomeIcon icon={faBed} />
           <span>Stays</span>
           </div>
           <div className="headerListItem">
           <FontAwesomeIcon icon={faPlane} />
           <span>Plane</span>
           </div>
           <div className="headerListItem">
           <FontAwesomeIcon icon={faCar} />
           <span>Car rental</span>
           </div>
           <div className="headerListItem">
           <FontAwesomeIcon icon={faBed} />
           <span>Attractions</span>
           </div>
           <div className="headerListItem">
           <FontAwesomeIcon icon={faTaxi} />
           <span>Airport Taxi</span>
           </div>
           
        </div>

    {type !== "list" && 
    <>
        <h1 className="headerTitle">A life of the day</h1>
        <p className="headerDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, placeat.</p>
        <button className="headerBtn">Sig In / Register</button>
       
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon"/>
            <input type="text"
                    onChange={(e)=>setDestination(e.target.value)} 
                   className="headerSearchInput" 
                   placeholder="Where are you going?"/>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendar} className="headerIcon"/>
            <span onClick={()=>setOpenDate(!openDate)} 
              className='headerSearchText'>{`${format(state[0].startDate, "MM/dd/yyyy")} to ${format(state[0].endDate, "MM/dd/yyyy")}`}</span>
           {
             openDate && 
             <DateRange
             editableDateInputs={true}
             onChange={item => setState([item.selection])}
             moveRangeOnFirstSelection={false}
             ranges={state}
             className="date"
           />
           }
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
           <span 
              onClick={()=>setOpenOption(!openoption)}
              className='headerSearchText'>{`${option.adult} adult . 
              ${option.children} children . ${option.room} room`}</span>
              {
                openoption && 
                <div className="options">
                <div className="optionItems">
                  <span className='optionsText'>Adult</span>
                  <div className="optionCounter">

                  <button
                      disabled={option.adult <= 1} 
                      onClick={()=>handleOption('adult', 'd')} 
                      className="optionCounterBtn">-</button>
                  <span className='optionCounterNumber'>{option.adult}</span>
                  <button onClick={()=>handleOption('adult', 'i')} className="optionCounterBtn">+</button>
                  </div>
                </div>
                <div className="optionItems">
                  <span className='optionsText'>Children</span>
                  <div className="optionCounter">

                  <button 
                      disabled={option.children <= 1}
                     onClick={()=>handleOption('children', 'd')} 
                    className="optionCounterBtn">-</button>
                  <span className='optionCounterNumber'>{option.children}</span>
                  <button onClick={()=>handleOption('children', 'i')} className="optionCounterBtn">+</button>
                  </div>
                </div>
                <div className="optionItems">
                  <span className='optionsText'>Room</span>
                  <div className="optionCounter">

                  <button 
                      disabled={option.room <= 1}
                     onClick={()=>handleOption('room', 'd')} 
                     className="optionCounterBtn">-</button>
                  <span className='optionCounterNumber'>{option.room}</span>
                  <button onClick={()=>handleOption('room', 'i')} className="optionCounterBtn">+</button>
                  </div>
                </div>
              </div>
              }
          </div>
          <div className="headerSearchItem">
             <button onClick={handleSearch} className="headerBtn">Search</button>
          </div>
        </div>
    </>}

      </div>

    </div>
  )
}

export default Header
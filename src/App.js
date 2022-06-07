import React from 'react'
import './App.css';

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import List from './pages/List/List';
import Hotel from './pages/Hotels/Hotel';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
function App() {


  return (
    <BrowserRouter>
   
       <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/hotel' element={<List/>}/>
           <Route path='/hotel/:id' element={<Hotel/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;

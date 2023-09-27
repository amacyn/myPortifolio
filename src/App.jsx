import React, { useState } from 'react';
import Home from './Home';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';
import Experiences from './Pages/Experiences/Experiences';
import Services from './Pages/Services/Services';
import Works from './Pages/Works/Works';
import './Index.css';
import './App.css'
import { Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <div> 
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='About' element={<About/>}/>
       <Route path='Services' element={<Services/>}/>
       <Route path='Experiences' element={<Experiences/>}/>
       <Route path='Works' element={<Works/>}/>
       <Route path='Contacts' element={<Contacts/>}/>
     </Routes>
    </div>
  )
} 

export default App;


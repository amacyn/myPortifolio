import React, { useState } from 'react';
import Home from './Home';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';
import Experiences from './Pages/Experiences/Experiences';
import Services from './Pages/Services/Services';
import Works from './Pages/Works/Works';
import './Index.css';
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

// const App = () => {

//   //  const [PageManager,SetPageManager] = useState({
//   //     Home: true,
//   //     About: false,
//   //     Contacts: false,
//   //     Experience: false,
//   //     Services: false,
//   //     Works: false
//   //  })
  
//     return (
//       <div>

//         {/* {PageManager.Home &&<Home PageManager={PageManager} SetPageManager={SetPageManager}/>}
//         {PageManager.About &&<About />}
//         {PageManager.Contacts &&<Contacts />}
//         {PageManager.Experience &&<Experience />}
//         {PageManager.Services &&<Services />}
//         {PageManager.Works &&<Works />} */}
//       </div>
//     )
//   } 
  
//   export default App;


// import React from 'react'
// import useCounter from './counter/useCounter'

// export default function App() {
//   const {count, Increment, Decrement} = useCounter(5)
//   return (
//     <div>
//       <p>count:{count}</p> 
//       <div>
//         <button onClick={Increment}>Increment</button>
//         <button onClick={Decrement}>Decrement</button>
//       </div>
//     </div>
//   )
// }

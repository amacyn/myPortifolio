import React from 'react';
import Header from './Componets/Left/Header/Header';
import Text from './Componets/Left/Body/Text';
import Button from './Componets/Left/Body/Button/Button';
import Footer from './Componets/Left/Footer/Footer';
import Images from './Componets/Right/Secondhalf/Image';
import './Index.css';
import '/src/App.css';
import '/src/media.css'

export default function Home() {
  
  return (
   <div className='grid'>
      <div className='home_section home_section_media'> 
        <Header/>
        <Text/>
        <Button/>
        <Footer/>
      </div>
     <Images/>
   </div>
  )
}

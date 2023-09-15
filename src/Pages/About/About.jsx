import React from 'react'
import Dropdown from '../../Componets/Right/Secondhalf/Dropdown'
import '/Users/Amarachi/portifolio/src/Index.css';
import Header from '../../Componets/Left/Header/Header';
import Breadcrum from './Breadcrum';
import FirstSec from './FirstSec';
import Footer from '../../Componets/Left/Footer/Footer';
import Skills from './Skills';
import Testimonials from './Testimonials';

export default function About() {
  return (
    <>
      <section className='section'>
        <Header />
        <Dropdown />
        <Breadcrum />
        <FirstSec />
        <Skills/>
        <Testimonials/>
      </section>
    </>
  )
}



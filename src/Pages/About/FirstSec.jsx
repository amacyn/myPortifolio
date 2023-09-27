import React from 'react'

function FirstSec() {
  return (
    <div className='container'>
      <section className='firsthalf'>
        <div className='firsthalf_content'>
         <h2 className='span'>5,000</h2>
         <p>Happy Clients</p>
        </div>
        <div className='firsthalf_content'>
         <h2 className='span'>1,200</h2>
         <p>Projects Done</p>
        </div>
        <div className='firsthalf_content'>
         <h2 className='span'>500</h2>
         <p>Cups of hot chocolate</p>
        </div>
        <div className='firsthalf_content'>
         <h2 className='span'>587</h2>
         <p>Working Hours</p>
        </div>
      </section>
      <section className='secondhalf'>
          <span className='span abt'>ABOUT ME</span>
            <h2>A Web Developer Based in Nigeria</h2>
            <p className='p'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='br'>
              <div className='first'>
                <h4 className='h5'>Name: <span className='span'>Amarachi Metu</span></h4>
                <h4 className='h5'>Date of birth: <span className='span'>Octorber 23, 2005</span></h4>
                <h4 className='h5'>Address: <span className='span'>San Francisco CA 97987 USA</span></h4>
              </div>
              <div className='second'>
                <h4 className='h5'>Zip code: <span className='span'>1000</span></h4>
                <h4 className='h5'>Email: <span className='span'>metuamarachi43@gmail.com</span></h4>
                <h4 className='h5'>Phone: <span className='span'>+234-810-611-4696</span></h4>
              </div>
            </div>
            <div>
              <button className='btn'>DOWNLOAD CV</button>
            </div>
      </section>
    </div>
  )
}

export default FirstSec

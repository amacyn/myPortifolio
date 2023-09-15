import React from 'react'
import Header from './Componets/Left/Header/Header';
import Text from './Componets/Left/Body/Text';
import Button from './Componets/Left/Body/Button/Button';
import Footer from './Componets/Left/Footer/Footer';
import Dropdown from './Componets/Right/Secondhalf/Dropdown';
import Images from './Componets/Right/Secondhalf/Image';
import './Index.css';

export default function Home({PageManager,SetPageManager}) {
    const listItem = ['Home', 'About', 'Services', 'Experiences', 'Works', 'Blog', 'Contact'];
  
  return (
    <div className='grid'>
      <div className='section'>
         <div className='section1'>
            <Header listItem={listItem}/>
            <Text/>
            <Button/>
            <Footer/>
         </div>
      </div>
      <div className='div'>
        <Dropdown/>
        <Images/>
      </div>
    </div>
  )
}


// import React from 'react'
// import Header from './Componets/Left/Header/Header';
// import Text from './Componets/Left/Body/Text';
// import Button from './Componets/Left/Body/Button/Button';
// import Footer from './Componets/Left/Footer/Footer';
// import Dropdown from './Componets/Right/Secondhalf/Dropdown';
// import Images from './Componets/Right/Secondhalf/Image';
// import './Index.css';

// export default function Home({PageManager,SetPageManager}) {
//     const listItem = ['Home', 'About', 'Services', 'Experiences', 'Works', 'Blog', 'Contact'];
//     // const listItems = ['Home', 'About', 'Services', 'Experiences', 'Works', 'Blog', 'Contact'];
  
//   return (
//     <div className='grid'>
//       <section className='section'>
//         <Header listItem={listItem}/>
//         <Text/>
//         <Button/>
//         <Footer/>
//       </section>
//       <div className='div'>
//         <Dropdown/>
//       {/* <Dropdown PageManager={PageManager} SetPageManager={SetPageManager}/> */}
//       {/* <Dropdown listItems={listItems} PageManager={PageManager} SetPageManager={SetPageManager} /> */}
//         <Images/>
//       </div>
//     </div>
//   )
// }

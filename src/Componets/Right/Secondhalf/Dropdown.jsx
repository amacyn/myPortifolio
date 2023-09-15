
import React, { useState } from 'react';
import '/Users/Amarachi/portifolio/src/Index.css';
import { Link } from 'react-router-dom';

const Dropdown = ({ title, listItems, PageManager, SetPageManager }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="dropdown">
      <section className="dropdown-header" onClick={toggleDropdown}>
        <span className="dropdown-title">{title}</span>
        <span className="dropdown-icon">
          {isOpen ? (
            <span className="close-icon">×</span>
          ) : (
            <span className="menu-icon">&#9776;</span>
          )}
        </span>
      </section>
      {isOpen && (
        <div className="dropdown-content">
         <ul>
            <li><Link className='li' to='/'>Home</Link></li>
            <li><Link className='li' to='/About'>About</Link></li>
            <li><Link className='li' to='/Services'>Services</Link></li>
            <li><Link className='li' to='/Experiences'>Experiences</Link></li>
            <li><Link className='li' to='/Works'>Works</Link></li>
            <li><Link className='li' to='/Contacts'>Contacts</Link></li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Dropdown;


// import React, { useState } from 'react';
// import '/Users/Amarachi/portifolio/src/Index.css';
// import { Link } from 'react-router-dom';

// const Dropdown = ({ title, listItems, PageManager, SetPageManager }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <section className="dropdown">
//       <section className="dropdown-header" onClick={toggleDropdown}>
//         <span className="dropdown-title">{title}</span>
//         <span className="dropdown-icon">
//           {isOpen ? (
//             <span className="close-icon">×</span>
//           ) : (
//             <span className="menu-icon">&#9776;</span>
//           )}
//         </span>
//       </section>
//       {isOpen && (
//         <div className="dropdown-content">
//          <ul>
//             <li><Link to='/'>Home</Link></li>
//             <li><Link to='/About'>About</Link></li>
//             <li><Link to='/Services'>Services</Link></li>
//             <li><Link to='/Experiences'>Experiences</Link></li>
//             <li><Link to='/Works'>Works</Link></li>
//             <li><Link to='/Contacts'>Contacts</Link></li>
//           </ul>

//           {/* <ul>
//             <li>Home</li>
//             <li onClick={() =>{
//               SetPageManager({...PageManager, About:true , Home:false})
//             }}>About</li>
//             <li>Services</li>
//             <li>Experiences</li>
//             <li>Works</li>
//             <li>Blog</li>
//             <li>Contact</li>
//           </ul> */}
//           {/* <ul>
//             {listItems.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul> */}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Dropdown;

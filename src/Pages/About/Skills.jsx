import React from 'react'
import '../.././App.css'

const Skills = () => {
  return (
    <div className='breadcrum abt margin'>
      <span className='span'>SKILLS</span>
      <h2>My Skills</h2>
      <div className='progress_row'>
        <div><p style={{display:'flex',justifyContent:'space-between'}}>HTML5 <span className='span'> 80% </span></p> <div className='progress'><div className='progress_percent'></div></div></div>
        <div><p style={{display:'flex',justifyContent:'space-between'}}>CSS <span className='span'> 80% </span> </p><div className='progress'><div className='progress_percent'></div></div></div>
        <div><p style={{display:'flex',justifyContent:'space-between'}}>JAVASCRIPT <span className='span'> 80% </span></p> <div className='progress'><div className='progress_percent'></div></div></div>
        <div><p style={{display:'flex',justifyContent:'space-between'}}>REACT <span className='span'> 80% </span></p> <div className='progress'><div className='progress_percent'></div></div></div>
        <div><p style={{display:'flex',justifyContent:'space-between'}}>TYPESCRIPT <span className='span'> 80% </span> </p><div className='progress'><div className='progress_percent'></div></div></div>
        <div><p style={{display:'flex',justifyContent:'space-between'}}>C++ <span className='span'> 80% </span> </p><div className='progress'><div className='progress_percent'></div></div></div>
      </div>
    </div>
  )
}

export default Skills

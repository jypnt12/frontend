import React, { useEffect, useState } from 'react'
import landingImage from '../assets/images/sample.jpg'



const Home = () => {

  const [mode, setMode] = useState('light');
  
  
  return (
    <div>
      <div className='img-container'>
        <img src={landingImage} alt="logo" />
      </div>
      <div className='container'>
        <div className="wrapper">

          <div>
            <h1 className='header'>Welcome to <strong>School name</strong></h1>
          </div>

          {/* <div className="image2"></div> */}

          <div className="group-row">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>

          </div>
        </div>
      </div>

     
    </div>
  )
} 

export default Home
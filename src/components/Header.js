import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const user = JSON.parse(localStorage.getItem('user_details'))
    const navigate = useNavigate();

  const joinClass= ()=>{
    console.log('first')
    navigate("/b/add-class")
  }

  const viewProfile = ()=>{
    navigate("/b/profile")
    console.log(user)
  }
  return (
    <div className='header-topnav'>
        <h1>Student Portal</h1>

        <div className='inline-container'>

            <button className='add-button tooltip' onClick={joinClass}><AddIcon/> <span className="tooltiptext">Join a class</span></button>

            <button className='btn-link' onClick={viewProfile}><AccountCircleIcon/><strong>{user.username}</strong></button>

          
        </div>

  

    </div>
  )
}

export default Header
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
    const user = JSON.parse(localStorage.getItem('user_details'))
    console.log(user)
  return (
    <div className='header-topnav'>
        <h1>Student Portal</h1>

        <div className='inline-container'>

            <button className='add-button tooltip' ><AddIcon/> <span class="tooltiptext">Join a class</span></button>
          
          <p>Welcome {user.firstname} </p>
        </div>

  

    </div>
  )
}

export default Header
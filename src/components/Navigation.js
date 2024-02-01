import React from 'react'
import {Link} from 'react-router-dom'
const Navigation = () => {
  return (
    <nav className='topnav'>
            <ul>
                <li> <Link to='/'> School Name </Link></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/admission'>Admission</Link></li>
                <li><Link to='/academics'>Academics</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
 
    </nav>
  )
}

export default Navigation
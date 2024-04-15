import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import GridViewIcon from '@mui/icons-material/GridView';
import GradingIcon from '@mui/icons-material/Grading';
import ChatIcon from '@mui/icons-material/Chat';
import CampaignIcon from '@mui/icons-material/Campaign';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidenav = () => {

  

  return (

      <div className='sidenav'   >
          <div className='inline-container'>
            <h2 ><span>Main menu</span> </h2>
          </div>
            <ul>
                <li><NavLink to='/b/dashboard' ><DashboardIcon/><span >Dashboard</span> </NavLink></li>
                <li><NavLink to='/b/classroom'  ><GroupsIcon/><span >Classroom</span></NavLink></li>
                <li><NavLink to='/b/syllabus'><LibraryBooksIcon/><span  >Syllabus</span></NavLink></li>
                <li><NavLink to='/b/schedule'><WatchLaterIcon/><span >Schedule</span></NavLink></li>
                <li><NavLink to='/b/results'><GradingIcon/><span >Results</span></NavLink></li>
                <li><NavLink to='/b/messages'><ChatIcon/><span >Chats</span></NavLink></li>
                <li><NavLink to='/b/announcements'><CampaignIcon/><span >Announcements</span></NavLink></li>
                <li><NavLink to='/b/settings'><SettingsIcon/><span >Settings</span></NavLink></li>

            </ul>
            <button ><LogoutIcon/> <span >Logout</span></button>
        </div>


  )
}

export default Sidenav
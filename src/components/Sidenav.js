import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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

  const [isSidenavOpen, setIsSidenavOpen] = useState(true)

  const toggleSideNav = ()=>{
    setIsSidenavOpen(!isSidenavOpen);
  }

  return (

      <div className='sidenav'   >
          <div className='inline-container'>
            <h2 ><span>Main menu</span> </h2>
          </div>
            <ul>
                <li><Link to='/dashboard'><DashboardIcon/><span >Dashboard</span> </Link></li>
                <li><Link to='/dashboard/classroom'><GroupsIcon/><span >Classroom</span></Link></li>
                <li><Link to='/dashboard/syllabus'><LibraryBooksIcon/><span  >Syllabus</span></Link></li>
                <li><Link to='/dashboard/schedule'><WatchLaterIcon/><span >Schedule</span></Link></li>
                <li><Link to='/dashboard/results'><GradingIcon/><span >Results</span></Link></li>
                <li><Link to='/dashboard/messages'><ChatIcon/><span >Chats</span></Link></li>
                <li><Link to='/dashboard/announcements'><CampaignIcon/><span >Announcements</span></Link></li>
                <li><Link to='/dashboard/settings'><SettingsIcon/><span >Settings</span></Link></li>

            </ul>
            <button ><LogoutIcon/> <span >Logout</span></button>
        </div>


  )
}

export default Sidenav
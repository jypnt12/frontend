import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidenav from '../../components/Sidenav';
import Header from '../../components/Header';
import Widgets from '../../components/Widgets';


const Dashboard = () => {
  return (
    <div>
        
        {/* <Outlet/> */}
        <div>

        <div className="dashboard">
            <div className='top'>
              <Header/>
            </div>
            <nav className='left'>
              <Sidenav/>
            </nav>
          <div >
            <Outlet/>
          </div>
            
        </div>
    </div>
    </div>
  )
}

export default Dashboard






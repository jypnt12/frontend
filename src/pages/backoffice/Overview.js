import React from 'react'
import profileImage from '../../assets/images/profile.png'
import UpcomingExams from '../../components/UpcomingExams';
import Leaderboard from '../../components/Leaderboard';
import Announcement from '../../components/Announcement';
import SchoolCalendar from '../../components/SchoolCalendar';
import Widgets from '../../components/Widgets';

const Overview = () => {
  return (
    <div className='layout'>
        <section className="widgets">
            <Widgets/>
        </section>
        <main className='content'>
              <div class="current-class">
                <h2>Current Class</h2>
                <div class="class-details">
                  <div >
                    <img src={profileImage} alt="Profile" className='faculty-img'/>
                  </div>
                  <div class="class-info">
                    <h3>Mathematics</h3>
                    <p>Teacher: John Doe</p>
                    <p>Time: 9:00 AM - 10:30 AM</p>
                    <p>Location: Room 101</p>
                  </div>
                  <div class="class-actions">
                    <button className='primary-button'>Join Class</button>
                    <button className='primary-button'>View Details</button>
                  </div>
                </div>
              </div>


            </main>

            <article className="upcoming">
              <UpcomingExams/>
            </article>
            <article className="statistics">
              <Leaderboard/>
            </article>
            <article className="announcement">
              <Announcement/>
            </article>
            <div className='calendar'>
              <SchoolCalendar/>
            </div>
    </div>
  )
}

export default Overview
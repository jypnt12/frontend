import React from 'react'

const UpcomingExams = () => {
  return (
    <div>
        <h2>Upcoming Exams</h2>

            <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Subject</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2024-02-20</td>
                    <td>Mathematics</td>
                    <td>9:00 AM - 11:00 AM</td>
                </tr>
                <tr>
                    <td>2024-03-05</td>
                    <td>Science</td>
                    <td>10:00 AM - 12:00 PM</td>
                </tr>
            </tbody>
            </table>
        </div>
  )
}

export default UpcomingExams
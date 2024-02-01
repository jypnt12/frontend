import React from 'react'

const Schedule = () => {
  return (
    <div>
      <h1>Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Time</th>
            <th>Day</th>
            <th>Instructor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mathematics</td>
            <td>8:00 - 9:00</td>
            <td>Monday</td>
            <td>Mr. Balonzo</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Schedule
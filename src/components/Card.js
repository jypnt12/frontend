import React from 'react'

const Card = ({subject, onClick}) => {
    // console.log(subject)
  return (
    <div class="card" onClick={onClick}>
            <div class="card-header">
                <img src={subject.image} alt="Image" />
            </div>
            <div class="card-body">
                <h2>{subject.name}</h2>
                <p>{subject.description}</p>
                <p>{subject.instructor}</p>
                <p>{subject.schedule.time}</p>
            </div>
            <div class="card-footer">
            </div>
        </div>
  )
}

export default Card


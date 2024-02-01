import React, { useState } from 'react'
import Image from '../../assets/images/sample.jpg'
import Card from '../../components/Card'
const subjects = [
  {
  name: "Mathematics",
  description: "Mathematics is the study of numbers, quantities, and shapes. It includes topics such as arithmetic, algebra, geometry, and calculus.",
  instructor: "Dr. Smith",
  image: Image,
  schedule: {
    days: ["Monday", "Wednesday", "Friday"],
    time: "9:00 AM - 10:30 AM",
    location: "Room 101",
  }
},
{
  name: "English",
  description: "Mathematics is the study of numbers, quantities, and shapes. It includes topics such as arithmetic, algebra, geometry, and calculus.",
  instructor: "Dr. Smith",
  image: Image,
  schedule: {
    days: ["Monday", "Wednesday", "Friday"],
    time: "9:00 AM - 10:30 AM",
    location: "Room 101",
  }
},
{
  name: "Science",
  description: "Mathematics is the study of numbers, quantities, and shapes. It includes topics such as arithmetic, algebra, geometry, and calculus.",
  instructor: "Dr. Smith",
  image: Image,
  schedule: {
    days: ["Monday", "Wednesday", "Friday"],
    time: "9:00 AM - 10:30 AM",
    location: "Room 101",
  }
},
{
  name: "Filipino",
  description: "Mathematics is the study of numbers, quantities, and shapes. It includes topics such as arithmetic, algebra, geometry, and calculus.",
  instructor: "Dr. Smith",
  image: Image,
  schedule: {
    days: ["Monday", "Wednesday", "Friday"],
    time: "9:00 AM - 10:30 AM",
    location: "Room 101",
  }
},
{
  name: "Literature",
  description: "Mathematics is the study of numbers, quantities, and shapes. It includes topics such as arithmetic, algebra, geometry, and calculus.",
  instructor: "Dr. Smith",
  image: Image,
  schedule: {
    days: ["Monday", "Wednesday", "Friday"],
    time: "9:00 AM - 10:30 AM",
    location: "Room 101",
  }
},
];
const Classroom = () => {

    const handleClick = (subject) =>{
      console.log('clicked')
      console.log(subject.name)
    }


  return (
    <div  >
        <div className='inline-container'>
          <h1>Classes</h1>
          {/* <button className='primary-button'>Join class</button> */}
        </div>
        <div className='flex-wrap'>

        {subjects.map(subject => (
            <Card
            key={subject.name} 
            subject={subject}
            onClick={()=>{handleClick(subject)}}
            />
            ))}
        

            </div>
    </div>
  )
}

export default Classroom
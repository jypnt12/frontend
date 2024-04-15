import React, { useEffect, useState } from 'react'
import Image from '../../assets/images/sample.jpg'
import Card from '../../components/Card'
import { Link, useNavigate } from 'react-router-dom';
const subjects = [
  {
  name: "Mathematics",
  description: "Mathematics is the study of numbers, quantities, and shapes. It includes topics such as arithmetic, algebra, geometry, and calculus.",
  instructor: "Dr. Smith",
  image: Image,

},
{
  name: "English",
  description: "Mathematics is the study of numbers, quantities, and shapes. It includes topics such as arithmetic, algebra, geometry, and calculus.",
  instructor: "Dr. Smith",
  image: Image,

},
{
  name: "Science",
  description: "Mathematics is the study of numbers, quantities, and shapes. It includes topics such as arithmetic, algebra, geometry, and calculus.",
  instructor: "Dr. Smith",
  image: Image,

},
{
  name: "Filipino",
  description: "Mathematics is the study of numbers, quantities, and shapes. It includes topics such as arithmetic, algebra, geometry, and calculus.",
  instructor: "Dr. Smith",
  image: Image,
 
},
{
  name: "Literature",
  description: "Mathematics is the study of numbers, quantities, and shapes. It includes topics such as arithmetic, algebra, geometry, and calculus.",
  instructor: "Dr. Smith",
  image: Image,
  
},
];
const Classroom = () => {
  const navigate = useNavigate();

  const handleClick = (subject) =>{
    navigate(`/b/classroom/${subject.id}`)
    
    }

    useEffect(()=>{
      const fetchClass = async ()=> {
        const response = await fetch(`http://localhost:3001/api/classes/`  )
        const json = await response.json()
  
        if(response.ok){
          //store the data to students state in useReducer
          
          console.log('found', json)
        
        }
      }
      fetchClass();
    }, [])

  return (
    <div  >
      
        <div className='inline-container'>
          <h1>Classes</h1>
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
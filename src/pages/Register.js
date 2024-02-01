import React, { useState } from 'react'
import { useStudentsContext } from '../hooks/useStudentsContext'

const Register = () => {

    const {dispatch} = useStudentsContext();

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [course, setCourse] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)


    const submitHandler = async(e)=>{
      e.preventDefault()
      
      const student = {firstname, lastname, email, mobile, course, password}

      const response = await fetch('http://localhost:3001/api/students/register', {
        method: 'POST',
        body: JSON.stringify(student),
        headers: {
            'Content-Type':'application/json'
        }
      })

      const json = await response.json()

      if(!response.ok){
        setError(json.error)
      }
      if(response.ok){
        setFirstname('')
        setLastname('')
        setEmail('')
        setCourse('')
        setMobile('')
        setPassword('')
        setError(null)
        console.log("new student created", json)
        dispatch({type: 'CREATE_STUDENT', payload:json})
      }

    }


  return (
    <div  className='form-wrapper' onSubmit={submitHandler}>

        <h2>Register</h2>

        <form action="POST">
            
            <label htmlFor="firstname">Firstname </label>
            <input type="text" name='firstname' placeholder='Firstname' value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>
        
            <label htmlFor="lastname">Lastname </label>
            <input type="text" name='lastname' placeholder='Lastname' value={lastname} onChange={(e)=>{setLastname(e.target.value)}}/>

            <label htmlFor="email">Email </label>
            <input type="text" name='email' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        
            <label htmlFor="mobile">Mobile </label>
            <input type="mobile" name='mobile' placeholder='Mobile' value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>

            <label htmlFor="course">Course </label>
            <input type="text" name='course' placeholder='Course' value={course} onChange={(e)=>{setCourse(e.target.value)}}/>

            <label htmlFor="password">Password </label>
            <input type="password" name='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

            
            <button className='primary-button'>Submit</button>

            {error && <div className='error'>{error}</div>}
        </form>
    </div>
  )
}

export default Register
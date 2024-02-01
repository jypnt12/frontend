import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const [error, setError] = useState(null)

    const submitHandler = async(e)=>{
      e.preventDefault()
      const user = {email, password}
      try {
                
        const response = await fetch('http://localhost:3001/api/students/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type':'application/json'
        }
      })


        if (!response.ok) {
          throw new Error('Login failed');
        }
        const json = await response.json();
        // Store user data in local storage
        localStorage.setItem('user_details', JSON.stringify(json));
        console.log(json)
        // Redirect to dashboard
        navigate("/dashboard")
    } catch (error) {
      setError(error.message);
    }
      // setEmail(email)
      // setPassword(password)
      // setError(null)
    }

  return (
    <div  className='form-wrapper' onSubmit={submitHandler}>
      <h2>Login</h2>
      <form action="POST">
          
        <label htmlFor="email">Email </label>
        <input type="text" name='email' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    
        <label htmlFor="password">Password </label>
        <input type="password" name='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

        
        <button className='primary-button'>Submit</button>
        <a><Link to='/register'>Register</Link></a>
        
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  )
}

export default Login
import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h1>Not found</h1>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  )
}

export default ErrorPage
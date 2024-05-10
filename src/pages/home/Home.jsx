import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1 className='header'>This is my Home Page</h1>
      <div className='pages-links'>
        <Link to = "/profile"><h2>Go to the Profile Page</h2></Link>
        <Link to = "/service"><h2>Go to the Service Page</h2></Link>
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div>
        <h2>ShareFrame</h2>
      </div>
      
      <ul>
        <li>
          <Link to="/">Feed</Link>
        </li>
        <li>
          <Link to="/create-post">Create Post</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
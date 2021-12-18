import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
      <div className="nav__wrapper">
      <Link to="/home"><button>publisher buttons</button></Link><Link to="/news"><button>news</button></Link>
      </div>
    </nav>
  )
}

export default Nav

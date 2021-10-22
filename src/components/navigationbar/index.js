import React from 'react';
import { Link } from 'react-router-dom'
import './index.css';
function Navigationbar() {
  return (
    <div >
      <nav>
        <ul className="navigation-bar">
          <li><Link to='/'>Dashboard</Link></li>
          <li><Link to='/employees'>Employees</Link></li>
          <li><Link to='/clients'>Clients</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/tasks'>Tasks</Link></li>
          <li><Link to='/calls'>Calls</Link></li>
          <li><Link to='/contacts'>Contacts</Link></li>
          <li><Link to='/settings'>Settings</Link></li>

        </ul>
      </nav>
    </div >

  )
}
export default Navigationbar
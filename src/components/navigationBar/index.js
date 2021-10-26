import React from 'react';
import * as CONSTANT from '../../constants/navigationBarConstants'
import { Link } from 'react-router-dom'
import './index.css';
function Navigationbar() {
  return (
    <div>
      <ul className={CONSTANT.NAVIGATIONBAR_CLASS}>
        <li><Link to={CONSTANT.URL_TO_ROOT} className={CONSTANT.LINK_CLASS}>Dashboard</Link></li>
        <li><Link to={CONSTANT.URL_TO_EMPLOYEES} className={CONSTANT.LINK_CLASS} > Employees</Link></li>
        <li><Link to={CONSTANT.URL_TO_CLIENTS} className={CONSTANT.LINK_CLASS}>Clients</Link></li>
        <li><Link to={CONSTANT.URL_TO_PROJECTS} className={CONSTANT.LINK_CLASS}>Projects</Link></li>
        <li><Link to={CONSTANT.URL_TO_TASKS} className={CONSTANT.LINK_CLASS}>Tasks</Link></li>
        <li><Link to={CONSTANT.URL_TO_CALLS} className={CONSTANT.LINK_CLASS}>Calls</Link></li>
        <li><Link to={CONSTANT.URL_TO_CONTACTS} className={CONSTANT.LINK_CLASS}>Contacts</Link></li>
        <li><Link to={CONSTANT.URL_TO_SETTINGS} className={CONSTANT.LINK_CLASS}>Settings</Link></li>

      </ul>
    </div >

  )
}
export default Navigationbar
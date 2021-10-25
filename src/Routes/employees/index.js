import React from 'react'
import * as CONSTANTS from '../../constants/employeeconstants'
import './styleemp.css'
function Employees() {
  return (
    <div className={CONSTANTS.EMPLOYEE_HEADER_CLASS}>
      <div className={CONSTANTS.EMPLOYEE_SUBHEADER_CLASS}>
        <div className={CONSTANTS.EMPLOYEE_BLOCK}>
          <p className={CONSTANTS.EMPLOYEE_FONT}>Employees</p>
        </div>
        <ul>
          <li className={CONSTANTS.LI_CLASS}>
            <span className={CONSTANTS.MAIN_DETAILS}>Name</span>
            <span className={CONSTANTS.MAIN_DETAILS}>Employees ID</span>
            <span className={CONSTANTS.MAIN_DETAILS}>Email ID</span>
            <span className={CONSTANTS.MAIN_DETAILS}>Mobile</span>
            <span className={CONSTANTS.MAIN_DETAILS}>Joining Date</span>
            <span className={CONSTANTS.MAIN_DETAILS}>Role</span>
            <span className={CONSTANTS.MAIN_DETAILS}>Action</span>
          </li >
        </ul>
      </div>
    </div >
  )
}
export default Employees

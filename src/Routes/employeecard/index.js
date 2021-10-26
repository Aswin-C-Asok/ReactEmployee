import React from 'react'
import * as CONSTANTS from '../../constants/employeeConstants';
import './style.css'
import EMPLOYEE_IMG from '../../img/profile-image.png'
function Employeecard(props) {
  return (
    <li class={CONSTANTS.EMPLOYEE_LI_CLASS}>
      <div class={CONSTANTS.EMPLOYEE_BLOCK_CLASS}>
        <div class={CONSTANTS.PROFILE_BLOCK_CLASS}>
          <span>
            <img src={EMPLOYEE_IMG} alt={CONSTANTS.PROFILE_IMAGE_ALT_TEXT} className={CONSTANTS.PROFILE_IMAGE_CLASS} />
          </span>
          <div class={CONSTANTS.PROFILE_BLOCK_TEXT}>
            <h3>{props.employee.name}</h3>
            <p>{props.employee.role}</p>
          </div>
        </div>
      </div>
      <div class={CONSTANTS.EMPLOYEE_DETAILS_ITEMS}>{props.employee.employee_id}</div>
      <div class={CONSTANTS.MAIL_ID_ITEMS}>{props.employee.email}</div>
      <div class={CONSTANTS.EMPLOYEE_DETAILS_ITEMS}>{props.employee.mobile}</div>
      <div class={CONSTANTS.EMPLOYEE_DETAILS_ITEMS}>{props.employee.joining_date}</div>
      <div class={CONSTANTS.EMPLOYEE_DETAILS_ITEMS}>{props.employee.role}</div>
      <div className={CONSTANTS.MENU}></div>
    </li>
  )
}
export default Employeecard

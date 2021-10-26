import { useState } from 'react'
import * as CONSTANTS from '../../constants/employeeConstants'
import './styleemp.css'
import Pagination from "../../components/pagination";
import Employeecard from '../employeecard'
import data from '../../employeeData/employeeData.json';

function Employees() {
  const [pageLimit] = useState(7);
  const [employee, setEmployee] = useState(data.slice(0, pageLimit));
  const [employeeCount] = useState(data.length);

  function pagination(start, end) {
    setEmployee(data.slice(start, end));
  };
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
          {employee.map((employee, index) => (
            <Employeecard key={index} index={index} employee={employee} />
          ))}
        </ul>
      </div>
      <Pagination paginationList={pagination} employeeCount={employeeCount} pageLimit={pageLimit} />
    </div >
  )
}
export default Employees

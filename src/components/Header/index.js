import React from 'react';
import './index.css';
import logo from '../../img/mail-logo.png'
import profile from '../../img/profile-image.png'
import {
  MAIN_HEADER_CLASS,
  COMPANY_LOGO_ALT,
  COMPANY_LOGO_CLASS,
  USER_LOGIN_CLASS,
  USER_LOGO_ALT,
  USER_IMAGE_CLASS,
  LOGIN_FONT_CLASS

} from '../../constants/headerConstants'
function Header() {
  return (
    <div className={MAIN_HEADER_CLASS}>
      <div >
        <img src={logo} alt={COMPANY_LOGO_ALT} className={COMPANY_LOGO_CLASS} />
      </div>
      <div className={USER_LOGIN_CLASS}>
        <img src={profile} alt={USER_LOGO_ALT} className={USER_IMAGE_CLASS} />
        <p className={LOGIN_FONT_CLASS}>Logout</p>
      </div>
    </div>
  )
}
export default Header;
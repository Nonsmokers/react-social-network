import React from 'react';
import s from './Header.module.css'

import logo from './logo.svg';
import page from './administrator.png'
import message from './mail.png'
import music from './earphones.png'
import world from './world.png'

const Header = () =>{
  return(
  <header className={s.wrapper}>
    <div className={s.logo}>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    <nav className={s.nav_wrapper}>
      <ul className={s.nav_list}>
        <li className={s.nav_item}>
          <img className={s.nav_icon} src={page} alt='icon'></img>
        </li>
        <li className={s.nav_item}>
          <img className={s.nav_icon} src={message} alt='icon'></img>
        </li>
        <li className={s.nav_item}>
          <img className={s.nav_icon} src={music} alt='icon'></img>
        </li>
        <li className={s.nav_item}>
          <img className={s.nav_icon} src={world} alt='icon'></img>
        </li>
      </ul>
    </nav>
  </header>
  )
}
export default Header;
import React from 'react';
import logo from '../logo.svg';
import page from '../administrator.png'
import message from '../mail.png'
import music from '../earphones.png'
import world from '../world.png'

const Header = () =>{
  return(
  <header className="header_wrapper">
    <div className="header_logo">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    <nav className="header_nav_wrapper">
      <ul className="header_nav_list">
        <li className="header_nav_item">
          <img className='header_nav_icon' src={page}></img>
        </li>
        <li className="header_nav_item">
          <img className='header_nav_icon' src={message}></img>
        </li>
        <li className="header_nav_item">
          <img className='header_nav_icon' src={music}></img>
        </li>
        <li className="header_nav_item">
          <img className='header_nav_icon' src={world}></img>
        </li>
      </ul>
    </nav>
    <nav className='header_nav_list_text_wraper'>
      <ul className='header_nav_list_text'>
        <li className='header_nav_list_text_item'>News</li>
        <li className='header_nav_list_text_item'>Friends</li>
        <li className='header_nav_list_text_item'>Photos</li>
        <li className='header_nav_list_text_item'>Events</li>
      </ul>
    </nav>
  </header>
  )
}
export default Header;
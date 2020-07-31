import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';


const Navbar = () =>{
  return (
    <section className={s.navbar_wraper}>
      <nav className={s.wraper}>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink to='/Profile' activeClassName={s.active}>Profile </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to='/Dialogs' activeClassName={s.active}>Dialogs</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
            </li>
          <li className={s.item}>
            <NavLink to=''>Followers</NavLink>
            </li>
          <li className={s.item}>
            <NavLink to=''>Photos</NavLink>
            </li>
          <li className={s.item}>
            <NavLink to=''>Events</NavLink>
            </li>
        </ul>
      </nav>
    </section>
  )
}
export default Navbar;
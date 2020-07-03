import React from 'react';
import s from './Header.module.css'
import logo from '../../assets/img/logo.svg';
import page from '../../assets/img/administrator.png'
import message from '../../assets/img/mail.png'
import music from '../../assets/img/earphones.png'
import world from '../../assets/img/world.png'
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header className={s.wrapper}>
            <div className={s.logo}>
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <nav className={s.nav_wrapper}>
                <ul className={s.nav_list}>
                    <li className={s.nav_item}>
                        <NavLink to='/Users' activeClassName={s.active}>
                            <img className={s.nav_icon} src={page} alt='icon_users'></img>
                        </NavLink>
                    </li>
                    <li className={s.nav_item}>
                        <img className={s.nav_icon} src={message} alt='icon_message'></img>
                    </li>
                    <li className={s.nav_item}>
                        <img className={s.nav_icon} src={music} alt='icon_music'></img>
                    </li>
                    <li className={s.nav_item}>
                        <img className={s.nav_icon} src={world} alt='icon_world'></img>
                    </li>
                </ul>
            </nav>
            <div className={s.login_wrapper}>
                <NavLink to={'/login'} >Login</NavLink>
            </div>
        </header>
    )
}
export default Header;
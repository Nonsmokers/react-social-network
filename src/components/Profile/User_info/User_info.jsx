import React from 'react';
import s from './User_info.module.css'
import user_icon from '../../../assets/img/user-icon.png';

const User_info = () =>{
  return(
        <div className={s.user}>
    <div className={s.user_icon}>
        <img src={user_icon} alt='user'/>
    </div>
    <div className={s.user_info}>
      <ul className={s.user_info_list}>
        <li className={s.user_info_item}><h1>Dmitry I.I.</h1></li>
        <li className={s.user_info_item}>Date of Birth: 2 april</li>
        <li className={s.user_info_item}>City: Minsk</li>
        <li className={s.user_info_item}>Education: BNTU 20'</li>
        <li className={s.user_info_item}>Web-site: http://it-kamasutra.com</li>
      </ul>
    </div>
    </div>
  )
}
export default User_info;
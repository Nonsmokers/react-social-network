import React from 'react';
import s from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import user_icon from '../../../assets/img/user-icon.png';

const Dialog_Item = (props)=>{
  return (
    <div className={s.item}>
      <img src={user_icon} alt='user'/>
      <NavLink to={'/Dialogs/'+ props.id} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  )
}

export default Dialog_Item;
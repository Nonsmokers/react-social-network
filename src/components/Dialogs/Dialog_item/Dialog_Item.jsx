import React from 'react';
import s from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialog_Item = (props)=>{
  return (
    <div className={s.item}>
      <img src='https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png' alt='user'/>
      <NavLink to={'/Dialogs/'+ props.id} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  )
}

export default Dialog_Item;
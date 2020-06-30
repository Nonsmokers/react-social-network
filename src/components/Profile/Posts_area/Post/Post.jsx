import React from 'react';
import s from './Post.module.css'
import user_icon from '../../../../assets/img/user-icon.png';

const Post = (props) =>{
  return(
    <div className={s.item}>
      <div className={s.user}>
        <img src={user_icon}></img>
      </div>
      <div className={s.message_block}>
        <p>{props.message}</p>
      </div>
  </div>
  )
}
export default Post;
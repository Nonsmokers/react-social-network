import React from 'react';
import s from './Post.module.css'

const Post = (props) =>{
  return(
    <div className={s.item}>
      <div className={s.user}>
        <img src='https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png'></img>
      </div>
      <div className={s.massage_block}>
        <p>{props.massage}</p>
      </div>
  </div>
  )
}
export default Post;
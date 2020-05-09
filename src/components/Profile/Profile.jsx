import React from 'react';
import s from './Profile.module.css'
import Post from './Post/Post';
import User_info from './User_info/User_info'


const Profile = () =>{
  return(
    <section className={s.wrapper}>
      <User_info />
      <div className={s.item_wrapper}>
        <div className={s.item}>
          <h1 className={s.item_tittle}>My posts</h1>
          <div className={s.item_input}>
            <input className={s.item_area} autofocus type="text" aria-label="Enter a new post" placeholder="Write your post here..." />
            <button className={s.item_button} type="submit">+</button>
          </div>
        </div>
        <Post massage="React components it's perfect."/>
        <Post massage="Hello world!"/>
        <Post massage="Hey friend, it's my first project."/>
      </div>
  </section>
  )
}
export default Profile;
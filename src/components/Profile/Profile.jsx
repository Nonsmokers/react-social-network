/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import s from './Profile.module.css'
import User_info from './User_info/User_info'
import Posts_area from './Posts_area/Posts_area';

const Profile = (props) => {

  return (
    <section className={s.wrapper}>
      <User_info />
      <Posts_area
        posts={props.profile_page.posts}
        new_post={props.profile_page.new_post}
        dispatch={props.dispatch} />
    </section>
  )
}

export default Profile;
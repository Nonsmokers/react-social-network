/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import s from './Profile.module.css'
import User_info from './User_info/User_info'
import Posts_area_container from './Posts_area/Post_area_container';

const Profile = (props) => {
  return (
    <section className={s.wrapper}>
      <User_info />
      <Posts_area_container store={props.store} />
    </section>
  )
}

export default Profile;
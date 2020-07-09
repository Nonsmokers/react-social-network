import React from 'react';
import s from './Profile.module.css'
import Profile_info from './Profile_info/Profile_info'
import Posts_area_container from './Posts_area/Post_area_container';

const Profile = (props) => {
    return (
        <section className={s.wrapper}>
            <Profile_info profile={props.profile}/>
            <Posts_area_container store={props.store}/>
        </section>
    )
}

export default Profile;
import React from 'react';
import s from './Users.module.css'
import user_icon from '../../assets/img/user-icon.png';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import * as axios from "axios";

const Users = (props) => {

    let page_count = Math.ceil(props.total_users_count / props.page_size);

    let pages = [];
    for (let i = 1; i <= page_count; i++) {
        pages.push(i)
    }

    return <>
        <div className={s.users_page}>
            <div>
                {pages.map(p => {
                    return <span className={props.current_page === p && s.active_page}
                                 onClick={() => {
                                     props.change_page(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile' + u.id}>
                                <img className={s.user_photo} src={u.photos.small != null ? u.photos.small : user_icon}
                                     alt="user_photo"/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ?
                                <Button disabled={props.following_in_progress.some(id => id === u.id)} onClick={() => {
                                    props.toggle_following_in_progress(true, u.id);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "3c39d918-4ac3-451c-8bf8-6101894221da"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                                props.toggle_following_in_progress(false, u.id);
                                            }
                                        })
                                }}> unfollow </Button>

                                :
                                <Button disabled={props.following_in_progress.some(id => id === u.id)} onClick={() => {
                                    props.toggle_following_in_progress(true, u.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "3c39d918-4ac3-451c-8bf8-6101894221da"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                                props.toggle_following_in_progress(false, u.id);
                                            }
                                        })
                                }}> follow</Button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    </>
}

export default Users;
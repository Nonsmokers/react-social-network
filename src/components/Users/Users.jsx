import React from 'react';
import s from './Users.module.css'
import user_icon from '../../assets/img/user-icon.png';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

const Users = (props) => {

    let page_count = Math.ceil(props.total_item_count / props.page_size);

    let pages = [];
    for (let i = 1; i <= page_count; i++) {
        pages.push(i)
    }

    let handlePageChange=(current_page) => {
        console.log(`active page is ${current_page}`);
        this.setState({activePage: current_page});
    }

    return <>
        <div className={s.users_page}>
            {<div>
                {pages.map(p => {
                    return <span className={props.current_page === p && s.active_page}
                                 onClick={() => {
                                     props.change_page(p)
                                 }}>{p}</span>
                })}
            </div>}
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile' + u.id}>
                            <img className={s.user_photo}
                                 src={u.photos.small != null ? u.photos.small : user_icon}
                                 alt="user_photo"/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <Button disabled={props.following_in_progress.some(id => id === u.id)}
                                    color="primary"
                                    variant="contained"
                                    onClick={() => {
                                        props.unfollow(u.id)
                                    }}> unfollow </Button>
                            : <Button disabled={props.following_in_progress.some(id => id === u.id)}
                                      color="primary"
                                      variant="contained"
                                      onClick={() => {
                                          props.follow(u.id)
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
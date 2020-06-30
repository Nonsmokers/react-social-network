import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios';
import user_icon from '../../assets/img/user-icon.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.current_page}
        &count=${this.props.page_size}`)
            .then(response => {
                this.props.set_users(response.data.items)
                this.props.set_total_users_count(response.data.totalCount)
            })
    }

    change_page = (page_number) => {
        this.props.set_current_page(page_number)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page_number}&count=${this.props.page_size}`)
            .then(response => {
                this.props.set_users(response.data.items)
            })
    }

    render() {

        let page_count = Math.ceil(this.props.total_users_count / this.props.page_size);

        let pages = [];
        for (let i = 1; i <= page_count; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.current_page === p && s.active_page} onClick={(e) => {
                        this.change_page(p)
                    }}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.user_photo} src={u.photos.small != null ? u.photos.small : user_icon}
                                 alt="user_photo"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}> unfollow </button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}> follow </button>
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
    }
}

export default Users;
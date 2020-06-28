import React from 'react';
import s from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.set_users(
            [
                { id: 1, followed: true, full_name: 'Alex', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
                { id: 2, followed: false, full_name: 'Andrew', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } },
                { id: 3, followed: true, full_name: 'Dmitry', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukraine' } },
            ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div >
                        <img className={s.user_photo} src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png" alt="user_photo" />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }} > unfollow </button>
                            : <button onClick={() => { props.follow(u.id) }} > follow </button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.full_name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>

}

export default Users;
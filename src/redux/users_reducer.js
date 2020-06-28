const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initial_state = {
    users: []
}

const users_reducer = (state = initial_state, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.user_id) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.user_id) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const follow_AC = (user_id) => ({ type: FOLLOW, user_id })
export const unfollow_AC = (user_id) => ({ type: UNFOLLOW, user_id })
export const set_users_AC = (users) => ({ type: SET_USERS, users })

export default users_reducer;
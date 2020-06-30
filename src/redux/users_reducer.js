const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initial_state = {
    users: [],
    page_size: 10,
    total_users_count: 100,
    current_page: 1
}

const users_reducer = (state = initial_state, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.user_id) {
                        return {...u, followed: true}
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
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, current_page: action.current_page}
        }
        case SET_TOTAL_USERS_COUNT : {
            return {...state, total_user_count: action.count}
        }

        default:
            return state;
    }
}

export const follow_AC = (user_id) => ({type: FOLLOW, user_id})
export const unfollow_AC = (user_id) => ({type: UNFOLLOW, user_id})
export const set_users_AC = (users) => ({type: SET_USERS, users})
export const set_current_page_AC = (current_page) => ({type: SET_CURRENT_PAGE, current_page})
export const set_total_users_count_AC = (total_user_count) => ({type: SET_TOTAL_USERS_COUNT, count: total_user_count})

export default users_reducer;
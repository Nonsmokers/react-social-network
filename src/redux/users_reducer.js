import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initial_state = {
    users: [],
    page_size: 20,
    total_users_count: 600,
    current_page: 1,
    is_fetching: true,
    following_in_progress: []
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
        case TOGGLE_IS_FETCHING : {
            return {...state, is_fetching: action.is_fetching}
        }
        case TOGGLE_IS_FOLLOWING : {
            return {
                ...state,
                following_in_progress: action.is_fetching
                    ? [...state.following_in_progress, action.id]
                    : state.following_in_progress.filter(id => id != action.id)
            }
        }

        default:
            return state;
    }
}

export const follow_success = (user_id) => ({type: FOLLOW, user_id})
export const unfollow_success = (user_id) => ({type: UNFOLLOW, user_id})
export const set_users = (users) => ({type: SET_USERS, users})
export const set_current_page = (current_page) => ({type: SET_CURRENT_PAGE, current_page})
export const set_total_users_count = (total_user_count) => ({type: SET_TOTAL_USERS_COUNT, count: total_user_count})
export const toggle_is_fetching = (is_fetching) => ({type: TOGGLE_IS_FETCHING, is_fetching})
export const toggle_following_in_progress = (is_fetching, id) => ({type: TOGGLE_IS_FOLLOWING, is_fetching, id})

export const request_users = (page, page_size) => {
    return async (dispatch) => {
        dispatch(toggle_is_fetching(true));
        dispatch(set_current_page(page));

        let data = await usersAPI.get_users(page, page_size)

        dispatch(toggle_is_fetching(false))
        dispatch(set_users(data.items))
        dispatch(set_total_users_count(data.totalCount))
    }
}

export const follow = (user_id) => {
    return async (dispatch) => {
        dispatch(toggle_following_in_progress(true, user_id));

        let response = await usersAPI.follow(user_id)
        if (response.data.resultCode === 0) {
            dispatch(follow_success(user_id));
        }
        dispatch(toggle_following_in_progress(false, user_id));
    }
}
export const unfollow = (user_id) => {
    return async (dispatch) => {
        dispatch(toggle_following_in_progress(true, user_id));

        let response = await usersAPI.unfollow(user_id)
        if (response.data.resultCode === 0) {
            dispatch(unfollow_success(user_id));
        }
        dispatch(toggle_following_in_progress(false, user_id));
    }
}

export default users_reducer;
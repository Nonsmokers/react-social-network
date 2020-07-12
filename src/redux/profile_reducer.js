import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initial_state = {
    posts: [
        {id: 0, message: 'React components its perfect.'},
        {id: 1, message: "Hello world!"},
        {id: 2, message: "Hey friend, it's my first project."},
    ],
    new_post: '',
    profile: null,
    status: '',
}

const profile_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_POST: {
            let new_post = {id: 5, message: action.new_post};
            return {...state, posts: [...state.posts, new_post]};
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const add_post_action_creator = (new_post) => {
    return {type: ADD_POST, new_post}
}
export const set_user_profile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}
export const set_status = (status) => {
    return {type: SET_STATUS, status}
}

export const get_user_profile = (user_id) => (dispatch) => {
    profileAPI.get_profile(user_id)
        .then(response => {
            dispatch(set_user_profile(response.data))
        })
}

export const get_status = (user_id) => (dispatch) => {
    profileAPI.get_status(user_id)
        .then(response => {
            dispatch(set_status(response.data))
        })
}

export const update_status = (status) => (dispatch) => {
    profileAPI.update_status(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(set_status(status))
            }
        })
}

export default profile_reducer;
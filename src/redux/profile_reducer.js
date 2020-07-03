const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initial_state = {
    posts: [
        {id: 0, message: 'React components its perfect.'},
        {id: 1, message: "Hello world!"},
        {id: 2, message: "Hey friend, it's my first project."},
    ],
    new_post: '',
    profile: null,
}

const profile_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_POST: {
            let new_post = {
                id: 5,
                message: state.new_post
            };
            return {...state, posts: [...state.posts, new_post], new_post: '',};
        }
        case UPDATE_POST: {
            return {...state, new_post: action.text};
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const add_post_action_creator = () => {
    return {type: ADD_POST}
}
export const update_post_action_creator = (new_text) => {
    return {type: UPDATE_POST, text: new_text}
}
export const set_user_profile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}

export default profile_reducer;
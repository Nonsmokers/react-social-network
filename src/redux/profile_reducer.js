const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';

let initial_state = {
    posts: [
        { id: 0, message: 'React components its perfect.' },
        { id: 1, message: "Hello world!" },
        { id: 2, message: "Hey friend, it's my first project." },
    ],
    new_post: ''
}

const profile_reducer = (state = initial_state, action) => {

    switch (action.type) {
        case ADD_POST: {
            let new_post = {
                id: 5,
                message: state.new_post
            };
            let state_copy = {
                ...state,
                posts: [...state.posts, new_post],
                new_post: '',
            };
            return state_copy;
        }
        case UPDATE_POST: {
            let state_copy = {
                ...state,
                new_post: action.text
            };
            return state_copy;
        }
        default:
            return state;
    }
}

export const add_post_action_creator = () => {
    return {
        type: ADD_POST,
    }
}
export const update_post_action_creator = (new_text) => {
    return {
        type: UPDATE_POST,
        text: new_text,
    }
}

export default profile_reducer;
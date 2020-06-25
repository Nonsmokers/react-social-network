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

            let copy_state = { ...state };
            copy_state.posts = [ ...state.posts ];
            copy_state.posts.push(new_post);
            copy_state.new_post = '';
            return copy_state;
        }
        case UPDATE_POST: {
            let copy_state = { ...state };
            copy_state.new_post = action.text;
            return copy_state;
        }
        default:
            return state;
    }
}

export const add_post_action_creator = () => {
    return {
        type: 'ADD_POST',
    }
}
export const update_post_action_creator = (new_text) => {
    return {
        type: 'UPDATE_POST',
        text: new_text,
    }
}

export default profile_reducer;
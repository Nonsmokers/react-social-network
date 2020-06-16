const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';

const profile_reducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let new_post = {
                id: 5,
                message: state.new_post
            };
            state.posts.push(new_post);
            state.new_post = '';
            return state;
        case UPDATE_POST:
            state.new_post = action.text;
            return state;
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
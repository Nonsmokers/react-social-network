const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const ADD_MESSAGE = 'ADD_MESSAGE';

let initial_state = {
    dialogs: [
        { id: 1, name: 'Ilona' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Andey' },
        { id: 4, name: 'Pete' },
        { id: 5, name: 'Nikoly' },
    ],
    messages: [
        { id: 0, message: 'Hi' },
        { id: 1, message: 'Hello, how are you?' },
        { id: 2, message: 'Whats going on?' },
    ],
    new_message_text: '',
};

const dialogs_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE:
            state.new_message_text = action.message_text;
            return state;
        case ADD_MESSAGE:
            let message_body = state.new_message_text;
            state.messages.push({ id: 3, message: message_body });
            state.new_message_text = '';
            return state;
        default:
            return state;
    }
}

export const add_message_action_creator = () => {
    return {
        type: 'ADD_MESSAGE',
    }
}
export const update_message_action_creator = (new_text) => {
    return {
        type: 'UPDATE_MESSAGE',
        message_text: new_text,
    }
}

export default dialogs_reducer;
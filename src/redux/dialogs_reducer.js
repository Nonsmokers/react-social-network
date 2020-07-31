const ADD_MESSAGE = 'ADD_MESSAGE';

let initial_state = {
    dialogs: [
        {id: 1, name: 'Ilona'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Andey'},
        {id: 4, name: 'Pete'},
        {id: 5, name: 'Nikoly'},
    ],
    messages: [
        {id: 0, message: 'Hi'},
        {id: 1, message: 'Hello, how are you?'},
        {id: 2, message: 'Whats going on?'},
    ]
};

const dialogs_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let message_body = action.new_message;
            return {
                ...state, messages: [...state.messages, {id: 3, message: message_body}]
            };
        }
        default:
            return state;
    }
}

export const add_message_action_creator = (new_message) => {
    return {
        type: 'ADD_MESSAGE',
        new_message
    }
}

export default dialogs_reducer;
import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import sidebar_reducer from "./sidebar_reducer";

let store = {
    _state: {
        profile_page: {
            posts: [
                { id: 0, message: 'React components its perfect.' },
                { id: 1, message: "Hello world!" },
                { id: 2, message: "Hey friend, it's my first project." },
            ],
            new_post: ''
        },
        dialogs_page: {
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
        },
        sidebar: {}
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._call_subscriber = observer;
    },

    add_message() {
        let messages = {
            id: 5,
            message: this._state.dialogs_page.messages
        };
        this._state.dialogs_page.messages.push(messages);
        this._state.dialogs_page.messages = '';
        this._call_subscriber(this._state);
    },

    dispatch(action) {

        this._state.profile_page = profile_reducer(this._state.profile_page, action);
        this._state.dialogs_page = dialogs_reducer(this._state.dialogs_page, action);
        this._state.sidebar = sidebar_reducer(this._state.sidebar, action);
        this._call_subscriber(this._state);
    }
}

export default store;
window.store = store;
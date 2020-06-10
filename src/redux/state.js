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
            ]
        }
    },
    _call_subscriber () {
        console.log('Сhange tree');
    },

    getState () {
        return this._state
    },
    subscribe (observer){
        this._call_subscriber = observer;
    },

    add_message () {
        let messages = {
            id: 5,
            message: this._state.dialogs_page.messages
        };
        this._state.dialogs_page.messages.push(messages);
        this._state.dialogs_page.messages = '';
        this._call_subscriber(this._state);
    },

    dispatch(action) {
        if (action.type === 'ADD_POST'){
            let new_post = {
                id: 5,
                message: this._state.profile_page.new_post
            };
            this._state.profile_page.posts.push(new_post);
            this._state.profile_page.new_post = '';
            this._call_subscriber(this._state);
        }else if (action.type === 'UPDATE_POST'){
            this._state.profile_page.new_post = action.text;
            this._call_subscriber(this._state);
        }

    }
}

export default store;
window.store = store;
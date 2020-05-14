import { render_entire_tree } from "../render";

let state = {
    profile_page: {
        posts: [
            { id: 0, message: 'React components its perfect.' },
            { id: 1, message: "Hello world!" },
            { id: 2, message: "Hey friend, it's my first project." },
        ]
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
}


export let add_post= (post_message)=>{
    let new_post = {
        id:5,
        message: post_message,
    };
    state.profile_page.posts.push(new_post);
    render_entire_tree(state);
};

export default state;
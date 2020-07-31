import profile_reducer, {add_post_action_creator} from "./profile_reducer";
import React from "react";

test('new post should be add', () => {
    //1.test data
    const action = add_post_action_creator('asdasd');
    const state = {
        posts: [
            {id: 0, message: 'React components its perfect.'},
            {id: 1, message: "Hello world!"},
            {id: 2, message: "Hey friend, it's my first project."},
        ]
    };
    //2.action
    const newState = profile_reducer(state, action);

    //3.expectation
    expect (newState.posts.length).toBe(4)

});
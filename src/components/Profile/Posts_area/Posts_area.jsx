import React from 'react';
import s from '../Profile.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const Post_area_form = (props) => {
    return <form onSubmit={props.handleSubmit}
                 className={s.item_input}>
        <Field component={'textarea'}
               name={'new_post'}
               className={s.item_area}
               placeholder="Write your post here..."/>
        <button className={s.item_button}>+</button>
    </form>
}

const Post_area_form_redux = reduxForm({
    form: 'Profile_posts',
})(Post_area_form)

const Posts_area = (props) => {
    let post_elements = props.posts.map(p => <Post message={p.message} id={p.id}/>)

    let add_new_post = (formData) => {
        props.add_post(formData.new_post);
    }

    return (
        <div className={s.item_wrapper}>
            <div className={s.item}>
                <h1 className={s.item_tittle}>My posts</h1>
                <Post_area_form_redux onSubmit={add_new_post}/>
            </div>
            {post_elements}
        </div>
    )
}

export default Posts_area;
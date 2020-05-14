import React from 'react';
import s from '../Profile.module.css'
import Post from './Post/Post';

const Posts_area = (props) => {

  let post_elements = props.posts.map(p => <Post message={p.message} id={p.id} />)

  let new_post_element = React.createRef();

  let add_post = () =>{
    let text = new_post_element.current.value;
    props.add_post(text);
  }

  return (
    <div className={s.item_wrapper}>
      <div className={s.item}>
        <h1 className={s.item_tittle}>My posts</h1>
        <div className={s.item_input}>
          <input ref={new_post_element} className={s.item_area} type="text" aria-label="Enter a new post" placeholder="Write your post here..." />
          <button onClick={add_post} className={s.item_button} type="submit">+</button>
        </div>
      </div>
      {post_elements}
    </div>
  )
}
export default Posts_area;
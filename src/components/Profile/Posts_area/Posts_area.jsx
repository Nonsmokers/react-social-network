import React from 'react';
import s from '../Profile.module.css'
import Post from './Post/Post';


const Posts_area = (props) => {
  let post_elements = props.posts.map(p => <Post message={p.message} id={p.id} />)
  let new_post_element = React.createRef();

  let on_add_post = () => {
    props.add_post();
  }

  let change_post = () => {
    let new_text = new_post_element.current.value;
    props.update_post(new_text);
  }

  return (
    <div className={s.item_wrapper}>
      <div className={s.item}>
        <h1 className={s.item_tittle}>My posts</h1>
        <div className={s.item_input}>
          <textarea onChange={change_post}
            ref={new_post_element}
            className={s.item_area}
            type="text"
            value={props.new_post}
            placeholder="Write your post here..." />
          <button onClick={on_add_post} className={s.item_button} type="submit">+</button>
        </div>
      </div>
      {post_elements}
    </div>
  )
}

export default Posts_area;
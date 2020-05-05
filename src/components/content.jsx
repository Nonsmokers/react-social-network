import React from 'react';
import User from './user';


const Content = () =>{
  return(
    <section className="content_wrapper">
    <User />
    <div className="content_item_wrapper">
      <div className="content_item">
      <h1 className="content_item_tittle">My posts</h1>
        <div className="content_item_input">
          <input className="content_item_area" autofocus type="text" aria-label="Enter a new post" placeholder="Write your post here..." />
          <button className="content_item_button" type="submit">+</button>
        </div>
      </div>
    </div>
  </section>
  )
}
export default Content;
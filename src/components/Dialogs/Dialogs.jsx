import React from 'react';
import s from './Dialogs.module.css';
import Dialog_Item from './Dialog_item/Dialog_Item'
import Message from './Message/Message'

const Dialogs = (props) => {

  let dialogs_elements = props.state.dialogs.map((d) => <Dialog_Item name={d.name} id={d.id} />)
  let messages_elements = props.state.messages.map((m) => <Message message={m.message} />)

  let new_message_element = React.createRef();

  let add_message = () =>{
    let text = new_message_element.current.value;
    console.log(text);
  }

  return (
    <div className={s.wrapper}>
      <div className={s.list}>
        {dialogs_elements}
      </div>
      <div className={s.message_block}>
        {messages_elements}
        <div className={s.item_input}>
          <textarea ref={new_message_element} className={s.item_area} type="textarea" type="text" rows="3" cols="35" placeholder="Write your message here..." />
          <button onClick={add_message} className={s.item_button} type="submit">+</button>
        </div>
      </div>
    </div>
  )
}
export default Dialogs;
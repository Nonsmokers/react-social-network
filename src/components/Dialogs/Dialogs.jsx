import React from 'react';
import s from './Dialogs.module.css';
import Dialog_Item from './Dialog_item/Dialog_Item'
import Message from './Message/Message'

const Dialogs = (props) => {

  let state = props.dialogs_page;

  let dialogs_elements = state.dialogs.map((d) => <Dialog_Item name={d.name} id={d.id} />)
  let messages_elements = state.messages.map((m) => <Message message={m.message} />)
  let new_message_text = state.new_message_text;

  let add_message = () => {
    props.send_message();
  }

  let change_message = (e) => {
    let new_text = e.target.value;
    props.update_message(new_text);
  }

  return (
    <div className={s.wrapper}>
      <div className={s.list}>
        {dialogs_elements}
      </div>
      <div className={s.message_block}>
        {messages_elements}
        <div className={s.item_input}>
          <textarea onChange={change_message}
            className={s.item_area}
            type="textarea"
            value={new_message_text}
            placeholder="Write your message here..." />
          <button onClick={add_message} className={s.item_button} type="submit">+</button>
        </div>
      </div>
    </div>
  )
}
export default Dialogs;
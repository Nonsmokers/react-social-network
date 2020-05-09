import React from 'react';
import s from './Dialogs.module.css';
import Dialog_Item from './Dialog_Item'


const Message = (props) =>{
  return(
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) =>{
return(
    <div className={s.wrapper}>
      <div className={s.list}>
        <Dialog_Item name='Ilona' id='1'/>
        <Dialog_Item name='Sasha' id='2'/>
        <Dialog_Item name='Andey' id='3'/>
        <Dialog_Item name='Pete' id='4'/>
        <Dialog_Item name='Nikoly' id='5'/>
      </div>
      <div className={s.message_block}>
        <Message message='Hi'/>
        <Message message='Hello, how are you?'/>
        <Message message='Whats going on?' />
      </div>
    </div>
  )
}
export default Dialogs;
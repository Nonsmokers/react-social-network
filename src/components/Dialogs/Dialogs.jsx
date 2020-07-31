import React from 'react';
import s from './Dialogs.module.css';
import Dialog_Item from './Dialog_item/Dialog_Item'
import Message from './Message/Message'
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {textarea_form} from "../common/Form_controls/Forms_controls";
import {max_length_creator, required} from "../../utils/validators/validators";

let max_length_200 = max_length_creator(200)

const Add_message_form = (props) => {
    return <form onSubmit={props.handleSubmit} className={s.item_input}>
        <Field component={textarea_form}
               validate={[required, max_length_200]}
               name={'new_message'}
               className={s.item_area}
               placeholder="Write your message here..."/>
        <button className={s.item_button}>+</button>
    </form>
}

const Dialogs_form_redux = reduxForm({
    form: 'Dialogs',
})(Add_message_form)


const Dialogs = (props) => {
    let state = props.dialogs_page;

    let dialogs_elements = state.dialogs.map((d) => <Dialog_Item name={d.name} key={d.id} id={d.id}/>)
    let messages_elements = state.messages.map((m) => <Message message={m.message} key={m.id}/>)

    let add_new_message = (formData) => {
        props.send_message(formData.new_message);
    }

    if (!props.is_auth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={s.wrapper}>
            <div className={s.list}>
                {dialogs_elements}
            </div>
            <div className={s.message_block}>
                {messages_elements}
                <Dialogs_form_redux onSubmit={add_new_message}/>
            </div>
        </div>
    )
}
export default Dialogs;


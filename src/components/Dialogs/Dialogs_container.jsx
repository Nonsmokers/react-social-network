import React from 'react';
import {update_message_action_creator, add_message_action_creator} from '../../redux/dialogs_reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {with_auth_redirect} from "../hoc/with_auth_redirect";

let mapStateToProps = (state) => {
    return {
        dialogs_page: state.dialogs_page,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        send_message: () => {
            dispatch(add_message_action_creator())
        },
        update_message: (new_text) => {
            dispatch(update_message_action_creator(new_text))
        }
    }
}

let auth_redirect_component = with_auth_redirect(Dialogs)

const Dialogs_container = connect(mapStateToProps, mapDispatchToProps)(auth_redirect_component);

export default Dialogs_container;
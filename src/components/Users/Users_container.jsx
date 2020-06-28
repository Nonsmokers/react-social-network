import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow_AC, unfollow_AC, set_users_AC } from '../../redux/users_reducer';

let mapStateToProps = (state) => {
    return {
        users: state.users_page.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (user_id) => {
            dispatch(follow_AC(user_id))
        },
        unfollow: (user_id) => {
            dispatch(unfollow_AC(user_id))
        },
        set_users: (users) => {
            dispatch(set_users_AC(users))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
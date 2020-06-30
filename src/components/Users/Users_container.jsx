import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
    follow_AC,
    unfollow_AC,
    set_users_AC,
    set_current_page_AC,
    set_total_users_count_AC
} from '../../redux/users_reducer';

let mapStateToProps = (state) => {
    return {
        users: state.users_page.users,
        page_size: state.users_page.page_size,
        total_users_count: state.users_page.total_users_count,
        current_page: state.users_page.current_page
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
        set_current_page: (page_number) => {
            dispatch(set_current_page_AC(page_number))
        },
        set_total_users_count: (totalCount) => {
            dispatch(set_total_users_count_AC(totalCount))
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
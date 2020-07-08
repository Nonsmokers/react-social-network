import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
    follow, unfollow, set_current_page, toggle_following_in_progress, get_users
} from '../../redux/users_reducer';
import CircularProgress from "@material-ui/core/CircularProgress";
import {with_auth_redirect} from "../hoc/with_auth_redirect";

class users_container extends React.Component {
    componentDidMount() {
        this.props.get_users(this.props.current_page, this.props.page_size)
    }

    change_page = (page_number) => {
        this.props.get_users(page_number, this.props.page_size)
    }

    render() {
        return <>
            {this.props.is_fetching ? <CircularProgress/> : null}
            <Users total_users_count={this.props.total_users_count}
                   page_size={this.props.page_size}
                   current_page={this.props.current_page}
                   change_page={this.change_page}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   following_in_progress={this.props.following_in_progress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.users_page.users,
        page_size: state.users_page.page_size,
        total_users_count: state.users_page.total_users_count,
        current_page: state.users_page.current_page,
        is_fetching: state.users_page.is_fetching,
        following_in_progress: state.users_page.following_in_progress
    }
}

let auth_redirect_component = with_auth_redirect(users_container)

export default connect(mapStateToProps, {
    follow, unfollow, set_current_page,
    toggle_following_in_progress, get_users
})(auth_redirect_component);


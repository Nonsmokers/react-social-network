import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
    follow,
    unfollow,
    set_users,
    set_current_page,
    set_total_users_count,
    toggle_is_fetching,
    toggle_following_in_progress
} from '../../redux/users_reducer';
import CircularProgress from "@material-ui/core/CircularProgress";
import {usersAPI} from "../../api/api";

class users_container_API extends React.Component {
    componentDidMount() {
        this.props.toggle_is_fetching(true);

        usersAPI.get_users(this.props.current_page, this.props.page_size).then(data => {
            this.props.toggle_is_fetching(false);
            this.props.set_users(data.items)
            this.props.set_total_users_count(data.totalCount)
        })
    }

    change_page = (page_number) => {
        this.props.toggle_is_fetching(true);
        this.props.set_current_page(page_number)

        usersAPI.get_users(this.props.current_page, this.props.page_size).then(data => {
            this.props.toggle_is_fetching(false);
            this.props.set_users(data.items)
        })
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
                   toggle_following_in_progress={this.props.toggle_following_in_progress}
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

export default connect(mapStateToProps, {
    follow, unfollow, set_users, set_current_page, set_total_users_count, toggle_is_fetching,
    toggle_following_in_progress
})(users_container_API);


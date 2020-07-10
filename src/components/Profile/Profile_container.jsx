import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {get_status, get_user_profile, update_status} from "../../redux/profile_reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class Profile_container extends React.Component {
    componentDidMount() {
        let user_id = this.props.match.params.user_id;
        if (!user_id) {
            user_id = 9084;
        }
        this.props.get_user_profile(user_id)
        this.props.get_status(user_id)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     update_status={this.props.update_status}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile_page.profile,
    status: state.profile_page.status
})

export default compose(
    connect(mapStateToProps, {get_user_profile, get_status, update_status}),
    withRouter
)(Profile_container)

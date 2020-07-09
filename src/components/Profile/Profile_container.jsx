import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {get_user_profile} from "../../redux/profile_reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class Profile_container extends React.Component {
    componentDidMount() {
        let user_id = this.props.match.params.user_id;
        if (!user_id) {
            user_id = 2
        }
        this.props.get_user_profile(user_id)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile_page.profile,
})

export default compose(
    connect(mapStateToProps, {get_user_profile}),
    withRouter
)(Profile_container)

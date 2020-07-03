import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {set_user_profile} from "../../redux/profile_reducer";
import {withRouter} from "react-router-dom";

class Profile_container extends React.Component {
    componentDidMount() {
        let user_id = this.props.match.params.user_id;
        if (!user_id) {
            user_id = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + user_id)
            .then(response => {
                this.props.set_user_profile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile_page.profile
})

//Добавил ещё один контейнерный компонент для роутинга profile/user_id

let with_url_data_container_component = withRouter(Profile_container);

export default connect(mapStateToProps, {set_user_profile})(with_url_data_container_component);
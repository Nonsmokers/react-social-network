import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {set_user_data} from "../../redux/auth_reducer";
import {connect} from "react-redux";

class Header_container extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.set_user_data(id, email, login)
                }
            })
    }


    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    is_auth: state.auth.is_auth,
    login: state.auth.login
})

export default connect(mapStateToProps, {set_user_data})(Header_container);
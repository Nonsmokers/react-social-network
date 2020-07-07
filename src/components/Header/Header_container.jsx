import React from 'react';
import Header from "./Header";
import {get_auth_user_data} from "../../redux/auth_reducer";
import {connect} from "react-redux";

class Header_container extends React.Component {

    componentDidMount() {
        this.props.get_auth_user_data()
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

export default connect(mapStateToProps, {get_auth_user_data})(Header_container);
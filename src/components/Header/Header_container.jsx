import React from 'react';
import Header from "./Header";
import {logout} from "../../redux/auth_reducer";
import {connect} from "react-redux";

class Header_container extends React.Component {

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

export default connect(mapStateToProps, {logout})(Header_container);
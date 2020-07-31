import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    is_auth: state.auth.is_auth
})

export const with_auth_redirect = (Component) => {
    class redirect_component extends React.Component {
        render() {
            if (!this.props.is_auth) return <Redirect to={'/login'}/>
            return <Component {...this.props} />
        }
    }

    let connected_auth_redirect_component = connect(mapStateToPropsForRedirect)(redirect_component)

    return connected_auth_redirect_component
}

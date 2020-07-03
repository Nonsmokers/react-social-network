import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {set_user_data} from "../../redux/auth_reducer";

class Header_container extends React.Component {

    componentDidMount() {
      /*  axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then(response => {
                this.props.set_user_data(response.data)
            })*/
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

export default Header_container;
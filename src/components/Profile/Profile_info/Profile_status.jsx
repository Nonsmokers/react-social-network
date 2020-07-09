import React from 'react';
import s from './Profile_info.module.css'

class Profile_status extends React.Component {
    state = {
        edit_mode: false,
    }
    activate_edit_mode() {
        this.setState({
            edit_mode: true,
        })
    }
    deactivate_edit_mode() {
        this.setState({
            edit_mode: false,
        })
    }

    render() {
        return (
            <>
                <div>
                    {(!this.state.edit_mode) &&
                    <span onDoubleClick={this.activate_edit_mode.bind(this)}>{this.props.status}</span>}
                </div>
                <div>
                    {(this.state.edit_mode) &&
                    <input autoFocus={true}
                           onBlur={this.deactivate_edit_mode.bind(this)}
                           value={this.props.status}></input>}
                </div>
            </>
        )
    }
}

export default Profile_status;
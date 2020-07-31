import React from 'react';

class Profile_status extends React.Component {
    state = {
        edit_mode: false,
        status: this.props.status,
    }
    on_status_change = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
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
        this.props.update_status(this.state.status);
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
                           onChange={this.on_status_change}
                           onBlur={this.deactivate_edit_mode.bind(this)}
                           value={this.state.status}>
                    </input>}
                </div>
            </>
        )
    }
}

export default Profile_status;
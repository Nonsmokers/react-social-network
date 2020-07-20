import React, {useEffect, useState} from 'react';

const Profile_status_with_hoocks = (props) => {
    let [edit_mode, set_edit_mode] = useState(false);
    let [status, set_status] = useState(props.status);
    

    useEffect(()=>{
        set_status(props.status)
        },[])

    const activate_edit_mode = () => {
        set_edit_mode(true)
    }

    const deactivate_edit_mode = () => {
        set_edit_mode(false)
        props.update_status(status);
    }
    const on_status_change = (e) => {
        set_status(e.currentTarget.value)
    }


    return (
        <>
            {!edit_mode &&
            <div>
                <span onDoubleClick={activate_edit_mode}>{props.status || '---STATUS---'}</span>
            </div>}
            {edit_mode &&
            <div>
                <input autoFocus={true}
                       onChange={on_status_change}
                       onBlur={deactivate_edit_mode}
                       value={status}/>
            </div>
            }
        </>
    )
}
export default Profile_status_with_hoocks;
import {get_auth_user_data} from "./auth_reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initial_state = {
    initialized: false,
}

const app_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state;
    }
}

export const initialized_success = () => {
    return {type: INITIALIZED_SUCCESS}
};

export const initialize_app = () => (dispatch) => {
    let promise = dispatch(get_auth_user_data())
    Promise.all([promise])
        .then(() => {
            dispatch(initialized_success())
        })
}

export default app_reducer;
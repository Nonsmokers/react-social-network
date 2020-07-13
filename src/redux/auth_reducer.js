import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initial_state = {
    id: null,
    email: null,
    login: null,
    is_fetching: false,
    is_auth: false,
}

const auth_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
}

export const set_user_data = (id, email, login, is_auth) => {
    return {
        type: SET_USER_DATA,
        payload: {id, email, login, is_auth}
    }
}
export const get_auth_user_data = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(set_user_data(id, email, login, true))
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(get_auth_user_data())
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(set_user_data(null, null, null, false))
            }
        })
}

export default auth_reducer;
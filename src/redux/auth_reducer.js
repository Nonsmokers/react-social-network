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
            return {...state, ...action.data, is_auth: true,}
        }
        default:
            return state;
    }
}

export const set_user_data = (id, email, login, is_fetching) => {
    return {type: SET_USER_DATA, data: {id, email, login, is_fetching}}
}
export const get_auth_user_data = () =>(dispatch)=>{
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(set_user_data(id, email, login))
            }
        })
}

export default auth_reducer;
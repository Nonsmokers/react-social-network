import {createStore, combineReducers, applyMiddleware} from "redux";
import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import sidebar_reducer from "./sidebar_reducer";
import users_reducer from "./users_reducer";
import set_user_data from "./auth_reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import app_reducer from "./app_reducer";
import {composeWithDevTools} from "redux-devtools-extension";

let reducers = combineReducers({
    profile_page: profile_reducer,
    dialogs_page: dialogs_reducer,
    sidebar: sidebar_reducer,
    users_page: users_reducer,
    auth: set_user_data,
    form: formReducer,
    app: app_reducer,
});

let store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)));

window.store = store;

export default store;

import {createStore, combineReducers, applyMiddleware} from "redux";
import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import sidebar_reducer from "./sidebar_reducer";
import users_reducer from "./users_reducer";
import set_user_data from "./auth_reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    profile_page: profile_reducer,
    dialogs_page: dialogs_reducer,
    sidebar: sidebar_reducer,
    users_page: users_reducer,
    auth: set_user_data,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;

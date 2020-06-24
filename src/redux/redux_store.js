import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import sidebar_reducer from "./sidebar_reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profile_page: profile_reducer,
    dialogs_page: dialogs_reducer,
    sidebar: sidebar_reducer
});

let store = createStore(reducers);

window.store = store;

export default store;

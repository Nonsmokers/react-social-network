import * as serviceWorker from './serviceWorker';
import store from './redux/redux_store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let render_entire_tree = (state) => {
    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />,
        document.getElementById('root'));
}

render_entire_tree(store.getState);

store.subscribe(() => {
    let state = store.getState();
    render_entire_tree(state)
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

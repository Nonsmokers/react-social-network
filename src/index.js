import * as serviceWorker from './serviceWorker';
import{render_entire_tree} from './render'
import state from './redux/state'

render_entire_tree(state)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

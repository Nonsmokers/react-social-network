import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import Dialogs_container from './components/Dialogs/Dialogs_container';
import Users_container from './components/Users/Users_container';
import Profile_container from "./components/Profile/Profile_container";
import Header_container from "./components/Header/Header_container";
import Login_page from "./components/Login/Login_page";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialize_app} from "./redux/app_reducer";
import CircularProgress from "@material-ui/core/CircularProgress";

class App extends React.Component {
    componentDidMount() {
        this.props.initialize_app()
    }

    render() {
        if (!this.props.initialized) {
            return <CircularProgress/>
        }
        return (
            <div className="app-wrapper">
                <Header_container/>
                <div className='app-wrapper-content'>
                    <Navbar/>
                    <Route path='/profile:user_id?' render={() => <Profile_container store={this.props.store}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs_container store={this.props.store}/>}/>
                    <Route path='/users' render={() => <Users_container/>}/>
                    <Route path='/login' render={() => <Login_page/>}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initialize_app}))(App);

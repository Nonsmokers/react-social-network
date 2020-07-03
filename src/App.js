import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import {Route, BrowserRouter} from 'react-router-dom';
import Dialogs_container from './components/Dialogs/Dialogs_container';
import Users_container from './components/Users/Users_container';
import Profile_container from "./components/Profile/Profile_container";
import Header_container from "./components/Header/Header_container";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header_container/>
                <div className='app-wrapper-content'>
                    <Navbar/>
                    <Route path='/profile:user_id?' render={() => <Profile_container store={props.store}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs_container store={props.store}/>}/>
                    <Route path='/users' render={() => <Users_container/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

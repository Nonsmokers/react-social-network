import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';

const App = (props)=>{

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className='app-wrapper-content'>
          <Navbar />
          <Route path='/profile' render={() => <Profile
            profile_page={props.state.profile_page}
            dispatch={props.dispatch} />} />
          <Route path='/dialogs' render={() => <Dialogs
            store={props.store}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

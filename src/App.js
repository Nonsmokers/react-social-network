import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import Dialogs_container from './components/Dialogs/Dialogs_container';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className='app-wrapper-content'>
          <Navbar />
          <Route path='/profile' render={() => <Profile store={props.store} />} />
          <Route path='/dialogs' render={() => <Dialogs_container store={props.store} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

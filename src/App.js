import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';

// import user from '../assets/img/administrator.png';

const App = ()=>{
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className='app-wrapper-content'>
          <Navbar />
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

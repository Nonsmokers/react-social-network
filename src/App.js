import React from 'react';
import './App.css';
import Menu from './components/menu';
import Content from './components/content';
import Header from './components/header';
// import user from '../assets/img/administrator.png';

const App = ()=>{
  return (
    <div className="App">
      <Header />
      <Menu />
      <Content />
    </div>
  );
}

export default App;

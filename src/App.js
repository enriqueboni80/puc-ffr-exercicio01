import React, { Component } from 'react';
import Header from './components/Header'
import MainBar from './components/MainBar'
import Article from './components/Article'
import SideBar from './components/SideBar'
import './style.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainBar />
        <Article />
        <SideBar />
      </div>
    )
  }
}

export default App;

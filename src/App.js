// import React from "react";
import logo from './logo_igr.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo"/>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          {/*<Route - check url 'path', if the same, than redraw (render) dest. component (<Profile/>)*/}
          <Route path='/profile'
                 render={() => <ProfileContainer/>}/>

          <Route path='/dialogs'
                 render={() => <DialogsContainer/>}/>

          <Route path='/users'
                 render={() => <UsersContainer/>}/>

          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </div>
  );
}

export default App;

import logo from './logo_igr.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from 'react-router-dom';


function App(props) {



  return (
    <BrowserRouter>
      <div>
        <img src={logo} className="App-logo" alt="logo"/>
        <div className="app-wrapper">
          <Header/>
          <Navbar/>
          <div className='app-wrapper-content'>
            {/*<Route path='/profile' component={Profile}/>*/}
            {/*<Route path='/dialogs' component={Dialogs}/>*/}

            <Route path='/profile' render={
              () => <Profile posts={props.posts}/>
            }/>


            <Route path='/dialogs' render={
              () => <Dialogs
                dialogs={props.dialogs}
                messages={props.messages}
              />
            }/>


            {/*<Route exact path='/dialogs' component={Dialogs}/>*/}
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

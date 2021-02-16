import logo from './logo_igr.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo"/>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className='app-wrapper-conent'>
          <Dialogs/>
        {/*<Profile />*/}
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react'
import Header from './Header';
import './index.css'
import Sidebar from './Sidebar';
import Feed from './Feed'
import Login from './Login';
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Widget from './Widget';
import Spinner from 'react-spinkit'


function App() {

  const [user,loading] = useAuthState(auth)

  if(loading){
    return(
      <div className='loader-container'>
        <div className='loader-content'>
          <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo-500x313.png" alt="linkedIn-clone" />
          <Spinner name='ball-spin-fade-loader' color='#2867B2' fadeIn='none'></Spinner>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      {!user ? <Login /> : (
        <>
        <Header />

        <div className='app-body'>
          <Sidebar />
          <Feed />
          <Widget />
        </div>
        </>
      )}
    </div>
  );
}

export default App;

import React from 'react'
import Header from './Header';
import './index.css'
import Sidebar from './Sidebar';
import Feed from './Feed'
import Login from './Login';
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      {!user ? <Login /> : (
        <>
        <Header />

        <div className='app-body'>
          <Sidebar />
          <Feed />
        </div>
        </>
      )}
    </div>
  );
}

export default App;

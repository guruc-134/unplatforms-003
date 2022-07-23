import './App.css';
import React, { useState, useMemo,useEffect } from "react";
import Grid from '@mui/material/Grid';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import {firebase} from './DataBase/firebase.config';
import {UserContext} from './Redux/context/user/userContext'
import unplatformsLogo from './assets/UnPlatformsLogo.png'
function App() {
  console.log("app reloading")
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);
  const [userProfile, setUserProfile] = useState({});
  const providerValue = useMemo(() => userProfile, [userProfile]);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUserProfile(user.providerData[0]);
      return setIsUserSignedIn(true);
    } else {
      // setUserProfile({});
      setIsUserSignedIn(false);
    }
  });
    return (
    <Grid container flexgrow={1}>
        <h1 className='application_heading'> unPlatforms </h1>
        <UserContext.Provider value ={providerValue}>
        <Router>
        {
          isUserSignedIn ?
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
                :
            <Routes>
              <Route exact path="/" element={<Login/>} />
            </Routes>
        }
      </Router>
      </UserContext.Provider>
    </Grid>
  );
}

export default App;

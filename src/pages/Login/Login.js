import React from 'react';
import Grid from '@mui/material/Grid';
import {firebase} from "../../DataBase/firebase.config"
// import Typography from '@mui/material/Typography';
import {ReactComponent as Welcome} from '../../assets/welcomeSVG.svg'
import './style.scss'
function Login() {
  const SiginiWithFirebase =() =>{
    const google_provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(google_provider)
    .then(user=>{
        // console.log(user)
    })
    .catch(err=>{
        console.log(err)
    })
}
  return (
    <Grid className='loginPage' >
      <Welcome style={{margin:"auto"}} />
      <Grid className="loginButtonContainer">
        <button type="button"  className="login-with-google-btn" onClick = {SiginiWithFirebase}>
          Sign in with Google
        </button>
      </Grid>
    </Grid>
  );
}

export default Login;

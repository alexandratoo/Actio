import React from 'react'
import ReactDOM from 'react-dom'

export default class GoogleLogin extends React.component {
  onSignIn(googleUser) {
      console.log("user signed in");
      var profile=googleUser.getBasicProfile();

  },
  componentDidMount(){
    gapi.signin2.render('g-signin2', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      'width': 200,
      'height': 50,
      'longtitle': true,
      'theme': 'light',
      'onsuccess': this.onSignIn
    })
  },

  // render (){
  //   let displayText = "Sign in with Google"
  //   return (
  //     <div id='g-signin2'></div>
  //   )
  // }
}
export default GoogleLogin

import React from 'react'
import ReactDOM from 'react-dom'

export default class GoogleLoginButton extends React.component {
  onSignIn: function(googleUser) {
      console.log("user signed in");
      var profile=googleUser.getBasicProfile()
  },
  renderGoogleLoginButton: function(){
    gapi.signin2.render('my signin2', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      'width': 200,
      'height': 50,
      'longtitle': true,
      'theme': 'light',
      'onsuccess': this.onSignIn
    })
  },
  componentDidMount: function(){
    window.addEventListener('google-loaded',this.renderGoogleLoginButton);
  },
  render: function (){
    let displayText = "Sign in with Google"
    return (
      <div id='mysignin2'></div>
    )
  }
}

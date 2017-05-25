import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';


class FacebookLogin extends React.Component {
   constructor(props) {
      super(props);

      this.FB = props.fb;
      this.state = {
         message: ""
      };
    this.redirectPage = this.redirectPage.bind(this);
   }
   redirectPage(data){
     this.props.history.push(`/users/${data.data[0].id}`);
   }
   componentDidMount() {
      this.FB.Event.subscribe('auth.logout',
         this.onLogout.bind(this));
      this.FB.Event.subscribe('auth.statusChange',
         this.onStatusChange.bind(this));
   }

   onStatusChange(response) {
      console.log( response );
      var self = this;

      if( response.status === "connected" ) {
        console.log("this.FB",this.FB);
        console.log('onStatusChange response',response);
        this.FB.api('/me?fields=name,email,picture', function(userInfo) {
          var message = "Welcome " + userInfo.name;
          axios.post('/api/fbAuth', {resonse:response,userInfo:userInfo})
          .then((data) =>{
            self.setState({
               message: message
            });

            self.redirectPage(data);
          })
        })
      }
   }

   onLogout(response) {
      this.setState({
         message: ""
      });
   }

   render() {
      return (
         <div>
            <div
               className="fb-login-button"
               data-max-rows="1"
               scope="email"
               data-size="xlarge"
               data-show-faces="false"
               data-auto-logout-link="true"
               >
            </div>
            <div>{this.state.message}</div>
         </div>
      );
   }
}

export default withRouter(FacebookLogin)

import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import Nav from './Nav';
import Footer from './Footer';
import UserEvents from './UserEvents';
import UserFeed from './UserFeed';

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {currentUser:[],
                  messages:[],
                  userEvents:[]};
    let userId = this.props.match.params.id;
    console.log(userId);
    axios.get(`/api/users/${userId}`)
      .then((user) =>{
        this.setState({currentUser:user.data})
      })

      axios.get('/api/messages')
      .then((messages) =>{
        this.setState({messages: messages.data[0]})
      })
  }

  render(){
    return(
      <div>
        <Nav />
        <img style={{height:'100px', width:'100px',display:'inline'}} src={this.state.currentUser.profile_pic} />
        <h1 style={{display:'inline', marginLeft:'25px'}}>{this.state.currentUser.first_name} {this.state.currentUser.last_name}</h1>
        <hr style={{borderColor:'black'}}/>
        <UserEvents userId={this.props.match.params.id} />
        <Footer />
      </div>
    )
  }
}

export default Profile

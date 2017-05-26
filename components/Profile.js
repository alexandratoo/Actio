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
      <div className = "profilePic">
        <Nav />
        <div className="card-block trip container col-md-2 col-sm-2 col-sm-offset-2">
        <img className="img-fluid container-fluid full"style={{height:'220px', width:'220px',display:'block', marginLeft:"-9px", marginTop:"10px"}} src={this.state.currentUser.profile_pic} />
        <h1 className="text-center name" style={{display:'block', marginLeft:"-8px"}}>{this.state.currentUser.first_name} {this.state.currentUser.last_name}</h1>
        </div>
        <UserEvents userId={this.props.match.params.id} />
        <Footer />
      </div>
    )
  }
}

export default Profile

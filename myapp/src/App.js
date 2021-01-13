import React from 'react';
import axios from 'axios';
import UserProfile from './components/UserProfile';
import UserForm from './components/UserForm';
import Followers from './components/Followers';


class App extends React.Component{

  state = {
    user: [],
    followers: []
  }

//user data   
  componentDidMount() {
    axios.get(`https://api.github.com/users/fibonacci85`)
      .then((res) => {
        // console.log(res.data);
        this.setState({
          user: res.data
        })
      })
      .catch(err=>{
          console.log(err);
      });


//followers data
    axios.get("https://api.github.com/users/fibonacci85/followers")
      .then((res)=> {
        // console.log(res.data);
        this.setState({
          followers: res.data
        })
      })
      .catch(err=>{
        console.log(err);
      });
  }

  render(){


    return(
      <div>

        <h1>MY GITHUB</h1>
        <UserForm />
        <UserProfile user={this.state.user} />
        <Followers followers={this.state.followers} />
      
      </div>
    )
  }
}

export default App;

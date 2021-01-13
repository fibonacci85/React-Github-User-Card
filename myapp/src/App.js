import React from 'react';
import axios from 'axios';
import UserProfile from './components/UserProfile';
import UserForm from './components/UserForm';
import Followers from './components/Followers';


class App extends React.Component{

  state = {
    user: "",
    followers: [],
  }

//user data   
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({
          user: res.data,
          followers: res.data
        })
      })
      .catch(err=>{
          console.log(err);
      });


//followers data
    axios.get(`https://api.github.com/users/fibonacci85/followers`)
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

  //Button Click
  handleClick = e => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.user}`)
    .then(res=>{
      this.setState({
        user: res.data
    });
  })
  }

  //Form Input 
  handleChange = e => {
    this.setState({
      user: e.target.value
    });
  }

  render() {


    return(
      <div>

        <h1>MY GITHUB</h1>
        <UserForm handleClick={this.handleClick} handleChange={this.handleChange}/>
        <UserProfile user={this.state.user} />
        <Followers followers={this.state.followers} />
      
      </div>
    )
  }
}


export default App;

import React from 'react';
import axios from 'axios';
import UserProfile from './components/UserProfile';
import UserForm from './components/UserForm';

class App extends React.Component{

  state = {
    user: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/fibonacci85`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          user: res.data
        })
      })
      .catch(err=>{
          console.log(err);
      });
  }

  render(){


    return(
      <div>
        <UserProfile user={this.state.user} />
        <UserForm />
        <h2>{this.state.user.login}</h2>
        <h2>{this.state.user.name}</h2>

      </div>
    )
  }
}

export default App;

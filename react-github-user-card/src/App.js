import React from 'react';
import GitHubUserDisplay from "./Components/GitHubUserDisplay"
import FollowersDisplay from "./Components/FollowersDisplay"

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      user:{

      },
      followers:[

      ]
    }
  }

  componentDidMount(){
    fetch('https://api.github.com/users/JacobAngulo')
    .then((res => res.json()))
    .then(
      (res) =>{
        console.log(res)
        this.setState({user: res})
        console.log(this.state);
      }
    )
    .catch(
      (err) =>{
        console.log("fetch failed" + err)
      }
    );

    fetch('https://api.github.com/users/JacobAngulo/followers')
    .then((res => res.json()))
    .then(
      (res) =>{
        console.log(res)
        this.setState({followers: res})
        console.log(this.state);
      }
    )
    .catch(
      (err) =>{
        console.log("fetch failed" + err)
      }
    )
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>USER</h1>
        <GitHubUserDisplay user={this.state.user}/>
        <h2>FOLLOWERS</h2>
        <FollowersDisplay followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;

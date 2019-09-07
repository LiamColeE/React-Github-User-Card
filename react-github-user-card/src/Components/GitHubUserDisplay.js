import React from 'react';
import UserCard from './UserCard'

class GitHubUserDisplay extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
          <UserCard user={this.props.user} />
      </div>
    );
  }
}

export default GitHubUserDisplay;

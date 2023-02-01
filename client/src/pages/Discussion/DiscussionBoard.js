import React, { Component } from 'react';

class DiscussionBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: ''
    };
  }

  handleChange = event => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      messages: [...this.state.messages, this.state.message],
      message: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <button type="submit">Post</button>
        </form>
        {this.state.messages.map(message => (
          <div key={message}>{message}</div>
        ))}
      </div>
    );
  }
}

export default DiscussionBoard;
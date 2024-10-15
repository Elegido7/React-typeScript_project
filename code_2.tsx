import React, { Component } from 'react';

class Counter extends Component {
  state: { count: number } = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  setState: any;

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

import React, { Component } from 'react';

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');

  if (storage) return JSON.parse(storage);
  return { count: 0 };
};

document.title = 'hello';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = getStateFromLocalStorage();

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState(
      (state, props) => {
        if (state.count >= props.max) return;
        return { count: state.count + props.step };
      },
      () => localStorage.setItem('counterState', JSON.stringify(this.state)),
    );

    console.log('after');
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  reset() {
    // this.setState({ count: this.state.count + 1 });
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div className="Counter">
        <p className="count">{this.state.count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;

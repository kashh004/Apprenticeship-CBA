import React, { Component } from 'react';

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps called');
    if (props.value !== state.value) {
      return { value: props.value };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount called');
    // Example: simulate data fetch or side effect
    // fetch('/api/data').then(...).catch(error => console.error('Error fetching data:', error));
  }

  changeState = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate called');
    if (this.state.value !== prevState.value) {
      if (this.state.value >= 5) {
        console.log('Counter reached limit, not updating further');
        return;
      }
      console.log(`Counter updated: ${this.state.value}`);
    }
  }

  render() {
    return (
      <div>
        <h2>LifeCycle Component</h2>
        <p>Value: {this.state.value}</p>
        <button onClick={this.changeState}>Increment Value</button>
      </div>
    );
  }
}


import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{
        border: "2px solid #2196F3",
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "300px",
        margin: "20px auto",
        textAlign: "center",
        backgroundColor: "#f1f1f1",
        color: "black"
      }}>
        <h2>Class Component Example</h2>
        <p>Count: {this.state.count}</p>
        <button
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
          onClick={this.increment}
        >
          Increment
        </button>
        <br />
        <button
          style={{
            padding: "10px 20px",
            margin: "5px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
          onClick={() => this.setState({ count: 0 })}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default ClassComponent;
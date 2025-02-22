// import React from "react";

import { Component } from "react";
import Test from "./Test";

// const App = () => {
//   return <div>App</div>;
// };

// export default App;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Initial trigger");
  }

  componentDidUpdate(currProps, currState) {
    console.log(currProps, currState);
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button
          onClick={() =>
            this.setState((currState) => {
              return {
                count: currState.count + 1,
              };
            })
          }
        >
          Increment
        </button>
        <Test title="Hello world" />
      </div>
    );
  }
}

export default App;

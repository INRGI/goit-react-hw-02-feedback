import Notification from "components/Notification";
import { Component } from "react";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  render() {
    return (
      <div>
        <p>React homework template</p>
        <Notification message="There is no feedback"/>
      </div>
    );
  }
};
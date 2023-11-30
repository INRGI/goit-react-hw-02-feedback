import Notification from "components/Notification";
import Section from "components/Section";
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
        <Section title="Please leave feedback"></Section>
        <Section title="Statictics">
          <Notification message="There is no feedback"/>
        </Section>
      </div>
    );
  }
};
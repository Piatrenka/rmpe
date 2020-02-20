import React, { Component } from "react";
import AnalogDisplay from "../AnalogDisplay/AnalogDisplay";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      currentTime: new Date().toString(),
      ss: new Date().getSeconds(),
      mm: new Date().getMinutes(),
      hh: new Date().getHours()
    };
  }

  launchClock() {
    setInterval(() => {
      this.setState(prevState => {
        this.setState({
          currentTime: new Date().toString(),
          ss: prevState.ss + 0.01,
          mm: prevState.mm + 0.01 / 60,
          hh: prevState.hh + 0.01 / 60 / 12
        });
      });
    }, 10);
  }

  render() {
    return (
      <React.Fragment>
        <p> I'm a Clock comp</p>
        <p>{this.state.currentTime}</p>
        <div>
          <AnalogDisplay time={this.state} />
        </div>
      </React.Fragment>
    );
  }
}

export default Clock;

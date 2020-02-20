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
      hh: new Date().getMilliseconds()
    };
  }

  launchClock() {
    setInterval(() => {
      let d = new Date();
      let ss = d.getSeconds() + d.getMilliseconds() / 1000;
      let mm = d.getMinutes() + ss / 60;
      let hh = d.getHours() + mm / 60;

      this.setState({
        currentTime: d.toString(),
        ss: ss,
        mm: mm,
        hh: hh
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

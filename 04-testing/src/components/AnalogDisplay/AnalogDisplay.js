import React from "react";

const AnalogDisplay = props => {
  // Преобразование строки в объект
  // let date = new Date(props.time.currentTime);
  let ss = props.time.ss;
  let mm = props.time.mm;
  let hh = props.time.hh;

  // console.log(props.time);
  // console.log(date);
  // console.log(ss);

  let dialStyle = {
    position: "relative",
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    border: "1px solid",
    borderRadius: 20000,
    // borderStyle: "solid",
    borderColor: "white",
    // boxSizing: "border-box",
    margin: "auto"
  };

  let dialStyle12 = {
    position: "absolute",
    top: -2,
    left: -2,
    // border: "1px solid red",
    width: 202,
    height: 202,
    borderRadius: 202,
    // borderStyle: "solid",
    boxSizing: "border-box"
  };

  let secondHandStyle = {
    position: "relative",
    top: 100,
    left: 100,
    border: "1px solid red",
    width: "45%",
    boxSizing: "border-box",
    height: 3,
    transform: "rotate(" + ((ss / 60) * 360 - 90).toString() + "deg)",
    transformOrigin: "0% 0%",
    backgroundColor: "red"
  };

  let minuteHandStyle = {
    position: "relative",
    top: 97,
    left: 100,
    border: "1px solid grey",
    width: "40%",
    boxSizing: "border-box",
    height: 3,
    transform: "rotate(" + ((mm / 60) * 360 - 90).toString() + "deg)",
    transformOrigin: "0% 0%",
    backgroundColor: "grey"
  };

  let hourHandStyle = {
    position: "relative",
    top: 94,
    left: 100,
    border: "1px solid grey",
    width: "30%",
    boxSizing: "border-box",
    height: 3,
    transform: "rotate(" + ((hh / 12) * 360 - 90).toString() + "deg)",
    transformOrigin: "0% 0%",
    backgroundColor: "grey"
  };

  let twelveStyle = {
    position: "absolute",
    top: 10,
    left: 100,
    broder: "1px solid white",
    width: 5,
    boxSizing: "border-box",
    height: 1,
    transform: "rotate(" + (-90).toString() + "deg)",
    transformOrigin: "0% 0%",
    backgroundColor: "grey"
  };

  let threeStyle = {
    position: "absolute",
    top: 100,
    left: 190,
    broder: "1px solid white",
    width: 5,
    boxSizing: "border-box",
    height: 1,
    transform: "rotate(" + (0).toString() + "deg)",
    transformOrigin: "0% 0%",
    backgroundColor: "grey"
  };

  let sixStyle = {
    position: "absolute",
    top: 190,
    left: 100,
    broder: "1px solid white",
    width: 5,
    boxSizing: "border-box",
    height: 1,
    transform: "rotate(" + (90).toString() + "deg)",
    transformOrigin: "0% 0%",
    backgroundColor: "grey"
  };

  let nineStyle = {
    position: "absolute",
    top: 100,
    left: 5,
    broder: "1px solid white",
    width: 5,
    boxSizing: "border-box",
    height: 1,
    transform: "rotate(" + (0).toString() + "deg)",
    transformOrigin: "0% 0%",
    backgroundColor: "grey"
  };

  return (
    <React.Fragment>
      <p>I'm a AnalogDisplay comp</p>

      <div style={dialStyle}>
        <div style={dialStyle12}>
          <div style={twelveStyle} />
          <div style={threeStyle} />
          <div style={sixStyle} />
          <div style={nineStyle} />
        </div>

        <div style={secondHandStyle} />
        <div style={minuteHandStyle} />
        <div style={hourHandStyle} />
      </div>
      {/* <div style={dialStyle}></div> */}
      <p>The end</p>
    </React.Fragment>
  );
};

export default AnalogDisplay;

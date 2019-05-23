import React from 'react';

export default class BreathTimer extends React.Component {
  state = {
    time: this.props.duration, // initially (when component first mounts) time is set to duration
    incdec: -1, // <== this the increment/decrement variable we pass to tick() function and flip in flipped()
  };

  componentDidMount() {
    this.timerID = setInterval( () => this.tick(), 1000 ); // when component mounts, we set interval to fire tick function every 1 second
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  flipped() {
    if(this.state.time < 1 || this.state.time > this.props.duration) {
      this.setState(
        { incdec: this.state.incdec * -1 }
      );
      // pass the incdec state up to the MainComponent
      this.props.sendIncDec(this.state.incdec)
    }
    console.log("inside flipped, here is STATE INCDEC ==>", this.state.incdec, "here is PROPS INCDEC ==>", this.props.incdec);
  };

  tick() {
    // console.log("i am ticking now, here is this.state.TIME ===>", this.state.time)
    if (this.props.startstoppause === "started") {
      this.flipped()
      this.setState(
        { time: (this.state.time + this.state.incdec) }
      );
    }
    else if (this.props.startstoppause === "stopped" || "paused") {
      // console.log("inside BreathTime stopped", this.state.time, this.state.incdec)
      // clearInterval(this.timerID);
      this.setState({ 
        time: this.props.duration,
        incdec: -1,
      });
      this.props.sendIncDec(-1)
    }
  };

  render() {
    return null;
  };
}

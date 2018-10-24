import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import formatDuration from 'format-duration';

export default class SessionTimer extends React.Component {
  state = {
    start: new Date(),
    now: new Date(),
    hours: 0,
    minutes: 0,
    seconds: 0,
    captures: [],
    pausetime: null,
  }

  // this fires when the component mounts, sets an Interval variable, which will call tick() every second
  // componentDidMount() {
  //   this.timer = setInterval( () => this.tick(), 1000);
  //   console.log("inside DidMount", this.state.start, this.state.now)
  //   // this.tick();
  // }

  componentWillReceiveProps(nextProps) {

    if(nextProps.started === true) {
      if(nextProps.incdec != this.props.incdec) {
        console.log("do nothing")
      }
      else {
        this.timer = setInterval( () => {
          if(this.state.seconds >= 59) {
            this.setState((prevState) => ({ minutes: prevState.minutes + 1, seconds: 0}));
          }
          if(this.state.minutes >= 60) {
            this.setState((prevState) => ({ hours: prevState.hours + 1, minutes: 0, seconds: 0}));
          }
          this.setState((prevState) => ({ seconds: prevState.seconds + 1}))
        }, 1000);
        console.log("inside RECEIVE PROPS START", this.timer)
      }
    }
    if(nextProps.paused === true) {
      clearInterval(this.timer);
      console.log("inside RECEIVE PROPS PAUSE", this.timer)
    }
    if(nextProps.stopped === true) {
      this.setState({ hours: 0, minutes: 0, seconds: 0})
      clearInterval(this.timer);
      ()=>console.log("inside RECEIVE PROPS STOP", this.timer)
    }
    console.log(this.timer)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // gets called every second and if started will update this.state.now
  tick() {
    // if(this.props.started === true) {
      // if(this.state.pausetime) {
      //   this.setState({
      //     start: this.state.pausetime
      //   })
      // }
      this.setState({
        // start: this.props.start,
        now: new Date(),
      })
      console.log("inside tick started")
    // }
    // if we comment this out then its *almost like haveing pause functionality
    // else if(this.props.stopped === true) {
    //   this.setState({
    //     start: new Date(),
    //     now: new Date(),
    //   })
    //   // clearInterval(this.timer);
    //   console.log("inside tick stopped", this.state.start, this.state.now)
    // }
    // else if(this.props.paused === true) {
    //   this.setState({
    //     start: this.state.start,
    //     now: this.state.now,
    //     pausetime: (this.state.now - this.state.start)
    //   })
    //   console.log("inside tick paused", this.state.start, this.state.now)
    // }
  }

  paused() {
    this.setState({
      pausetime: (this.state.start - this.state.now),
      start: 0,
      now: this.state.pausetime,
    })
    console.log(this.state.pausetime)
  }

  render() {
    let time = Math.floor(this.state.now - this.state.start)
    return (
      <View style={styles.sessionTimer}>
        <Text style={styles.timerText}>
          {this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sessionTimer: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 20,
  },
  timerText: {
    fontSize: 40,
  }
});

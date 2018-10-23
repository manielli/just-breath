import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import formatDuration from 'format-duration';

export default class SessionTimer extends React.Component {
  state = {
    start: new Date(),
    now: new Date(),
    pausetime: null,
  }

  // this fires when the component mounts, sets an Interval variable, which will call tick() every second
  componentDidMount() {
    this.timer = setInterval( () => this.tick(), 1000);
    console.log("inside DidMount", this.state.start, this.state.now)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // gets called every second and if started will update this.state.now
  tick() {
    if(this.props.started === true) {
      // const now = new Date().getTime()
      this.setState({
        // start: this.props.start,
        now: new Date(),
      })
      console.log("inside tick started", this.state.start, this.state.now)
    }
    else if(this.props.stopped === true) {
      this.setState({
        start: new Date(),
        now: new Date(),
      })
      console.log("inside tick stopped", this.state.start, this.state.now)
    }
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
          {formatDuration(time)}
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

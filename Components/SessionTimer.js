import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SessionTimer extends React.Component {
  state = {
    start: new Date(),
    now: new Date(),
  }

  componentDidMount() {
    this.timer = setInterval( () => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    if(this.props.started) {
      // const now = new Date().getTime()
      this.setState({
        now: (new Date() - this.state.start)
      })
    }
    // else if(this.props.stopped === true) {
    //   clearInterval(this.timer)
    //   console.log("stop")
    // }
  }

  render() {
    let time = Math.floor(this.state.now) / 1000
    return (
      <View style={styles.sessionTimer}>
        <Text style={styles.timerText}>
          {time}
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

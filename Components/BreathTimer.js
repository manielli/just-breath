import React from 'react';
// import BreathCircle from './BreathCircle';
import { StyleSheet, Text, View } from 'react-native';

export default class BreathTimer extends React.Component {
  state = {
    time: this.props.duration,
    incdec: -1, // <== this the increment/decrement variable we pass to tick() function and flip in flipped()
  };

  componentDidMount() {
    this.timerID = setInterval( () => this.tick(), 1000 );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  flipped = () => {
    if(this.state.time < 1 || this.state.time > this.props.duration) {
      this.setState(
        { incdec: this.state.incdec * -1 }
      );
      this.props.sendIncDec(this.state.incdec)
      // console.log("inside flipped", this.state.incdec);
    }
  };

  tick() {
    if(this.props.started === true) {
      this.flipped()
      this.setState(
        { time: (this.state.time + this.state.incdec) }
      );
      // console.log("inside tick", this.state.incdec)
    }
    else if(this.props.stopped === true) {
      this.setState(
        { time: this.props.duration }
      );
    }
  };

  render() {
    return (
      <View style={styles.incdecTimer}>

        <Text style={styles.timerText}>
          00:0{this.state.time}
        </Text>

      </View>
    );
  };
}

const styles = StyleSheet.create({
  incdecTimer: {
    position: 'absolute',
    top: 0,
  },
  timerText: {
    fontSize: 40,
  },
  // text: {
  //   fontSize: 40,
  // },
});

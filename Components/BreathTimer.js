import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BreathTimer extends React.Component {
  state = {
    time: this.props.duration,
    incdec: -1,
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
      )
      console.log("inside flipped", this.state.incdec);
    }
  }

  tick() {
    if(this.props.started === true) {
      this.flipped()
      this.setState(
        { time: (this.state.time + this.state.incdec) }
      );
      console.log("inside tick", this.state.incdec)
    }
    else if(this.props.stopped === true) {
      this.setState(
        { time: this.props.duration }
      );
    }
  }

  countUpDown = () => {
    if(this.state.time < 0) {
      setInterval(this.setState({ time: this.state.time + 1 }), 1000)
    } else if(this.state.time > this.props.duration) {
      setInterval(this.setState({ time: this.state.time - 1 }), 1000)
    }
  };

  render() {
    return (
      <View>
        <Text style={styles.timertext}>
          00:0{this.state.time}
        </Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  timertext: {
    fontSize: 40,
  },
});

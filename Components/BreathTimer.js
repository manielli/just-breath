import React from 'react';
import BreathCircle from './BreathCircle';
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
      <View>

        <Text style={styles.timertext}>
          00:0{this.state.time}
        </Text>

        {/* <Text style={styles.text}>
          BREATH CIRCLE GOES HERE
        </Text> */}

        <BreathCircle
          // style={{
          //   width: 250,
          //   height: 200,
          //   backgroundColor: '#d0f2ff',
          // }}
          animationTime={this.state.time}
          inOut={this.state.incdec}>

          <Text
            style={{
              fontSize: 40,
              textAlign: 'center',
              margin: 10,
            }}>
            BREATHE OUT
          </Text>

        </BreathCircle>

      </View>
    );
  };
}

const styles = StyleSheet.create({
  timertext: {
    fontSize: 40,
  },
  // text: {
  //   fontSize: 40,
  // },
});

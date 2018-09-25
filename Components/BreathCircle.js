import React from 'react';
import { Animated, Text, View, Button } from 'react-native';

export default class BreathCircle extends React.Component {

  render() {

    let colorChangeAnimation = new Animated.Value(0) // Sets variable to keyword

    if (this.props.started === true && this.props.incDec === -1) {
      Animated.timing(    // Animate over time
        colorChangeAnimation,   // The animated value to drive
        {
          toValue: 1,   // Animate to end value: 1
          duration: this.props.duration * 1000,   // Make it take a while
        }
      ).start();
      return (
        <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          // width: 250,
          // height: 200,
          backgroundColor: colorChangeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ['#ffa6a6', '#b7ceff'],
          }),
        }}
        >
          {this.props.children}
        </Animated.View>
      );
    }
    else if (this.props.started === true && this.props.incDec === 1) {
      Animated.timing(      // Animate over time
        colorChangeAnimation,   // The animated value to drive
        {
          toValue: 1,     // Animate to end value: 1
          duration: this.props.duration * 1000,  // Make it equal to duration
        }
      ).start();    // Starts the animation
      return (
        <Animated.View    // Special animatable View
          style={{
            ...this.props.style, // style props passed in from MainComponent
            backgroundColor: colorChangeAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: ['#b7ceff', '#ffa6a6'],
            }),
          }}
        >
          {this.props.children}
        </Animated.View>
      );
    }
    else {
      return (
        <View>
          <Text
            style={{
              fontSize: 40,
              textAlign: 'center',
              margin: 10,
            }}>
            JUST BREATHE
          </Text>
        </View>
      )
    }
  }
}

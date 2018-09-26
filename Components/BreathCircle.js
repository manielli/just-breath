import React from 'react';
import { Animated, Text, View } from 'react-native';

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
        <Animated.View    // Special animatable View
          style={{
            // ...this.props.style,
            width: colorChangeAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [250, 200],
            }),
            height: colorChangeAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [250, 200],
            }),
            backgroundColor: colorChangeAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: ['#b7ceff', '#ffa6a6'],
            }),
            borderRadius: colorChangeAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [250/2, 200/2]
            }),
          }}
        >
          {/* {this.props.children} */}
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              margin: 10,
            }}>
            BREATHE OUT
          </Text>
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
        <Animated.View                 // Special animatable View
        style={{
          // ...this.props.style,
          width: colorChangeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [200, 250],
          }),
          height: colorChangeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [200, 250],
          }),
          backgroundColor: colorChangeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ['#ffa6a6', '#b7ceff'],
          }),
          borderRadius: colorChangeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [200/2, 250/2]
          }),
        }}
        >
          {/* {this.props.children} */}
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              margin: 10,
            }}>
            BREATHE IN
          </Text>
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

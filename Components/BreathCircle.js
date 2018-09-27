import React from 'react';
import { Animated, Easing, Text, View } from 'react-native';

export default class BreathCircle extends React.Component {

  // animate () {
  //   let circleAnimation = new Animated.Value(0); // Sets variable to keyword
  //   // this.circleAnimation.setValue(0)
  //   Animated.timing(    // Animate over time
  //     circleAnimation,   // The animated value to drive
  //     {
  //       toValue: 1,   // Animate to end value: 1
  //       duration: this.props.duration * 1000,   // Make it take a while
  //     }
  //   ).start();
  // };

  render() {

    let circleAnimation = new Animated.Value(0) // Sets variable to keyword
    // let circleAnimation = this.circleAnimation // Sets variable to keyword

    if (this.props.started === true && this.props.incDec === -1) {
      Animated.timing(    // Animate over time
        circleAnimation,   // The animated value to drive
        {
          toValue: 1,   // Animate to end value: 1
          duration: this.props.duration * 1000,   // Make it take a while
        }
      ).start();
      // console.log("animation breathe out started");
      // this.animate();
      return (
        <Animated.View    // Special animatable View
          style={{
            // ...this.props.style,
            width: circleAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [300, 200],
            }),
            height: circleAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [300, 200],
            }),
            backgroundColor: circleAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: ['#b7ceff', '#ffa6a6'],
            }),
            borderRadius: circleAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [300/2, 200/2]
            }),
            justifyContent: 'center',
          }}
        >
          {/* {this.props.children} */}
          <Animated.Text
            style={{
              fontSize: circleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [32, 18],
              }),
              textAlign: 'center',
              margin: 10,
            }}
          >
            breathe out
          </Animated.Text>
        </Animated.View>
      );
    }
    else if (this.props.started === true && this.props.incDec === 1) {
      Animated.timing(      // Animate over time
        circleAnimation,   // The animated value to drive
        {
          toValue: 1,     // Animate to end value: 1
          duration: this.props.duration * 1000,  // Make it equal to duration
        }
      ).start();    // Starts the animation
      // this.animate()
      return (
        <Animated.View                 // Special animatable View
        style={{
          // ...this.props.style,
          width: circleAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [200, 300],
          }),
          height: circleAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [200, 300],
          }),
          backgroundColor: circleAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ['#ffa6a6', '#b7ceff'],
          }),
          borderRadius: circleAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [200/2, 300/2]
          }),
          justifyContent: 'center',
        }}
        >
          {/* {this.props.children} */}
          <Animated.Text
            style={{
              fontSize: circleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [18, 32],
              }),
              textAlign: 'center',
              margin: 10,
            }}
          >
            breathe in
          </Animated.Text>
        </Animated.View>
      );
    }
    else {
      return (
        <View>
          <View
            style={{
              height: 300,
              width: 300,
              borderRadius: 300/2,
              backgroundColor: '#b7ceff',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                margin: 10,
              }}>
              just breathe
            </Text>
          </View>
        </View>
      )
    }
  }
}

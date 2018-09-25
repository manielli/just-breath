import React from 'react';
import { Animated, Text, View, Button } from 'react-native';

export default class BreathCircle extends React.Component {

  // state = {
  //   colorChangeAnimation: new Animated.Value(0),  // Initial value for 'color-change' mapped to '0'
  // }

  // newColorValue = () => {
  //   Animated.multiply(0, colorChangeAnimation)
  // }

  // componentDidMount() {
  //   Animated.timing(                                     // Animate over time
  //     this.state.colorChangeAnimation,                   // The animated value to drive
  //     {
  //       toValue: 1,                                      // Animate to end value: 1
  //       duration: this.props.animationTime * 1000,       // Make it take a while
  //     }
  //   ).start();                                           // Starts the animation
  // }

  newAnimated = () => {
    let newValue = new Animated.Value(0)
    return newValue
  }

  flipped = () => {
    // if(this.props.animationTime < 1 || this.props.animationTime > this.props.duration) {
    // if(this.state.colorChangeAnimation === 1) {
    console.log("inside flipped", this.state.colorChangeAnimation);
    // return
      this.setState(
        { colorChangeAnimation: new Animated.Value(0) }
      );
    // }
  };

  // colorChangeAnimation = () => ( new Animated.Value(0) )

  render() {
    let colorChangeAnimation = new Animated.Value(0)
    // avoids doing this.state.colorChangeAnimation
    if (this.props.started === true && this.props.incDec === -1) {
      // this.flipped()
                                       // Animate over time
      Animated.timing(
        colorChangeAnimation,                   // The animated value to drive
        {
          toValue: 1,                                      // Animate to end value: 1
          duration: this.props.duration * 1000,       // Make it take a while
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
      Animated.timing(                                     // Animate over time
        colorChangeAnimation,                   // The animated value to drive
        {
          toValue: 1,                                      // Animate to end value: 1
          duration: this.props.duration * 1000,       // Make it take a while
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
            BREATHE OUT
          </Text>
        </View>
      )
    }
  }
}

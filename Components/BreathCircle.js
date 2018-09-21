import React from 'react';
import { Animated, Text, View } from 'react-native';

export default class BreathCircle extends React.Component {

  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: this.props.animationTime * 1000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          // ...this.props.style,
          width: 250,
          height: 200,
          backgroundColor: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['#ffa6a6', '#b7ceff'],
          }),
          // opacity: this.state.fadeAnim,  // Bind opacity to animated value
          // transform: [{
          //   opacity: this.state.fadeAnim.interpolate({
          //     inputRange: [0, this.props.animationTime],
          //     outputRange: [0, 1]
          //   })
          // }]
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

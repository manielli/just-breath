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
        <View style={{justifyContent: 'center',}}>
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
              outputRange: ['#9ecdf9', '#b3b8ff'],
            }),
            borderRadius: circleAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [300/2, 200/2]
            }),
            flex: 0,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 0,
          }}
        >
          <Animated.View  // Border around Breath Circle
            style={{
              width: circleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [320, 220],
              }),
              height: circleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [320, 220],
              }),
              borderRadius: circleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [320/2, 220/2]
              }),
              // position: 'relative',
              borderWidth: 5,
              borderColor: '#d0f2ff',
              justifyContent: 'center',
              zIndex: 1,
            }}
          >
            <Animated.View // outer ticks
              style={{
                position: 'absolute',
                left: circleAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [145, 95],
                }),
                top: 0,
                backgroundColor: 'white',
                width: 20,
                height: 10,
                zIndex: 3,
                transform: [
                  {rotate: '90deg'}
                ],
              }}
            >
            </Animated.View>
          <Animated.Text
            style={{
              fontSize: circleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [36, 18],
              }),
              textAlign: 'center',
              margin: 10,
              zIndex: 2,
            }}
          >
            breathe out
          </Animated.Text>
        </Animated.View>

        </Animated.View>
      </View>
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
        <View style={{justifyContent: 'center',}}>
          <Animated.View                 // Breath Circle
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
                outputRange: ['#b3b8ff', '#9ecdf9'],
              }),
              borderRadius: circleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [200/2, 300/2]
              }),
              flex: 0,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 0,
            }}
          >
            <Animated.View  // Border around Breath Circle
              style={{
                width: circleAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [220, 320],
                }),
                height: circleAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [220, 320],
                }),
                borderRadius: circleAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [220/2, 320/2]
                }),
                borderWidth: 5,
                borderColor: '#d0f2ff',
                zIndex: 1,
                justifyContent: 'center',
              }}
            >
              <Animated.View // outer ticks
                style={{
                  position: 'absolute',
                  left: circleAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [95, 145],
                  }),
                  top: 0,
                  backgroundColor: 'white',
                  width: 20,
                  height: 10,
                  transform: [
                    {rotate: '90deg'}
                  ],
                  zIndex: 3,
                  // flexDirection: 'column',
                  // justifyContent: 'center',
                  // alignItems: 'center',
                }}
              >
              </Animated.View>
              <Animated.Text // Text inside Breath Circle
                style={{
                  fontSize: circleAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [18, 36],
                  }),
                  textAlign: 'center',
                  margin: 10,
                  zIndex: 2,
                }}
                >
                  breathe in
              </Animated.Text>
            </Animated.View>

          </Animated.View>
        </View>
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

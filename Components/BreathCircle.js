import React from 'react';
import { Animated, Text, View } from 'react-native';

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
    let snapshot = 50
    let radius = 160 //animated 160 => 110
    let xinputRange = []
    let xoutputRange = []
    let yinputRange = []
    let youtputRange = []

    for (let i=0; i<=snapshot; ++i) {
      let value = i/snapshot;
      let move = Math.sin(value * Math.PI) * radius;
      xinputRange.push(value);
      xoutputRange.push(move);
    }

    for (let i=0; i<=snapshot; ++i) {
      let value = i/snapshot;
      let move = -Math.cos(value * Math.PI) * radius;
      yinputRange.push(value);
      youtputRange.push(move);
    }



    if (this.props.started === true && this.props.incDec === -1) {
      Animated.timing(    // Animate over time
        circleAnimation,   // The animated value to drive
        {
          toValue: 1,   // Animate to end value: 1
          duration: this.props.duration * 1000,   // Duration of Animation
        }
      ).start();
      // this.animate();
      return (
        <View>
          <Animated.View    // BREATH ORB
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
            <Animated.View // TRAVEL BALL
            style={{
              position: 'relative',
              backgroundColor: '#e785c8',
              width: 10,
              height: 10,
              borderRadius: 5,
              top: 5,
              zIndex: 3,
              transform: [
                {
                  translateY: circleAnimation.interpolate({
                    inputRange: yinputRange,
                    outputRange: youtputRange
                  })
                },
                {
                  translateX: circleAnimation.interpolate({
                    inputRange: xinputRange,
                    outputRange: xoutputRange
                  })
                },
              ],
            }}
            >
            </Animated.View>
            <Animated.View  // CIRCLE BORDER
              style={{
                position: 'absolute',
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
              <Animated.View // TOP OUTER TICK
                style={{
                  position: 'absolute',
                  left: circleAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [150, 100],
                  }),
                  top: -5,
                  backgroundColor: 'white',
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  transform: [
                    {rotate: '-90deg'}
                  ],
                }}
              >
              </Animated.View>
              <Animated.View // BOTTOM OUTER TICK
                style={{
                  position: 'absolute',
                  left: circleAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [150, 100],
                  }),
                  bottom: -5,
                  backgroundColor: 'white',
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  transform: [
                    {rotate: '90deg'}
                  ],
                }}
              >
              </Animated.View>
              <Animated.Text // INNER TEXT
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
      ).start(); // Starts the animation
      return (
        <View>
          <Animated.View   // BREATH ORB
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
            <Animated.View  // CIRCLE BORDER
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
              <Animated.View // TOP OUTER TICK
                style={{
                  position: 'absolute',
                  left: circleAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 150],
                  }),
                  top: -5,
                  backgroundColor: 'white',
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  transform: [
                    {rotate: '-90deg'}
                  ],
                }}
              >
              </Animated.View>
              <Animated.View // BOTTOM OUTER TICK
                style={{
                  position: 'absolute',
                  left: circleAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 150],
                  }),
                  bottom: -5,
                  backgroundColor: 'white',
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  transform: [
                    {rotate: '90deg'}
                  ],
                }}
              >
              </Animated.View>
              <Animated.Text // INNER TEXT
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

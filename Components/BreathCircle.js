import React from 'react';
import { Animated, Text, View } from 'react-native';

export default class BreathCircle extends React.Component {
  render() {
    // ==> ANIMATION FUNCTIONS
    let circleAnimation = new Animated.Value(0) // Sets variable to keyword, initial value 0
    const animationStart = () => {
      Animated.timing(    // Animate over time
        circleAnimation,   // The animated value to drive ==> starts at initial value
        {
          toValue: 1,   // Animate to end value: 1
          duration: this.props.duration * 1000,   // Duration of Animation
        }
      ).start();
    }
    const animationStop = () => {
      Animated.timing(circleAnimation).stop();
    }
    // BREATH ORB VARS
    let breathorbMaxWidth = 290 // ALL OTHER VALS DERIVED FROM THIS MAXWIDTH
    let breathorbMinWidth = 190 // ALL OTHER VALS DERIVED FROM THIS MINWIDTH
    let breathOrbMaxColor = '#9ecdf9'
    let breathOrbMinColor = '#b3b8ff'
    // OUTER CIRCLE BORDER VARS
    let outercircleMaxWidth = breathorbMaxWidth + 20
    let outercircleMinWidth = breathorbMinWidth + 20
    let outercircleMaxRadius = outercircleMaxWidth / 2
    let outercircleMinRadius = outercircleMinWidth / 2
    let circleBorderColor = '#d0f2ff'
    // TRAVEL BALL VARS
    let travelBallWidHi = 10
    let travelBallColor = '#e785c8'
    // INNER TEXT FONT SIZES
    let fontSizeMax = 26
    let fontSizeMin = 18
    // METHODS FOR ANIMATING THE TRAVELLING BALL ====>
    let snapshot = (outercircleMaxWidth - outercircleMinWidth)/2 // must be the same as the diff in the two radii
    let interpolatedRadius = []
    let interpolatedRadius2 = []
    let inputRange = []
    let xoutputRange = []
    let youtputRange = []
    let xoutputRangeIn = []
    let youtputRangeIn = []

    // set BREATHE OUT interpolatedRadius to values between outercircleMaxRadius and outercircleMinRadius
    for (let j=outercircleMaxRadius; j >= outercircleMinRadius; --j) {
      interpolatedRadius.push(j);
    }
    // set BREATH IN interpolatedRadius2 to values between 110 and 160
    for (let j=outercircleMinRadius; j <= outercircleMaxRadius; ++j) {
      interpolatedRadius2.push(j);
    }

    // calculate transformed X-values for Breath OUT
    for (let i=0; i <= snapshot; ++i) {
      let value = i / snapshot; // ie 0/50 1/50, 2/50 => up to 1
      let move = Math.sin(value * Math.PI) * interpolatedRadius[i];
      inputRange.push(value);
      xoutputRange.push(move);
    }
    // calculate transformed Y-values for Breath OUT
    for (let i=0; i<=snapshot; ++i) {
      let value = i / snapshot;
      let move = -Math.cos(value * Math.PI) * interpolatedRadius[i];
      youtputRange.push(move);
    }

    // calculate transformed X-values for Breath IN
    for (let i=0; i<=snapshot; ++i) {
      let value = i/snapshot; // ie 0/50 1/50, 2/50 => up to 1
      let move = -Math.sin(value * Math.PI) * interpolatedRadius2[i];
      xoutputRangeIn.push(move);
    }
    // calculate transformed Y-values for Breath IN
    for (let i=0; i<=snapshot; ++i) {
      let value = i/snapshot;
      let move = Math.cos(value * Math.PI) * interpolatedRadius2[i];
      youtputRangeIn.push(move);
    }

  // <=========== BREATHE OUT VIEWS =============>
    if (this.props.startstoppause === "started" && this.props.incdec === -1) {
      animationStart() // Calls start to the const animation defined before the return
      return (
        <View>
          <Animated.View style={{  // ==> INNER BREATH ORB
            flex: 0,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 0,
            width: circleAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [breathorbMaxWidth, breathorbMinWidth],
            }),
            height: circleAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [breathorbMaxWidth, breathorbMinWidth],
            }),
            backgroundColor: circleAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [breathOrbMaxColor, breathOrbMinColor],
            }),
            borderRadius: circleAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [breathorbMaxWidth/2, breathorbMinWidth/2]
            }),
          }}>
            <Animated.View style={{  // ==> TRAVEL BALL
              position: 'relative',
              zIndex: 3,
              backgroundColor: travelBallColor,
              width: travelBallWidHi,
              height: travelBallWidHi,
              borderRadius: travelBallWidHi/2,
              top: circleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [travelBallWidHi/2, -travelBallWidHi/2]
              }),
              transform: [
                {
                  translateY: circleAnimation.interpolate({
                    inputRange: inputRange,
                    outputRange: youtputRange
                  })
                },
                {
                  translateX: circleAnimation.interpolate({
                    inputRange: inputRange,
                    outputRange: xoutputRange
                  })
                },
              ],
            }}>
            </Animated.View>
            <View style={{  // ==> TOP OUTER TICK 
              position: 'absolute',
              zIndex: 2,
              top: -10,
              backgroundColor: 'white',
              width: 10,
              height: 10,
              borderRadius: 5,
              borderTopRightRadius: 0, // these make it not a circle
              borderBottomRightRadius: 0, // these make it not a circle
              transform: [
                {rotate: '-90deg'},
              ],
            }}>
            </View>
            <View style={{  // ==> BOTTOM OUTER TICK
              position: 'absolute',
              zIndex: 2,
              bottom: -10,
              backgroundColor: 'white',
              width: 10,
              height: 10,
              borderRadius: 5,
              borderTopRightRadius: 0, // these make it not a circle
              borderBottomRightRadius: 0,
              transform: [
                {rotate: '90deg'}
              ],
            }}>
            </View>
            <Animated.View style={{  // ==> OUTER CIRCLE BORDER
              position: 'absolute',
              zIndex: 1,
              width: circleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [outercircleMaxWidth, outercircleMinWidth],
              }),
              height: circleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [outercircleMaxWidth, outercircleMinWidth],
              }),
              borderRadius: circleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [outercircleMaxWidth/2, outercircleMinWidth/2]
              }),
              borderWidth: 5,
              borderColor: circleBorderColor,
            }}>
            </Animated.View>
            <Animated.Text style={{  // ==> INNER TEXT
              position: 'absolute',
              zIndex: 2,
              fontSize: circleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [fontSizeMax, fontSizeMin],
              }),
            }}>
              breathe out
            </Animated.Text>
          </Animated.View>
        </View>
      );
    }
  // <========== BREATHE IN VIEWS ===========>
    else if (this.props.startstoppause === "started" && this.props.incdec === 1) {
      animationStart()
      return (
        <View>
          <Animated.View style={{  // ==> INNER BREATH ORB
            flex: 0,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 0,
            width: circleAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [breathorbMinWidth, breathorbMaxWidth],
            }),
            height: circleAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [breathorbMinWidth, breathorbMaxWidth],
            }),
            backgroundColor: circleAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [breathOrbMinColor, breathOrbMaxColor],
            }),
            borderRadius: circleAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [breathorbMinWidth/2, breathorbMaxWidth/2]
            }),
          }}>
            <Animated.View style={{  // ==> TRAVEL BALL
              position: 'relative',
              zIndex: 3,
              backgroundColor: travelBallColor,
              width: travelBallWidHi,
              height: travelBallWidHi,
              borderRadius: travelBallWidHi/2,
              top: circleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [-travelBallWidHi/2, travelBallWidHi/2]
              }),
              transform: [
                {translateY: circleAnimation.interpolate({
                  inputRange: inputRange,
                  outputRange: youtputRangeIn
                })},
                {translateX: circleAnimation.interpolate({
                  inputRange: inputRange,
                  outputRange: xoutputRangeIn
                })},
              ],
            }}>
            </Animated.View>
            <View style={{  // ==> TOP OUTER TICK
              position: 'absolute',
              zIndex: 2,
              top: -10,
              backgroundColor: 'white',
              width: 10,
              height: 10,
              borderRadius: 5,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              transform: [
                {rotate: '-90deg'}
              ],
            }}>
            </View>
            <View style={{  // ==> BOTTOM OUTER TICK
              position: 'absolute',
              zIndex: 2,
              bottom: -10,
              backgroundColor: 'white',
              width: 10,
              height: 10,
              borderRadius: 5,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              transform: [
                {rotate: '90deg'}
              ],
            }}>
            </View>
            <Animated.View style={{  // ==> OUTER CIRCLE BORDER
              position: 'absolute',
              zIndex: 1,
              width: circleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [outercircleMinWidth, outercircleMaxWidth],
              }),
              height: circleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [outercircleMinWidth, outercircleMaxWidth],
              }),
              borderRadius: circleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [outercircleMinWidth/2, outercircleMaxWidth/2]
              }),
              borderWidth: 5,
              borderColor: circleBorderColor,
            }}>
            </Animated.View>
            <Animated.Text style={{  // ==> INNER TEXT
              position: 'absolute',
              zIndex: 2,
              fontSize: circleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [fontSizeMin, fontSizeMax],
              }),
            }}>
              breathe in
            </Animated.Text>
          </Animated.View>
        </View>
      );
    }
    // <========== END OF BREATHE IN VIEWS ===========>
    else {
      animationStop()
      // STATIC VIEW WHEN COMPONENT IS PAUSED OR STOPPED
      return (
        <View>
          <View style={{
            height: breathorbMaxWidth,
            width: breathorbMaxWidth,
            borderRadius: breathorbMaxWidth/2,
            backgroundColor: breathOrbMaxColor,
            justifyContent: 'center', // centers along y-axis
          }}>
            <Text style={{
              fontSize: fontSizeMax,
              textAlign: 'center', // centers text along x-axis
            }}>
              just breathe
            </Text>
          </View>
        </View>
      )
    }
  }
}

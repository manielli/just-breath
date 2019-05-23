import React from 'react';
import { StyleSheet, View } from 'react-native';
import StartStopPauseButton from './StartStopPause';
import BreathTimer from './BreathTimer';
import SessionTimer from './SessionTimer';
import DurationSetter from './DurationSetter';
import BreathCircle from './BreathCircle';
import BreathSound from './BreathSound';

export default class MainComponent extends React.Component {

  state = {
    duration: 5, // default to 6 breaths / min
    startstoppause: "stopped",
    incdec: -1, // defualt to breath out 1st breath
  };

  actionHandler = (startstoppause) => {
    if(startstoppause === "start") {
      this.setState({
        startstoppause: "started",
      })
    } else if(startstoppause === "stop") {
      this.setState({
        startstoppause: "stopped",
        // incdec: -1,
      })
      } else if(startstoppause === "pause") {
        this.setState({
          startstoppause: "paused",
        })
    }
  };

  durationUpdater = (newduration) => {
    this.setState(
      { duration: newduration },
    )
  }

  storeIncDec = (incdec) => {
    this.setState(
      { incdec: incdec },
    )
  }

  render() {
    return (
      <View style={styles.container}>

        <BreathTimer
          sendIncDec={this.storeIncDec}
          duration={this.state.duration}
          startstoppause={this.state.startstoppause}
        />
        
        <SessionTimer
          startstoppause={this.state.startstoppause}
        />

        <BreathCircle
          duration={this.state.duration}
          incDec={this.state.incdec}
          startstoppause={this.state.startstoppause}
        />

        <StartStopPauseButton
          actionFunction={this.actionHandler}
          startstoppause={this.state.startstoppause}
        />

        <DurationSetter
          durationUpdater={this.durationUpdater}
          duration={this.state.duration}
          startstoppause={this.state.startstoppause}
        />

        <BreathSound
          incdec={this.state.incdec}
          startstoppause={this.state.startstoppause}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#febfe8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

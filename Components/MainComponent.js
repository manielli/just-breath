import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartStopPauseButton from './StartStopPause';
import BreathTimer from './BreathTimer';
import SessionTimer from './SessionTimer';
import DurationSetter from './DurationSetter';
import BreathCircle from './BreathCircle';
import BreathSound from './BreathSound';

export default class MainComponent extends React.Component {

  state = {
    duration: 5,
    stopped: true,
    started: false,
    paused: false,
    incdec: -1,
  };

  actionHandler = (startstoppause) => {
    // console.log("inside actionHandler in MainComponent", startstoppause)
    if(startstoppause === "start") {
      this.setState(
        { started: true, stopped: false, paused: false, },
        // ()=>{console.log("inside actionHandler START in MainComponent", this.state)}
      )
    } else if(startstoppause === "stop") {
      this.setState(
        { started: false, stopped: true, paused: false, },
        // ()=>{console.log("inside actionHandler STOP in MainComponent", this.state)}
      )
    } else if(startstoppause === "pause") {
      this.setState(
        { started: false, stopped: false, paused: true, },
        // ()=>{console.log("inside actionHandler PAUSE in MainComponent", this.state)}
      )
    }
  };

  durationUpdater = (newduration) => {
    this.setState(
      { duration: newduration },
      // ()=>console.log("inside durationUpdater", this.state.duration)
    )
  }

  storeIncDec = (incdec) => {
    this.setState(
      { incdec: incdec },
      ()=>console.log("inside storeIncDec", this.state.incdec)
    )
  }

  render() {
    return (
      <View style={styles.container}>

        <BreathTimer
          duration={this.state.duration - 1}
          started={this.state.started}
          stopped={this.state.stopped}
          paused={this.state.paused}
          sendIncDec={this.storeIncDec}
        />

        <SessionTimer
          started={this.state.started}
          stopped={this.state.stopped}
          paused={this.state.paused}
          incdec={this.state.incdec}
        />

        <BreathCircle
          duration={this.state.duration}
          incDec={this.state.incdec}
          started={this.state.started}
        />

        <StartStopPauseButton
          actionFunction={this.actionHandler}
          started={this.state.started}
          stopped={this.state.stopped}
          paused={this.state.paused}
        />

        <DurationSetter
          durationUpdater={this.durationUpdater}
          duration={this.state.duration}
          started={this.state.started}
          stopped={this.state.stopped}
          paused={this.state.paused}
        />

        <BreathSound
          incdec={this.state.incdec}
          started={this.state.started}
          stopped={this.state.stopped}
          paused={this.state.paused}
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

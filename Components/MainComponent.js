import React from 'react';
import { AppState, StyleSheet, View } from 'react-native';
import StartStopPauseButton from './StartStopPause';
import BreathTimer from './BreathTimer';
import SessionTimer from './SessionTimer';
import DurationSetter from './DurationSetter';
import BreathCircle from './BreathCircle';
import BreathSound from './BreathSound';

export default class MainComponent extends React.Component {

  state = {
    duration: 5, // default 6 breaths per min
    startstoppause: "stopped",
    incdec: -1, // breathe out 1st breath
    appState: AppState.currentState,
  };

  componentDidMount() {
     // ADD AppState EventListener
     AppState.addEventListener('change', this._handleAppStateChange);
     console.log(this.state.appState);
  }

  componentWillUnmount() {
    // REMOVE AppState EventListener  
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if ( this.state.appState.match(/inactive|background/) && nextAppState === 'active' ) {
      console.log('App has come to the foreground!');
      this.setState({appState: nextAppState});
    } else {
      console.log('App has moved to the background!');
      this.setState({startstoppause: "paused", appState: nextAppState});
    };
  }

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

  updateIncDec = (incdec) => {
    this.setState(
      { incdec: incdec },
    )
  }

  render() {
    return (
      <View style={styles.container}>

        <BreathSound
          incdec={this.state.incdec}
          duration={this.state.duration}
          startstoppause={this.state.startstoppause}
        />

        <SessionTimer
          startstoppause={this.state.startstoppause}
        />

        <BreathTimer
          duration={this.state.duration}
          incdecUpdater={this.updateIncDec}
          startstoppause={this.state.startstoppause}
        />
        
        <BreathCircle
          duration={this.state.duration}
          incdec={this.state.incdec}
          startstoppause={this.state.startstoppause}
        />

        <StartStopPauseButton
          actionFunction={this.actionHandler}
          startstoppause={this.state.startstoppause}
        />

        <DurationSetter
          duration={this.state.duration}
          durationUpdater={this.durationUpdater}
          startstoppause={this.state.startstoppause}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // <== shorthand for flex-grow, flex-shrink, and flex-basis
    padding: 40,
    backgroundColor: '#febfe8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

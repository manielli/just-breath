import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartStopPauseButton from './StartStopPause';

export default class MainComponent extends React.Component {

  state = {
    duration: 5,
    stopped: true,
    started: false,
    paused: false
  };

  actionHandler = (startstoppause) => {
    console.log("inside actionHandler in MainComponent", startstoppause)
    if(startstoppause === "start") {
      this.setState({ started: true, stopped: false, paused: false }, ()=>{console.log("inside actionHandler in MainComponent", this.state)}
      )
    } else if(startstoppause == "stop") {
      this.setState( (prevState) => ({ started: false, stopped: true, paused: false })
      )
    } else if(startstoppause == "pause") {
      this.setState( (prevState) => ({ started: false, stopped: false, paused: true })
      )
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          BREATH CIRCLE GOES HERE
        </Text>
        <StartStopPauseButton actionFunction={this.actionHandler}/>
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
  text: {
    fontSize: 40,
  }
});

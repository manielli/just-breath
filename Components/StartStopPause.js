import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default class StartStopPauseButton extends React.Component {

  _onStartPressButton = () => {
    this.props.actionFunction("start")
    Alert.alert('Started!')
  }

  _onPausePressButton = () => {
    this.props.actionFunction("pause")
    Alert.alert('Paused!')
  }

  _onStopPressButton = () => {
    this.props.actionFunction("stop")
    Alert.alert('Stopped!')
  }
  render() {
    if(this.props.started === true) {
      return (
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPausePressButton}
            title="PAUSE"
            color="#841584"
          />
          <Button
            onPress={this._onStopPressButton}
            title="STOP"
          />
        </View>
      )
    }
    else if(this.props.stopped === true || this.props.paused === true) {
      return (
        <View style={styles.buttonContainer}>
          <View style={styles.startbuttonContainer}>
            <Button
              onPress={this._onStartPressButton}
              title="START"
              color="#841584"
            />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20,
  },
  startbuttonContainer: {
    backgroundColor: '#feefb9',
  }
});

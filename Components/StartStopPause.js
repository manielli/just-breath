import React from 'react';
import { Alert, Button, StyleSheet, View, TouchableOpacity, Image } from 'react-native';

export default class StartStopPauseButton extends React.Component {

  _onStartPressButton = () => {
    this.props.actionFunction("start")
    // Alert.alert('Deep Breaths!')
  }

  _onPausePressButton = () => {
    this.props.actionFunction("pause")
    // Alert.alert('Paused Breath')
  }

  _onStopPressButton = () => {
    this.props.actionFunction("stop")
    // Alert.alert('Stopped!')
  }
  render() {
    // if(this.props.started === true) {
    if(this.props.startstoppause === "started") {
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
    // https://stackoverflow.com/questions/45263904/how-to-define-image-as-a-background-button
    // else if(this.props.stopped === true || this.props.paused === true) {
    else if(this.props.startstoppause === "stopped" || "paused") {
      return (
        <View style={styles.buttonContainer}>
          <View style={styles.startbuttonContainer}>
            <TouchableOpacity
              onPress={this._onStartPressButton}
              style={styles.touchable}
            >
              <Image
                source={require("../Assets/play-button-white.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    margin: 20,
  },
  startbuttonContainer: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#d0f2ff',
  },
  touchable: {
    left: 2,
  },
});

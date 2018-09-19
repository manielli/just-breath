import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default class StartStopPauseButton extends React.Component {
  _onStartPressButton = () => {
    console.log("inside _onStartPressButton")
    this.props.actionFunction("start")
    Alert.alert('Started!')
  }
  _onStopPressButton() {
    this.props.actionFunction("stop")
    Alert.alert('Stopped!')
  }
  render() {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.startbuttonContainer}>
          <Button
            onPress={this._onStartPressButton}
            title="START"
            color="#841584"
          />
        </View>
        <Button
          onPress={this._onStopPressButton}
          title="STOP"
        />
      </View>
    );
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

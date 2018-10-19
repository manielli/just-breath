import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SessionTimer extends React.Component {
  state = {
    time: "0:00",
    isOn: false,
    start: 0,
  }
  render() {
    return (
      <View style={styles.sessionTimer}>
        <Text style={styles.timerText}>
          0{this.state.time}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sessionTimer: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 20,
  },
  timerText: {
    fontSize: 40,
  }
});

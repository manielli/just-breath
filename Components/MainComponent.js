import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MainComponent extends React.Component {

  state = {
    duration: 5,
    started: false,
    stopped: true,
    paused: false
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          WELCOME TO JUST BREATH..NOW TAKE A DEEP BREATH
        </Text>
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

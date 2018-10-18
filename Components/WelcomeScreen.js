import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { createStackNavigator, } from 'react-navigation';
import breatheSound from './BreatheSound';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    breatheSound.loadAsync(
      require("../Assets/breathe1.wav"),
      initialStatus = { shouldPlay: false, isLooping: true, },
      onPlaybackStatusUpdate = null,
      downloadFirst = true,
      console.log("playing sound!"),
    )
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          WELCOME TO JUST BREATHE...   NOW TAKE A DEEP BREATH
        </Text>
        <Button
          title="Push to start breathing"
          onPress={ () => this.props.navigation.navigate('Main') }
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
  text: {
    fontSize: 40,
  }
});

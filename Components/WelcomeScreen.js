import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          WELCOME TO JUST BREATHE... NOW TAKE A DEEP BREATH
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#febfe8',
  },
  text: {
    textAlign: 'left',
    lineHeight: 50,
    paddingRight: '15%',
    paddingLeft: '15%',
    paddingBottom: '10%',
    fontSize: 40,
  }
});

import React from 'react';
import { Dimensions, StyleSheet, Button, View, Text } from 'react-native';
import { LinearGradient } from 'expo';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    let {height, width} = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#febfe8', '#b3b8ff']}
          start={[0.5, 0]}
          end={[0.5, 1]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            width: width,
            height: height,
          }}
        />
        <Text style={styles.text}>
          {`WELCOME TO JUST BREATHING...\n\nNOW TAKE A DEEP BREATH`}
        </Text>
        <Button
          title="Push to start breathing"
          onPress={ () => this.props.navigation.navigate('Main') }
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#febfe8',
  },
  text: {
    textAlign: 'left',
    lineHeight: 50,
    paddingRight: '10%',
    paddingLeft: '10%',
    paddingBottom: '10%',
    fontSize: 40,
  }
});

import React from 'react';
import { Alert, Slider, TouchableHighlight, StyleSheet, Text, View } from 'react-native';

export default class DurationSetter extends React.Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onSliderChange(value) {
    this.props.durationUpdater(value)
    Alert.alert(`Changed breath rate to ${value *2} seconds per breath, which is ${Math.floor(60/(value *2))} breaths/min`)
 }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Duration Setter</Text>
          </View>
        </TouchableHighlight>
        <Slider
          step={2} // <== Step value of the slider
          maximumValue={8}
          minimumValue={3}
          onValueChange={this._onSliderChange.bind(this)} // <== Callback continuously called while the user is dragging the slider
          value={this.props.duration} // <== INITIAL VALUE of slider

        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#b7ceff'
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 20,
  }
});

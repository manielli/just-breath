import React from 'react';
import { Alert, Slider, StyleSheet, Text, View } from 'react-native';

export default class DurationSetter extends React.Component {

  _onSliderChange(value) {
    this.props.durationUpdater(value)
    Alert.alert(`Changed breath rate to ${value *2} seconds per breath, which is ${Math.floor(60/(value *2))} breaths/min`)
 }

  render() {
    if(this.props.started === true ) {
      return null
    }
    else {
      return (
        <View style={styles.container}>
          <Text style={styles.durationText}>Set Rate of Breath:</Text>
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
}


const styles = StyleSheet.create({
  container: {
    width: 300,
  },
  durationText: {
    fontSize: 20,
  },
});

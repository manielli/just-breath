import React from 'react';
import { Slider, StyleSheet, Text, View } from 'react-native';

export default class DurationSetter extends React.Component {

  _onSliderChange(value) {
    this.props.durationUpdater(value)
 }

  render() {
    let rate = (60/(this.props.duration * 2)).toFixed(1) // <== rounds number to .1 decimal
    
    if(this.props.startstoppause === "started" ) {
      return null
    }
    else {
      return (
        <View style={styles.container}>
          <Text style={styles.durationText}>Set Rate of Breath:</Text>
          <Text style={styles.rateText}> {rate} breaths/min</Text>
          <Slider
            step={2} // <== Step value of the slider
            minimumValue={3} // <== Far LEFT value
            maximumValue={9} // <== Far RIGHT value
            onValueChange={this._onSliderChange.bind(this)} // <== Callback continuously called while the user is dragging the slider
            value={this.props.duration} // <== Current value of slider
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    margin: 20,
  },
  durationText: {
    fontSize: 20,
  },
  rateText: {
    fontSize: 12,
  },
});

import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default class SessionTimer extends React.Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 55,
    captures: null,
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.startstoppause === "started") {
      // this 👇 prevents default behaviour of componentWillReceiveProps
      if(nextProps.incdec != this.props.incdec) {
        return null
        // console.log("do nothing")
      }
      else {
        this.timer = setInterval( () => {
          if(this.state.seconds >= 59) {
            this.setState((prevState) => ({ minutes: prevState.minutes + 1, seconds: -1}));
          }
          if(this.state.minutes >= 60) {
            this.setState((prevState) => ({ hours: prevState.hours + 1, minutes: 0}));
          }
          else {
            this.setState((prevState) => ({ seconds: prevState.seconds + 1}))
          }
        }, 1000);
      }
    }
    if(nextProps.startstoppause === "paused") {
      clearInterval(this.timer);
    }
    // the != below eliminates the behavior of triggering these Alerts to fire when moving the BreatheRate slider
    if(nextProps.startstoppause === "stopped" && nextProps.startstoppause != this.props.startstoppause) { // checks if we are transitioning state of startstoppause
      // RESETS SessionTimer
      this.setState({ 
        hours: 0, 
        minutes: 0, 
        seconds: 0,
      });
      clearInterval(this.timer);
      // DISPLAY ALERTS to the user when they are done breathing
      if(this.state.hours < 1) {
        if(this.state.minutes < 1) {
          if(this.state.seconds <= 1) {
            Alert.alert(`You focused on your breath for ${this.state.seconds} second!`)
          }
          else{
            Alert.alert(`You focused on your breath for ${this.state.seconds} seconds!`)
          }
        }
        else if(this.state.minutes === 1){
          if(this.state.seconds <= 1) {
            Alert.alert(`You focused on your breath for ${this.state.minutes} minute and ${this.state.seconds} second!`)
          }
          else{
            Alert.alert(`You focused on your breath for ${this.state.minutes} minute and ${this.state.seconds} seconds!`)
          }
        }
        else{
          if(this.state.seconds <= 1) {
            Alert.alert(`You focused on your breath for ${this.state.minutes} minutes and ${this.state.seconds} second!`)
          }
          else{
            Alert.alert(`You focused on your breath for ${this.state.minutes} minutes and ${this.state.seconds} seconds!`)
          }
        }
      }
      else if (this.state.hours === 1){
        if(this.state.minutes < 1) {
          if(this.state.seconds <= 1) {
            Alert.alert(`You focused on your breath for 1 hour and ${this.state.seconds} second!`)
          }
          else{
            Alert.alert(`You focused on your breath for 1 hour and ${this.state.seconds} seconds!`)
          }
        }
        else if(this.state.minutes === 1){
          if(this.state.seconds <= 1) {
            Alert.alert(`You focused on your breath for 1 hour, ${this.state.minutes} minute and ${this.state.seconds} second!`)
          }
          else{
            Alert.alert(`You focused on your breath for 1 hour, ${this.state.minutes} minute and ${this.state.seconds} seconds!`)
          }
        }
        else{
          if(this.state.seconds <= 1) {
            Alert.alert(`You focused on your breath for 1 hour, ${this.state.minutes} minutes and ${this.state.seconds} second!`)
          }
          else{
            Alert.alert(`You focused on your breath for 1 hour, ${this.state.minutes} minutes and ${this.state.seconds} seconds!`)
          }
        }
      }
      else{
        if(this.state.minutes < 1) {
          if(this.state.seconds <= 1) {
            Alert.alert(`You focused on your breath for ${this.state.hours} hours and ${this.state.seconds} second!`)
          }
          else{
            Alert.alert(`You focused on your breath for ${this.state.hours} hours and ${this.state.seconds} seconds!`)
          }
        }
        else if(this.state.minutes === 1){
          if(this.state.seconds <= 1) {
            Alert.alert(`You focused on your breath for ${this.state.hours} hours, ${this.state.minutes} minute and ${this.state.seconds} second!`)
          }
          else{
            Alert.alert(`You focused on your breath for ${this.state.hours} hours, ${this.state.minutes} minute and ${this.state.seconds} seconds!`)
          }
        }
        else{
          if(this.state.seconds <= 1) {
            Alert.alert(`You focused on your breath for ${this.state.hours} hours, ${this.state.minutes} minutes and ${this.state.seconds} second!`)
          }
          else{
            Alert.alert(`You focused on your breath for ${this.state.hours} hours, ${this.state.minutes} minutes and ${this.state.seconds} seconds!`)
          }
        }
      } // END OF IF STATEMENTS FOR DISPLAYING TOTAL SESSION TIME
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    if(this.state.minutes < 10 && this.state.seconds >= 10) {
      return (
        <View style={styles.sessionTimer}>
          <Text style={styles.timerText}>
            {this.state.hours + ":" + 0 + this.state.minutes + ":" + this.state.seconds}
          </Text>
        </View>
      )
    }
    if(this.state.minutes >= 10 && this.state.seconds >= 10) {
      return (
        <View style={styles.sessionTimer}>
          <Text style={styles.timerText}>
            {this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds}
          </Text>
        </View>
      )
    }
    if(this.state.minutes >= 10 && this.state.seconds < 10) {
      return (
        <View style={styles.sessionTimer}>
          <Text style={styles.timerText}>
            {this.state.hours + ":" + this.state.minutes + ":" + 0 + this.state.seconds}
          </Text>
        </View>
      )
    }
    if(this.state.minutes < 10 && this.state.seconds <= 10) {
      return (
        <View style={styles.sessionTimer}>
          <Text style={styles.timerText}>
            {this.state.hours + ":" + 0 + this.state.minutes + ":" + 0 + this.state.seconds}
          </Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  sessionTimer: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 10,
  },
  timerText: {
    fontSize: 20,
    width: 100,
  }
});

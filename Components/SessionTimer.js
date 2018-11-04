import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import formatDuration from 'format-duration';

export default class SessionTimer extends React.Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    captures: null,
  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.started === true) {
      // this 👇 prevents default behaviour of componentWillReceiveProps
      if(nextProps.incdec != this.props.incdec) {
        return null
        // console.log("do nothing")
      }
      else {
        this.timer = setInterval( () => {
          if(this.state.seconds >= 59) {
            this.setState((prevState) => ({ minutes: prevState.minutes + 1, seconds: 0}));
          }
          if(this.state.minutes >= 60) {
            this.setState((prevState) => ({ hours: prevState.hours + 1, minutes: 0}));
          }
          this.setState((prevState) => ({ seconds: prevState.seconds + 1}))
        }, 1000);
      }
    }
    if(nextProps.paused === true) {
      clearInterval(this.timer);
    }
    // the non-equality operator below eliminates the behavior of triggering these Alerts to fire when moving the Breathe Rate slider
    if(nextProps.stopped === true && nextProps.stopped != this.props.stopped) {
      // RESETS session timer and clears the timer interval
      this.setState((prevState) => ({ hours: 0, minutes: 0, seconds: 0,  }));
      clearInterval(this.timer);
      // IF statements to dispaly ALERTS to the user in proper grammar for how long they breathed
      if(this.state.hours < 1) {
        if(this.state.minutes < 1) {
          if(this.state.seconds <= 1) {
            Alert.alert(`You meditated for ${this.state.seconds} second!`)
          }
          else{
            Alert.alert(`You meditated for ${this.state.seconds} seconds!`)
          }
        }
        else if(this.state.minutes === 1){
          if(this.state.seconds <= 1) {
            Alert.alert(`You meditated for ${this.state.minutes} minute and ${this.state.seconds} second!`)
          }
          else{
            Alert.alert(`You meditated for ${this.state.minutes} minute and ${this.state.seconds} seconds!`)
          }
        }
        else{
          if(this.state.seconds <= 1) {
            Alert.alert(`You meditated for ${this.state.minutes} minutes and ${this.state.seconds} second!`)
          }
          else{
            Alert.alert(`You meditated for ${this.state.minutes} minutes and ${this.state.seconds} seconds!`)
          }
        }
      }
      else if (this.state.hours === 1){
        if(this.state.minutes < 1) {
          if(this.state.seconds <= 1) {
            Alert.alert(`You meditated for 1 hour and ${this.state.seconds} second!`)
          }
          else{
            Alert.alert(`You meditated for 1 hour and ${this.state.seconds} seconds!`)
          }
        }
        else if(this.state.minutes === 1){
          if(this.state.seconds <= 1) {
            Alert.alert(`You meditated for 1 hour, ${this.state.minutes} minute and ${this.state.seconds} second!`)
          }
          else{
            Alert.alert(`You meditated for 1 hour, ${this.state.minutes} minute and ${this.state.seconds} seconds!`)
          }
        }
        else{
          if(this.state.seconds <= 1) {
            Alert.alert(`You meditated for 1 hour, ${this.state.minutes} minutes and ${this.state.seconds} second!`)
          }
          else{
            Alert.alert(`You meditated for 1 hour, ${this.state.minutes} minutes and ${this.state.seconds} seconds!`)
          }
        }
      }
      else{
        if(this.state.minutes < 1) {
          if(this.state.seconds <= 1) {
            Alert.alert(`You meditated for ${this.state.hours} hours and ${this.state.seconds} second!`)
          }
          else{
            Alert.alert(`You meditated for ${this.state.hours} hours and ${this.state.seconds} seconds!`)
          }
        }
        else if(this.state.minutes === 1){
          if(this.state.seconds <= 1) {
            Alert.alert(`You meditated for ${this.state.hours} hours, ${this.state.minutes} minute and ${this.state.seconds} second!`)
          }
          else{
            Alert.alert(`You meditated for ${this.state.hours} hours, ${this.state.minutes} minute and ${this.state.seconds} seconds!`)
          }
        }
        else{
          if(this.state.seconds <= 1) {
            Alert.alert(`You meditated for ${this.state.hours} hours, ${this.state.minutes} minutes and ${this.state.seconds} second!`)
          }
          else{
            Alert.alert(`You meditated for ${this.state.hours} hours, ${this.state.minutes} minutes and ${this.state.seconds} seconds!`)
          }
        }
      } // END OF IF STATEMENTS FOR DISPLAYING BREATHE SESSION TIME
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    let time = Math.floor(this.state.now - this.state.start)
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

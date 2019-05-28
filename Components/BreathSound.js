import React from 'react';

export default class BreathSound extends React.Component {

  state = {
    shortinSound: new Expo.Audio.Sound(),
    shortoutSound: new Expo.Audio.Sound(),
    midinSound: new Expo.Audio.Sound(),
    midoutSound: new Expo.Audio.Sound(),
    seveninSound: new Expo.Audio.Sound(),
    sevenoutSound: new Expo.Audio.Sound(),
    longinSound: new Expo.Audio.Sound(),
    longoutSound: new Expo.Audio.Sound(),
  }

  componentDidMount() {
    // ==> SHORT sounds
    this.state.shortinSound.loadAsync(
      require("../Assets/short_in_breath.wav"),
      initialStatus = { shouldPlay: false, isLooping: false, },
      onPlaybackStatusUpdate = null,
      downloadFirst = true,
    ).catch((error) => {console.log("an error occurred loading the shortinSound ===>", error)})
  
    this.state.shortoutSound.loadAsync(
      require("../Assets/short_out_breath.wav"),
      initialStatus = { shouldPlay: false, isLooping: false, },
      onPlaybackStatusUpdate = null,
      downloadFirst = true,
    ).catch((error) => {console.log("an error occurred loading the shortoutSound ===>", error)})

    // ==> MID sounds
    this.state.midinSound.loadAsync(
      require("../Assets/5_in_breath.wav"),
      initialStatus = { shouldPlay: false, isLooping: false, },
      onPlaybackStatusUpdate = null,
      downloadFirst = true,
    ).catch((error) => {console.log("an error occurred loading the 5inSound ===>", error)})
  
    this.state.midoutSound.loadAsync(
      require("../Assets/5_out_breath.wav"),
      initialStatus = { shouldPlay: false, isLooping: false, },
      onPlaybackStatusUpdate = null,
      downloadFirst = true,
    ).catch((error) => {console.log("an error occurred loading the 5outSound ===>", error)})

    // ==> 7 SECOND sounds
    this.state.seveninSound.loadAsync(
      require("../Assets/7_in_breath.wav"),
      initialStatus = { shouldPlay: false, isLooping: false, },
      onPlaybackStatusUpdate = null,
      downloadFirst = true,
    ).catch((error) => {console.log("an error occurred loading the 5inSound ===>", error)})
  
    this.state.sevenoutSound.loadAsync(
      require("../Assets/7_out_breath.wav"),
      initialStatus = { shouldPlay: false, isLooping: false, },
      onPlaybackStatusUpdate = null,
      downloadFirst = true,
    ).catch((error) => {console.log("an error occurred loading the 5outSound ===>", error)})
    
    // ===> LONG sounds
    this.state.longinSound.loadAsync(
      require("../Assets/breathe_1st_note.wav"),
      initialStatus = { shouldPlay: false, isLooping: false, },
      onPlaybackStatusUpdate = null,
      downloadFirst = true,
    ).catch((error) => {console.log("an error occurred loading the longinSound ===>", error)})
    
    this.state.longoutSound.loadAsync(
      require("../Assets/breathe_2nd_note.wav"),
      initialStatus = { shouldPlay: false, isLooping: false, },
      onPlaybackStatusUpdate = null,
      downloadFirst = true,
    ).catch((error) => {console.log("an error occurred loading the longoutSound ===>", error)})
 
    
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.incdec === -1 && nextProps.startstoppause === "started") {
      if (this.props.duration === 3) {
        this.state.shortoutSound.replayAsync()
        .catch((error) => {console.log("an error occurred playing shortoutSound ===> app was ejected while playing sound ===>", error);})
      } else if (this.props.duration === 5) {
        this.state.midoutSound.replayAsync()
        .catch((error) => {console.log("an error occurred playing midoutSound ===> app was ejected while playing sound ===>", error);})
      } else if (this.props.duration === 7) {
        this.state.sevenoutSound.replayAsync()
        .catch((error) => {console.log("an error occurred playing sevenoutSound ===> app was ejected while playing sound ===>", error);})
      } else {
        this.state.longoutSound.replayAsync()
        .catch((error) => {console.log("an error occurred playing longoutSound ===> app was ejected while playing sound ===>", error);})
      }
    }
    if (nextProps.incdec === 1 && nextProps.startstoppause === "started") {
      if (this.props.duration === 3) {
        this.state.shortinSound.replayAsync()
        .catch((error) => {console.log("an error occurred playing shortoutSound ===> app was ejected while playing sound ===>", error);})
      } else if (this.props.duration === 5) {
        this.state.midinSound.replayAsync()
        .catch((error) => {console.log("an error occurred playing midoutSound ===> app was ejected while playing sound ===>", error);})
      } else if(this.props.duration === 7) {
        this.state.seveninSound.replayAsync()
        .catch((error) => {console.log("an error occurred playing sevenoutSound ===> app was ejected while playing sound ===>", error);})
      } else {
        this.state.longinSound.replayAsync()
        .catch((error) => {console.log("an error occurred playing longinSound ===> app was ejected while playing sound ===>", error);})
      }
    }

    if (nextProps.startstoppause === "paused") {
      this.state.shortinSound.stopAsync()
      .catch((error) => {console.log("an error occurred pausing the shortinSound ===>", error)});
      this.state.shortoutSound.stopAsync()
      .catch((error) => {console.log("an error occurred pausing the shortoutSound ===>", error)});
      
      this.state.midinSound.stopAsync()
      .catch((error) => {console.log("an error occurred pausing the midinSound ===>", error)});
      this.state.midoutSound.stopAsync()
      .catch((error) => {console.log("an error occurred pausing the midoutSound ===>", error)});
      
      this.state.seveninSound.stopAsync()
      .catch((error) => {console.log("an error occurred pausing the seveninSound ===>", error)});
      this.state.sevenoutSound.stopAsync()
      .catch((error) => {console.log("an error occurred pausing the sevenoutSound ===>", error)});
      
      this.state.longinSound.stopAsync()
      .catch((error) => {console.log("an error occurred pausing the longinSound ===>", error)});
      this.state.longoutSound.stopAsync()
      .catch((error) => {console.log("an error occurred pausing the longoutSound ===>", error)});
    }

    if (nextProps.startstoppause === "stopped") {
      this.state.shortinSound.stopAsync()
      .catch((error) => {console.log("an error occurred stopping the shortinSound ===>", error)});
      this.state.shortoutSound.stopAsync()
      .catch((error) => {console.log("an error occurred stopping the shortoutSound ===>", error)});
      
      this.state.midinSound.stopAsync()
      .catch((error) => {console.log("an error occurred stopping the midinSound ===>", error)});
      this.state.midoutSound.stopAsync()
      .catch((error) => {console.log("an error occurred stopping the midoutSound ===>", error)});
      
      this.state.seveninSound.stopAsync()
      .catch((error) => {console.log("an error occurred stopping the seveninSound ===>", error)});
      this.state.sevenoutSound.stopAsync()
      .catch((error) => {console.log("an error occurred stopping the sevenoutSound ===>", error)});
      
      this.state.longinSound.stopAsync()
      .catch((error) => {console.log("an error occurred stopping the longinSound ===>", error)});
      this.state.longoutSound.stopAsync()
      .catch((error) => {console.log("an error occurred stopping the longoutSound ===>", error)});
    }
  }

  componentWillUnmount() {
    this.state.shortinSound.stopAsync()
    .catch((error) => {console.log("an error occurred Unmouting the shortinSound ===>", error)});
    this.state.shortoutSound.stopAsync()
    .catch((error) => {console.log("an error occurred Unmounting the shortoutSound ===>", error)});
    
    this.state.midinSound.stopAsync()
    .catch((error) => {console.log("an error occurred Unmouting the midinSound ===>", error)});
    this.state.midoutSound.stopAsync()
    .catch((error) => {console.log("an error occurred Unmounting the midoutSound ===>", error)});
    
    this.state.seveninSound.stopAsync()
    .catch((error) => {console.log("an error occurred Unmouting the seveninSound ===>", error)});
    this.state.sevenoutSound.stopAsync()
    .catch((error) => {console.log("an error occurred Unmounting the sevenoutSound ===>", error)});
    
    this.state.longinSound.stopAsync()
    .catch((error) => {console.log("an error occurred Unmouting the longinSound ===>", error)});
    this.state.longoutSound.stopAsync()
    .catch((error) => {console.log("an error occurred Unmounting the longoutSound ===>", error)});
  }

  render() {
    return null
  }
}

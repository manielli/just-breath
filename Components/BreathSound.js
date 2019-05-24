import React from 'react';

export default class BreathSound extends React.Component {

  state = {
    inSound: new Expo.Audio.Sound(),
    outSound: new Expo.Audio.Sound(),
  }

  componentDidMount() {
    this.state.inSound.loadAsync(
      require("../Assets/breathe_1st_note.wav"),
      initialStatus = { shouldPlay: false, isLooping: false, },
      onPlaybackStatusUpdate = null,
      downloadFirst = true,
    ).catch((error) => {
      console.log("an error occurred loading the inSound ===>", error)
    })
    this.state.outSound.loadAsync(
      require("../Assets/breathe_2nd_note.wav"),
      initialStatus = { shouldPlay: false, isLooping: false, },
      onPlaybackStatusUpdate = null,
      downloadFirst = true,
    ).catch((error) => {
      console.log("an error occurred loading the outSound ===>", error)
    })
  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.incdec === -1 && nextProps.startstoppause === "started") {
      this.state.outSound.replayAsync()
      .catch((error) => {
        console.log("an error occurred playing outSound ====> app was ejected while playing sound ===>", error);
      })
    }
    if(nextProps.incdec === 1 && nextProps.startstoppause === "started") {
      this.state.inSound.replayAsync()
      .catch((error) => {
        console.log("an error occurred playing inSound ====> app was ejected while playing sound ===>", error);
      })
    }

    if(nextProps.startstoppause === "paused") {
      this.state.inSound.stopAsync()
      .catch((error) => {
        console.log("an error occurred pausing the inSound ===>", error)
      });
      this.state.outSound.stopAsync()
      .catch((error) => {
        console.log("an error occurred pausing the outSound ===>", error)
      });
    }

    if(nextProps.startstoppause === "stopped") {
      this.state.inSound.stopAsync()
      .catch((error) => {
        console.log("an error occurred stopping the inSound ===>", error)
      });
      this.state.outSound.stopAsync()
      .catch((error) => {
        console.log("an error occurred stopping the outSound ===>", error)
      });
    }
  }

  componentWillUnmount() {
    this.state.inSound.stopAsync()
    .catch((error) => {
      console.log("an error occurred Unmouting the inSound ===>", error)
    });
    this.state.outSound.stopAsync()
    .catch((error) => {
      console.log("an error occurred Unmounting the outSound ===>", error)
    });
  }

  render() {
    return null
  }
}

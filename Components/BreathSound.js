import React from 'react';

export default class BreathSound extends React.Component {

  state = {
    inSound: new Expo.Audio.Sound(),
    outSound: new Expo.Audio.Sound(),
    millis: null,
  }

  // const breathInSound = new Expo.Audio.Sound();

  componentDidMount() {
    this.state.inSound.loadAsync(
      require("../Assets/breathe_1st_note.wav"),
      initialStatus = { shouldPlay: false, isLooping: false, },
      onPlaybackStatusUpdate = null,
      downloadFirst = false,
      // console.log("loading IN sound!"),
    ).catch((error) => {
      // console.log("an error occurred loading the inSound")
    })
    this.state.outSound.loadAsync(
      require("../Assets/breathe_2nd_note.wav"),
      initialStatus = { shouldPlay: false, isLooping: false, },
      onPlaybackStatusUpdate = null,
      downloadFirst = false,
      // console.log("loading OUT sound!"),
    ).catch((error) => {
      // console.log("an error occurred loading the outSound")
    })
  }

  componentWillReceiveProps(nextProps) {
    // if(nextProps.incdec === 1 && nextProps.start === true) {
    if(nextProps.incdec === 1 && nextProps.startstoppause === "started") {
      this.state.inSound.replayAsync()
      .catch((error) => {
        // console.log("an error occurred playing inSound ====> app was ejected while playing sound");
      })
      // console.log("playing IN sound!");
    }
    // if(nextProps.incdec === -1 && nextProps.started === true) {
    if(nextProps.incdec === -1 && nextProps.startstoppause === "started") {
      this.state.outSound.replayAsync()
      .catch((error) => {
        // console.log("an error occurred playing outSound ====> app was ejected while playing sound");
      })
      // console.log("playing OUT sound!");
    }
    if(nextProps.startstoppause === "paused") {
      this.state.inSound.pauseAsync()
      .catch((error) => {
        // console.log("an error occurred stopping the inSound")
      });
      // Want to figure out if I can pause the sound and store the positionMillis to start playback from
      console.log(this.state.inSound.positionMillis)
      this.state.outSound.pauseAsync()
      .catch((error) => {
        // console.log("an error occurred stopping the outSound")
      });
    }
    // if(nextProps.stopped || nextProps.paused === true) {
    if(nextProps.startstoppause === "stopped") {
      this.state.inSound.stopAsync()
      .catch((error) => {
        // console.log("an error occurred stopping the inSound")
      });
      this.state.outSound.stopAsync()
      .catch((error) => {
        // console.log("an error occurred stopping the outSound")
      });
    }
  }

  componentWillUnmount() {
    this.state.inSound.stopAsync()
      .catch((error) => {
        // console.log("an error occurred Unmouting the inSound")
      });
    this.state.outSound.stopAsync()
      .catch((error) => {
        // console.log("an error occurred Unmounting the outSound")
      });
  }

  render() {
    return (null)
  }

}


// const breatheSound = () => {
//   Expo.Audio.Sound.create(
//     require("../Assets/breathe1.wav"),
//     initialStatus = { shouldPlay: true, isLooping: true, },
//     onPlaybackStatusUpdate = null,
//     downloadFirst = true,
//     console.log("playing sound!")
//   )
// }

import React from 'react';

export default class BreathSound extends React.Component {

  state = {
    inSound: new Expo.Audio.Sound(),
    outSound: new Expo.Audio.Sound(),
  }

  // const breathInSound = new Expo.Audio.Sound();

  componentDidMount() {
    this.state.inSound.loadAsync(
      require("../Assets/breath_in_5sec.wav"),
      initialStatus = { shouldPlay: false, isLooping: false, },
      onPlaybackStatusUpdate = null,
      downloadFirst = false,
      // console.log("loading IN sound!"),
    )
    this.state.outSound.loadAsync(
      require("../Assets/breath_out_5sec.wav"),
      initialStatus = { shouldPlay: false, isLooping: false, },
      onPlaybackStatusUpdate = null,
      downloadFirst = false,
      // console.log("loading OUT sound!"),
    )
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.incdec === 1 && nextProps.started === true) {
      this.state.inSound.replayAsync().catch((error) => {
        console.log("an error occurred playing inSound");
      })
      // console.log("playing IN sound!");
    }
    if(nextProps.incdec === -1 && nextProps.started === true) {
      this.state.outSound.replayAsync().catch((error) => {
        console.log("an error occurred playing outSound => app was ejected while playing sound");
      })
      // console.log("playing OUT sound!");
    }
    if(nextProps.stopped || nextProps.paused === true) {
      this.state.inSound.stopAsync();
      this.state.outSound.stopAsync();
    }
  }

  componentWillUnmount() {
    this.state.inSound.stopAsync();
    this.state.outSound.stopAsync();
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

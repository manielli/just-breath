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
      console.log("loading IN sound!"),
    )
    this.state.outSound.loadAsync(
      require("../Assets/breath_out_5sec.wav"),
      initialStatus = { shouldPlay: false, isLooping: false, },
      onPlaybackStatusUpdate = null,
      downloadFirst = false,
      console.log("loading OUT sound!"),
    )
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.incdec === 1) {
      this.state.inSound.replayAsync(console.log("playing IN sound!"))
    }
    if(nextProps.incdec === -1) {
      this.state.outSound.replayAsync(console.log("playing OUT sound!"))
    }
    if(nextProps.stopped || nextProps.paused === true) {
      this.state.inSound.stopAsync();
      this.state.outSound.stopAsync();
    }
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

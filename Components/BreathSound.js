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
    // ==> 3 sec sounds
    this.state.shortinSound.loadAsync(
      require("../Assets/short_in_breath.wav"),
      initialStatus = {
        shouldPlay: false,
        isLooping: false,
      },
      onPlaybackStatusUpdate = null,
      downloadFirst = true,
    ).catch((error) => {
      console.log("an error occurred loading the shortinSound ===>", error)
    })

    this.state.shortoutSound.loadAsync(
      require("../Assets/short_out_breath.wav"),
      initialStatus = {
        shouldPlay: false,
        isLooping: false,
      },
      onPlaybackStatusUpdate = null,
      downloadFirst = true,
    ).catch((error) => {
      console.log("an error occurred loading the shortoutSound ===>", error)
    })

    // ==> 5 sec sounds
    this.state.midinSound.loadAsync(
        require("../Assets/5_in_breath.wav"),
        initialStatus = {
          shouldPlay: false,
          isLooping: false,
        },
        onPlaybackStatusUpdate = null,
        downloadFirst = true,
      ).catch((error) => {
        console.log("an error occurred loading the 5inSound ===>", error)
      })

    this.state.midoutSound.loadAsync(
      require("../Assets/5_out_breath.wav"),
      initialStatus = {
        shouldPlay: false,
        isLooping: false,
      },
      onPlaybackStatusUpdate = null,
      downloadFirst = true,
    ).catch((error) => {
      console.log("an error occurred loading the 5outSound ===>", error)
    })

    // ==> 7 SECOND sounds
    this.state.seveninSound.loadAsync(
      require("../Assets/7_in_breath.wav"),
      initialStatus = {
        shouldPlay: false,
        isLooping: false,
      },
      onPlaybackStatusUpdate = null,
      downloadFirst = true,
    ).catch((error) => {
      console.log("an error occurred loading the 5inSound ===>", error)
    })

    this.state.sevenoutSound.loadAsync(
      require("../Assets/7_out_breath.wav"),
      initialStatus = {
        shouldPlay: false,
        isLooping: false,
      },
      onPlaybackStatusUpdate = null,
      downloadFirst = true,
    ).catch((error) => {
      console.log("an error occurred loading the 5outSound ===>", error)
    })

    // ===> 9 sec sounds
    this.state.longinSound.loadAsync(
      require("../Assets/breathe_1st_note.wav"),
      initialStatus = {
        shouldPlay: false,
        isLooping: false,
      },
      onPlaybackStatusUpdate = null,
      downloadFirst = true,
    ).catch((error) => {
      console.log("an error occurred loading the longinSound ===>", error)
    })

    this.state.longoutSound.loadAsync(
      require("../Assets/breathe_2nd_note.wav"),
      initialStatus = {
        shouldPlay: false,
        isLooping: false,
      },
      onPlaybackStatusUpdate = null,
      downloadFirst = true,
    ).catch((error) => {
      console.log("an error occurred loading the longoutSound ===>", error)
    })
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.incdec === -1 && nextProps.startstoppause === "started") {
      if (this.props.duration === 3 && this.state.shortoutSound._loaded) {
        this.state.shortoutSound.replayAsync()
        .catch((error) => { console.log("an error occurred playing midoutSound ===>", error);})
      } else if (!this.state.shortoutSound._loaded) {
        console.log("NOT LOADED set state to loading")
      }
      if (this.props.duration === 5 && this.state.midoutSound._loaded) {
        this.state.midoutSound.replayAsync()
          .catch((error) => {console.log("an error occurred playing midoutSound ===>", error);})
      } else if (!this.state.midoutSound._loaded) {
        console.log("5 second OUT SOUND NOT LOADED set state to loading")
      }
      if (this.props.duration === 7 && this.state.sevenoutSound._loaded) {
        this.state.sevenoutSound.replayAsync()
          .catch((error) => {
            console.log("an error occurred playing sevenoutSound ===>", error);
          })
      } else if (!this.state.sevenoutSound._loaded) {
        console.log("seven second OUT SOUND NOT LOADED set state to loading")
      }
      if (this.props.duration === 9 && this.state.longoutSound._loaded) {
        this.state.longoutSound.replayAsync()
          .catch((error) => {console.log("an error occurred playing longoutSound ===>", error);})
      } else if (!this.state.longoutSound._loaded) {
        console.log("9 second OUT SOUND NOT LOADED set state to loading")
      }
    }
    if (nextProps.incdec === 1 && nextProps.startstoppause === "started") {
      if (this.props.duration === 3 && this.state.shortinSound._loaded) {
        this.state.shortinSound.replayAsync()
          .catch((error) => {console.log("an error occurred playing midoutSound ===>", error);})
      }  else if (!this.state.shortinSound._loaded) {
        console.log("short in sound NOT LOADED set state to loading")
      }
      if (this.props.duration === 5 && this.state.midinSound._loaded) {
        this.state.midinSound.replayAsync()
          .catch((error) => {console.log("an error occurred playing midoutSound ===>", error);})
      } else if (!this.state.midinSound._loaded) {
        console.log("5 second IN SOUND NOT LOADED set state to loading")
      }
      if (this.props.duration === 7 && this.state.seveninSound._loaded) {
        this.state.seveninSound.replayAsync()
          .catch((error) => {
            console.log("an error occurred playing seveninSound ===>", error);
          })
      } else if (!this.state.seveninSound._loaded) {
        console.log("seven second OUT SOUND NOT LOADED set state to loading")
      } 
     if (this.props.duration === 9 && this.state.longinSound._loaded) {
        this.state.longinSound.replayAsync()
          .catch((error) => {console.log("an error occurred playing longinSound ===>", error);})
      } else if (!this.state.longinSound._loaded) {
        console.log("9 second IN SOUND NOT LOADED set state to loading")
      }
    }

    if (nextProps.startstoppause === "paused") {
      this.state.shortinSound.stopAsync()
        .catch((error) => {
          console.log("an error occurred pausing the shortinSound ===>", error)
        });
      this.state.shortoutSound.stopAsync()
        .catch((error) => {
          console.log("an error occurred pausing the shortoutSound ===>", error)
        });

      this.state.midinSound.stopAsync()
        .catch((error) => {
          console.log("an error occurred pausing the midinSound ===>", error)
        });
      this.state.midoutSound.stopAsync()
        .catch((error) => {
          console.log("an error occurred pausing the midoutSound ===>", error)
        });

      this.state.seveninSound.stopAsync()
        .catch((error) => {
          console.log("an error occurred pausing the seveninSound ===>", error)
        });
      this.state.sevenoutSound.stopAsync()
        .catch((error) => {
          console.log("an error occurred pausing the sevenoutSound ===>", error)
        });

      this.state.longinSound.stopAsync()
        .catch((error) => {
          console.log("an error occurred pausing the longinSound ===>", error)
        });
      this.state.longoutSound.stopAsync()
        .catch((error) => {
          console.log("an error occurred pausing the longoutSound ===>", error)
        });
    }

    if (nextProps.startstoppause === "stopped") {
      this.state.shortinSound.stopAsync()
        .catch((error) => {
          console.log("an error occurred stopping the shortinSound ===>", error)
        });
      this.state.shortoutSound.stopAsync()
        .catch((error) => {
          console.log("an error occurred stopping the shortoutSound ===>", error)
        });

      this.state.midinSound.stopAsync()
        .catch((error) => {
          console.log("an error occurred stopping the midinSound ===>", error)
        });
      this.state.midoutSound.stopAsync()
        .catch((error) => {
          console.log("an error occurred stopping the midoutSound ===>", error)
        });

      this.state.seveninSound.stopAsync()
        .catch((error) => {
          console.log("an error occurred stopping the seveninSound ===>", error)
        });
      this.state.sevenoutSound.stopAsync()
        .catch((error) => {
          console.log("an error occurred stopping the sevenoutSound ===>", error)
        });

      this.state.longinSound.stopAsync()
        .catch((error) => {
          console.log("an error occurred stopping the longinSound ===>", error)
        });
      this.state.longoutSound.stopAsync()
        .catch((error) => {
          console.log("an error occurred stopping the longoutSound ===>", error)
        });
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
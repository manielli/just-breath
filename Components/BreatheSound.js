
// const breatheSound = new Expo.Audio.Sound();
//   try {
//     await breatheSound.loadAsync(require('../Assets/breathe1.aif'),
//       {}
//     );
//     await breatheSound.playAsync();
//     console.log("sound is playing")
//   } catch (error) {
//     console.log("error playing the sound");
//   }

// const breatheSound = new Expo.Audio.Sound();
// breatheSound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
// await breatheSound.loadAsync(require('../Assets/breathe1.aif'), initialStatus);

const breatheSound = new Expo.Audio.Sound();

export default breatheSound;

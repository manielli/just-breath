import React from 'react';
import { createStackNavigator } from 'react-navigation';
import WelcomeScreen from './Components/WelcomeScreen';
import MainComponent from './Components/MainComponent';

const RootStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Main: MainComponent,
  },
  {
    initialRouteName: 'Welcome',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#febfe8',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

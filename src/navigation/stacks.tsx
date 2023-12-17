import React from 'react';

import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import HomeScreen from '../components/modules/Home/HomeScreen';
import {SCREENS} from './constants';
import GameDetailsScreen from '../components/modules/GameDetail/GameDetailsScreen';

function Stack(): JSX.Element {
  const stackNavigator = createSharedElementStackNavigator();

  return (
    <stackNavigator.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SCREENS.HOME_SCREEN}>
      <stackNavigator.Screen
        name={SCREENS.HOME_SCREEN}
        component={HomeScreen}
      />
      <stackNavigator.Screen
        name={SCREENS.GAME_DETAIL_SCREEN}
        component={GameDetailsScreen}
      />
    </stackNavigator.Navigator>
  );
}

export default Stack;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Stack from './stacks';
import {navigationRef} from './actions';

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack />
    </NavigationContainer>
  );
};

export default RootNavigator;

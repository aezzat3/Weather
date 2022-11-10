import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainStack from './Stacks/MainStack';

export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  navigationRef.current
    ? navigationRef.current.navigate(name, params)
    : undefined;
};

export const replace = name => {
  navigationRef.current ? navigationRef.current.replace(name) : undefined;
};

const RootStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <RootStack.Navigator headerMode={'none'}>
      <RootStack.Screen name={'Main'} component={MainStack} />
    </RootStack.Navigator>
  );
};

export default () => (
  <NavigationContainer ref={navigationRef}>
    <RootNavigation />
  </NavigationContainer>
);

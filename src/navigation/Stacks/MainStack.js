import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cities from '../../screens/Cities';
import {common_nav_options} from '../styles';

const MainNav = createStackNavigator();

const MainStack = () => (
  <MainNav.Navigator
    screenOptions={{...common_nav_options, headerTitleAlign: 'left'}}
    headerMode={'screen'}>
    <MainNav.Screen name={'Cities'} component={Cities} />
  </MainNav.Navigator>
);

export default MainStack;

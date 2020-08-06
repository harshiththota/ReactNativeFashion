import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoarding from './src/Authentication/OnBoarding';

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigation = () => {
  return (<AuthenticationStack.Navigator>
    <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
  </AuthenticationStack.Navigator>);
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationNavigation />
    </NavigationContainer>
  );
}

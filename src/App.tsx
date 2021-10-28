import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {InitialScreen} from './screens/Initial';
import {WorkoutFrequencyScreen} from './screens/WorkoutFrequency';
import {SuccessScreen} from './screens/Success';
import {SignUpScreen} from './screens/SignUp';
import {SignInScreen} from './screens/SignIn';
import {NameScreen} from './screens/Name';
import {DateScreen} from './screens/Date';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Screen.InitialScreen} component={InitialScreen} />
        <Stack.Screen name={Screen.DateScreen} component={DateScreen} />
        <Stack.Screen name={Screen.NameScreen} component={NameScreen} />
        <Stack.Screen name={Screen.SignInScreen} component={SignInScreen} />
        <Stack.Screen name={Screen.SignUpScreen} component={SignUpScreen} />
        <Stack.Screen name={Screen.SuccessScreen} component={SuccessScreen} />
        <Stack.Screen
          name={Screen.WorkoutFrequencyScreen}
          component={WorkoutFrequencyScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export enum Screen {
  DateScreen = 'DateScreen',
  InitialScreen = 'InitialScreen',
  NameScreen = 'NameScreen',
  SignInScreen = 'SignInScreen',
  SignUpScreen = 'SignUpScreen',
  SuccessScreen = 'SuccessScreen',
  WorkoutFrequencyScreen = 'WorkoutFrequencyScreen',
}

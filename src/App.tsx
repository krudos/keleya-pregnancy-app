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
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './theme';
// @ts-ignore
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
export enum Screen {
  DateScreen = 'DateScreen',
  InitialScreen = 'InitialScreen',
  NameScreen = 'NameScreen',
  SignInScreen = 'SignInScreen',
  SignUpScreen = 'SignUpScreen',
  SuccessScreen = 'SuccessScreen',
  WorkoutFrequencyScreen = 'WorkoutFrequencyScreen',
}

export type RootStackParamList = {
  [Screen.DateScreen]: {name: string};
  [Screen.InitialScreen]: undefined;
  [Screen.NameScreen]: undefined;
  [Screen.SignInScreen]: undefined;
  [Screen.SignUpScreen]: undefined;
  [Screen.SuccessScreen]: undefined;
  [Screen.WorkoutFrequencyScreen]: undefined;
};
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const RootStack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <PaperProvider
      theme={theme}
      settings={{
        icon: props => <AwesomeIcon {...props} />,
      }}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen
            name={Screen.InitialScreen}
            component={InitialScreen}
          />
          <RootStack.Screen name={Screen.DateScreen} component={DateScreen} />
          <RootStack.Screen name={Screen.NameScreen} component={NameScreen} />
          <RootStack.Screen
            name={Screen.SignInScreen}
            component={SignInScreen}
          />
          <RootStack.Screen
            name={Screen.SignUpScreen}
            component={SignUpScreen}
          />
          <RootStack.Screen
            name={Screen.SuccessScreen}
            component={SuccessScreen}
          />
          <RootStack.Screen
            name={Screen.WorkoutFrequencyScreen}
            component={WorkoutFrequencyScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

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
  [Screen.DateScreen]: undefined;
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
        <RootStack.Navigator>
          <RootStack.Screen
            name={Screen.InitialScreen}
            component={InitialScreen}
            options={{headerShown: false}}
          />
          <RootStack.Screen name={Screen.DateScreen} component={DateScreen} />
          <RootStack.Screen name={Screen.NameScreen} component={NameScreen} />
          <RootStack.Screen
            name={Screen.SignInScreen}
            component={SignInScreen}
            options={{title: '', headerShown: false}}
          />
          <RootStack.Screen
            name={Screen.SignUpScreen}
            component={SignUpScreen}
            options={{title: '', headerShown: false}}
          />
          <RootStack.Screen
            name={Screen.SuccessScreen}
            component={SuccessScreen}
            options={{title: '', headerShown: false}}
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

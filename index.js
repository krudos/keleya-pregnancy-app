/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {
  en,
  // nl,
  registerTranslation,
} from 'react-native-paper-dates';
registerTranslation('en', en);
AppRegistry.registerComponent(appName, () => App);

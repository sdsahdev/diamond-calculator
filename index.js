/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import test from './test';
import { LogBox } from 'react-native';
import RoutesScreens from './Routes/RoutesScreens';
import memoss from './src/memoss';
LogBox.ignoreAllLogs();
// AppRegistry.registerComponent(appName, () => RoutesScreens);
AppRegistry.registerComponent(appName, () => memoss);

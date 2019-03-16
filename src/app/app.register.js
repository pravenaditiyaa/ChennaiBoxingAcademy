import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Initializing', () => require('./app.initializing').default);
  Navigation.registerComponent('Home', () => require('./dashboard/Home').default);
  Navigation.registerComponent('SignIn', () => require('./userAuthentication/SignIn').default);
  Navigation.registerComponent('SignUp', () => require('./userAuthentication/SignUp').default);
  Navigation.registerComponent('Screen2', () => require('./dashboard/Screen2').default);
}

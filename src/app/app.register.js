import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Initializing', () => require('./app.initializing').default);
  Navigation.registerComponent('Home', () => require('./dashboard/Home').default);
  Navigation.registerComponent('SignIn', () => require('./userAuthentication/SignIn').default);
  Navigation.registerComponent('SignUp', () => require('./userAuthentication/SignUp').default);
  Navigation.registerComponent('Screen2', () => require('./dashboard/Screen2').default);
  Navigation.registerComponent('Menu', () => require('./menu/menu').default);
  Navigation.registerComponent('AboutUs', () => require('./menu/aboutus').default);
  Navigation.registerComponent('MyAchievements', () => require('./menu/myachievements').default);
  Navigation.registerComponent('Profile', () => require('./menu/profile').default);
  Navigation.registerComponent('Support', () => require('./menu/support').default);
}

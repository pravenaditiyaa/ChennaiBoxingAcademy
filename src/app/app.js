import { Navigation } from 'react-native-navigation';
import { registerScreens } from './app.register';
registerScreens();

// eslint-disable-next-line no-console
console.ignoredYellowBox = ['Remote debugger'];

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing'
      }
    },
  });
});
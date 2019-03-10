import {Navigation} from 'react-native-navigation';
//import {registerScreens} from './screens/register';
import {registerScreens} from './screens/nav2/screens';
registerScreens();

// eslint-disable-next-line no-console
console.ignoredYellowBox = ['Remote debugger'];

/*
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.']
};

LocaleConfig.defaultLocale = 'fr';
*/

// Navigation.startSingleScreenApp({
//   screen: {
//     screen: 'Menu',
//     title: 'WixCal',
//   },
//   appStyle: {
//     navBarBackgroundColor: '#00adf5',
//     navBarTextColor: 'white',
//     navBarButtonColor: '#ffffff',
//     statusBarTextColorScheme: 'light',
//     autoAdjustScrollViewInsets: true
//   }
// });

// Navigation.setRoot({
//   root: {
//     component: {
//       name: 'Menu'
//     }
//   }
// });

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: 'Menu'
//       }
//     },
//   });
// });


// Navigation.setRoot({
//   root: {
//     bottomTabs: {
//       children: [{
//         stack: {
//           children: [{
//             component: {
//               name: 'Menu'
//             }
//           }]
//         }
//       }]
//     }
//   }
// });

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing'
      }
    },
  });
});
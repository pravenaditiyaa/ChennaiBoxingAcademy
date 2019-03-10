import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Menu', () => require('./menu').default);
  Navigation.registerComponent('Initializing', () => require('./Initializing').default);
  Navigation.registerComponent('Calendars', () => require('./calendars').default);
  Navigation.registerComponent('Agenda', () => require('./agenda').default);
  Navigation.registerComponent('CalendarsList', () => require('./calendarsList').default);
  Navigation.registerComponent('HorizontalCalendarList', () => require('./horizontalCalendarList').default);
}

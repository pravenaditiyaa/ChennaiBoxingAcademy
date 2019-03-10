import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet, Button
} from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class MenuScreen extends React.Component {

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.menu} onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'Calendars',
              }
            });
          }}>
          <Text style={styles.menuText}>Calendars</Text>
        </TouchableOpacity>
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'Calendars',
              }
            });
          }}
          title="View next screen"
        />
        <TouchableOpacity style={styles.menu} onPress={this.onCalendarListPress.bind(this)}>
          <Text style={styles.menuText}>Calendar List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onHorizontalCalendarListPress.bind(this)}>
          <Text style={styles.menuText}>Horizontal Calendar List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onAgendaPress.bind(this)}>
          <Text style={styles.menuText}>Agenda</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onCalendarsPress() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Calendars',
      }
    });
  }

  onCalendarListPress() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'CalendarsList',
      }
    });
    // this.props.navigator.push({
    //   screen: 'CalendarsList',
    //   title: 'Calendar List'
    // });
  }

  onHorizontalCalendarListPress() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Calendars',
      }
    });
  }

  onAgendaPress() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Calendars',
      }
    });
  }
}

const styles = StyleSheet.create({
  menu: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 15,
    borderBottomWidth: 1
  },
  menuText: {
    fontSize: 18
  }
});
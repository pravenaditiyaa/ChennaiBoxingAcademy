import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { goToAuth } from '../navigation/navigation';

export default class MenuScreen extends Component {

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.menu} onPress={this.onMyAchievementsPress.bind(this)}>
          <Text style={styles.menuText}>My Achievements</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onProfilePress.bind(this)}>
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onAboutUsPress.bind(this)}>
          <Text style={styles.menuText}>About us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onSupportPress.bind(this)}>
          <Text style={styles.menuText}>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onLogOutPress.bind(this)}>
          <Text style={styles.menuText}>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onMyAchievementsPress() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'MyAchievements',
      }
    });
  }

  onProfilePress() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Profile',
      }
    });
  }

  onAboutUsPress() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'AboutUs',
      }
    });
  }

  onSupportPress() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Support',
      }
    });
  }

  onLogOutPress() {
    try {
      // await AsyncStorage.removeItem(USER_KEY)
       goToAuth()
     } catch (err) {
       console.log('error signing out...: ', err)
     }
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
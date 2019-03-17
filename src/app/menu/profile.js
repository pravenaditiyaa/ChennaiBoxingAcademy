import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'

export default class Screen2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  static get options() {
    return {
      topBar: {
        title: {
          text: 'Screen 2'
        },
      }
    };
  }
  render() {
    return (
      <View><Text>profile</Text></View>
    )
  }
}

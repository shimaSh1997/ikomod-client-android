import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, ScrollView, Image} from 'react-native';

class NotificationScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'اعلانات',
    drawerIcon: ({tintColor}) => (
      <Image
        source={{uri: 'login'}}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

export default NotificationScreen;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

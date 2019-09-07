import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

class AuthScreen extends Component {
  render() {
    return (
      <View>
        <Text>AuthScreen</Text>
        <Button
          title="Go to Home Screen"
          onPress={() => this.props.navigation.navigate('Drawer')}
        />
      </View>
    );
  }
}

export default AuthScreen;

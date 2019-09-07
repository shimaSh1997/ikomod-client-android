import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

class SecondIntroPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SecondIntroPage</Text>
        <Button
          title="Go to Authentication Screen"
          onPress={() => this.props.navigation.navigate('Auth')}
        />
      </View>
    );
  }
}

export default SecondIntroPage;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

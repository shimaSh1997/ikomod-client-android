import React, {Component} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

class FirstIntroPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>FirstIntroPage</Text>
        <Button
          title="Go to Second Screen"
          onPress={() => this.props.navigation.navigate('Second_Intro')}
        />
      </View>
    );
  }
}

export default FirstIntroPage;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

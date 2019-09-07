import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, ScrollView} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import FirstIntroPage from './screens/FirstIntroPage';
import SecondIntroPage from './screens/SecondIntroPage';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import SafeAreaView from 'react-native-safe-area-view';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import DrawerNavigator from './screens/RightDrawer';

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <DrawerNavigatorItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

//creating Intro Stack
const AppIntroStack = createStackNavigator({
  First_Intro: {
    screen: FirstIntroPage,
  },
  Second_Intro: {
    screen: SecondIntroPage,
  },
});
AppIntroStack.navigationOptions = {
  header: null,
};
//creating Authentication Stack
const AppAuthStack = createStackNavigator({
  Auth: {
    screen: AuthScreen,
  },
});
AppAuthStack.navigationOptions = {
  header: null,
};

// const myDrawerNavigator = createDrawerNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     notification: {
//       screen: NotificationScreen,
//     },
//   },
//   {
//     drawerPosition: 'right',
//     drawerType: 'slide',
//     contentComponent: CustomDrawerContentComponent,
//     contentOptions: {
//       activeTintColor: '#e91e63',
//       itemsContainerStyle: {
//         marginVertical: 0,
//       },
//       iconContainerStyle: {
//         opacity: 1,
//       },
//     },
//   },
// );
// myDrawerNavigator.navigationOptions = {
//   header: null,
// };
//get together all stacks
const Root = createStackNavigator({
  IntroStack: {
    screen: AppIntroStack,
  },
  AuthStack: {
    screen: AppAuthStack,
  },
  // Drawer: {
  //   screen: myDrawerNavigator,
  // },
  Drawer: {
    screen: DrawerNavigator,
  },
});

Root.navigationOptions = {
  header: null,
};

const AppContainer = createAppContainer(Root);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
// const styles = StyleSheet.create({});

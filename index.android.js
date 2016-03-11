/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View
} from 'react-native';

import AppView from './App/Views/AppView';

const styles= StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      paddingTop: 7
    }
})

class TrolleyRiverApp extends Component {
  render() {
    return (
        <View style={styles.container}>
          <AppView />
        </View>
    );
  }
}


AppRegistry.registerComponent('TrolleyHumanTalks', () => TrolleyRiverApp);

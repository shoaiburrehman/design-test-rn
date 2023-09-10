/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Navigation from './src/navigations';
import { Colors } from './src/themes/Colors';

function App() {

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK
  },
});

export default App;

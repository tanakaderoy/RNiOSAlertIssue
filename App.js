/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * format
 * flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Alert, Button} from 'react-native';

const App: () => React$Node = () => {
  const showAlert = () => {
    Alert.alert('Alert', "Hey I'm an Alert!");
    //Now Not Working!!!
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Button onPress={showAlert} title="Show Alert" />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default App;

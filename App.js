/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * format
 * flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Modal,
  Alert,
} from 'react-native';

const App: () => React$Node = () => {
  const [visible, setVisible] = React.useState(false);

  const onShowModal = () => {
    setVisible(true);
  };

  const onCloseBroken = () => {
    setVisible(false);
    Alert.alert('Alert', "Alert won't show");
  };

  const onCloseWorking = () => {
    setVisible(false);
    setTimeout(() => Alert.alert('Alert', 'Works fine'), 10);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text onPress={onShowModal}>Show modal</Text>
      </SafeAreaView>
      <Modal
        animationType="fade"
        visible={visible}
        onRequestClose={onCloseWorking}>
        <View style={styles.container}>
          <Text onPress={onCloseBroken}>Close modal immediately</Text>
          <Text onPress={onCloseWorking}>Close modal with delay</Text>
        </View>
      </Modal>
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

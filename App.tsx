import React, { useState } from 'react';
import { StyleSheet,View, SafeAreaView} from 'react-native';
import QrScnner from './components/QrCodeScanner';

function App() {
  return (
      <View style={styles.container}>
        <QrScnner/>
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
   flex: 1
  },
});
export default App
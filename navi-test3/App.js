import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Apps from './src/App'
export default function App() {
  return (
    <View style={styles.container}>
      <Apps/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

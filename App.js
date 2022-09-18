import React from 'react';
import { StyleSheet, Text, View, Navigator, Image } from 'react-native';

import Main from './Component/Main/main';

export default function App() {
  return (
    <Main />
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


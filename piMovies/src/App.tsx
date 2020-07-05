import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Platform} from 'react-native';

import Routes from './routes';

const App = () => {
  const barStyle = Platform.OS === 'ios' ? 'dark-content' : 'light-content';

  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor="#312e38" />
      <SafeAreaView style={styles.container}>
        <Routes />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

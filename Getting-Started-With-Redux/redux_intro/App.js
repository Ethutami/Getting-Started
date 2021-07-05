/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/Index';
import { StyleSheet, Text, View } from 'react-native';



const App: () => Node = () => {

  return (
    <Provider store={store}>
      <View>
        <Text>Halo Redux</Text>
      </View>
    </Provider>

  );
};

const styles = StyleSheet.create({
 
});

export default App;

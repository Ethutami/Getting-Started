import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import Home from './screen/home'

export default function App() {
  
  return (
    <Provider store={store}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Home />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({});

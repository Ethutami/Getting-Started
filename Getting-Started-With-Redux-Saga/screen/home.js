import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRequest, setLoadingRequest} from '../store/actions';

export default function home() {
  const data = useSelector(state => state.moviesReducer.data);
  const loading = useSelector(state => state.moviesReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingRequest());
    dispatch(fetchRequest());
    setTimeout(()=>{
        dispatch(setLoadingRequest());
    },3000)
  }, []);

  if (loading === true) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size='large' color='black' />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

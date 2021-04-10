import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../styles/colors';

export default function Loader({isLoading}) {
  if (isLoading) {
    return (
      <View
        style={styles.view}>
        <ActivityIndicator color={colors.red} size="large" />
      </View>
    );
  }

  return null;
}
const styles=StyleSheet.create({
  view:{
    position: 'absolute',
    
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height:700,
    backgroundColor:colors.blackOpacity06
  }
})
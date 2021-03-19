import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {rectImage} from '../constants/constants';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width
} from '../styles/responsiveSize';

export default function ImgCardSmall({text, onPress=()=>{},containerStyle={}}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.imgContainer,containerStyle]}>
      <Image source={{uri: rectImage}} style={styles.imgSmall} />
      <View style={styles.imgOverlay} />
      <View style={styles.blurContainer}>
        <Text style={styles.txt}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imgSmall: {height: '100%', width: '100%', borderRadius: 4},
  imgContainer: {
    height: moderateScaleVertical(128),
    width: width * 0.5 - moderateScale(12),
    borderRadius: 4,
    marginBottom: moderateScale(8),
  },
  imgOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  blurContainer: {
    position: 'absolute',
    left: moderateScale(24),
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    right: moderateScale(24),
    backgroundColor: 'rgba(255,255,255,.35)',
    borderRadius: 40,
    height: moderateScaleVertical(30),
  },
  txt: {
    color: colors.white,
    fontFamily: fontFamily.futuraBtHeavy,
  },
});

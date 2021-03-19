import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';
import {
  textScale,
  moderateScale,
  moderateScaleVertical,
} from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import {useNavigation} from '@react-navigation/native';
import {hitSlopProp} from '../styles/commonStyles';

const HeaderWithFilters = ({
  leftIcon = imagePath.back,
  centerTitle,
  textStyle,
  horizontLine = true,
  rightIcon = '',
  onPressLeft,
  onPressRight,
}) => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          ...styles.headerStyle,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{width: moderateScale(70)}}>
          <TouchableOpacity
            hitSlop={hitSlopProp}
            activeOpacity={0.7}
            onPress={
              !!onPressLeft
                ? onPressLeft
                : () => {
                    navigation.goBack();
                  }
            }>
            <Image resizeMode="contain" source={leftIcon} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            ...styles.textStyle,
            ...textStyle,
            marginLeft: moderateScale(12),
            width: moderateScale(150),
          }}>
          {centerTitle}
        </Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image source={imagePath.search} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: moderateScale(12)}}>
            <Image source={imagePath.filter} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={imagePath.locationSmall} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default HeaderWithFilters;
const styles = StyleSheet.create({
  headerStyle: {
    padding: moderateScaleVertical(16),
  },

  textStyle: {
    color: colors.black2Color,
    fontSize: textScale(17),
    lineHeight: textScale(28),
    textAlign: 'center',
    fontFamily: fontFamily.futuraBtHeavy,
  },
});

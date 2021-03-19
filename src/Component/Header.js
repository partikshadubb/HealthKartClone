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

const Header = ({
  leftIcon = imagePath.back,
  centerTitle,
  textStyle,
  horizontLine = true,
  rightIcon = '',
  onPressLeft,
  onPressRight,
  customRight,
  hideRight=true
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
          <View style={{alignItems:'flex-start',minWidth:moderateScale(72)}}>
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
            width: moderateScale(150),
          }}>
          {centerTitle}
        </Text>
        <View style={{alignItems:'flex-end',minWidth:moderateScale(72)}}>
        {!!rightIcon ? (
          <TouchableOpacity onPress={onPressRight}>
            <Image source={rightIcon} />
          </TouchableOpacity>
        ) : !!customRight ? (
          customRight()
        ) : (
         hideRight? <View style={{width: 25}} />:<Image source={imagePath.cartShop}/>
        )}
        </View>
      </View>
    </>
  );
};
export default Header;
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

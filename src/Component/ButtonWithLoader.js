import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import commonStyles from '../styles/commonStyles';
import {moderateVerticalScale} from '../styles/responsiveSize';
import colors from '../styles/colors';
const ButtonWithLoader = ({
  onPress = () => {},
  btnText = '',
  btnTextStyle = {},
  btnStyle = {},
  isLoading = false,
  color = colors.white,
  bgColor ,
  borderColor
}) => {
  return (
    <TouchableOpacity
      style={{ btnStyle,
        ...commonStyles.buttonRect,
        marginTop: moderateVerticalScale(20),
        ...btnStyle, backgroundColor:bgColor,
        borderColor:borderColor,
        color:color
      }}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" color={color} />
      ) : (
        <Text style={{...commonStyles.buttonTextWhite, color, ...btnTextStyle}}>
          {btnText}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonWithLoader;

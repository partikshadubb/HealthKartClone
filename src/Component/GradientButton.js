import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';

const GradientButton = ({
  containerStyle,
  btnStyle = {},
  colorsArray = [colors.btnABlue, colors.btnBBlue],
  borderRadius =4,
  onPress,
  btnText,
  marginTop=0,
  marginBottom=0,
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={{
        ...commonStyles.buttonRect,
        borderWidth: 0,
        marginTop,
        marginBottom,
        ...containerStyle,
      }}
      onPress={onPress}>
      <LinearGradient
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          borderRadius,
          ...btnStyle,
        }}
        colors={colorsArray}>
        <Text style={{...commonStyles.buttonTextWhite, ...textStyle}}>
          {btnText}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

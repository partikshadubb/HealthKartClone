import React from 'react';
import {View, Text, Image} from 'react-native';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import {textScale} from '../styles/responsiveSize';

export default function IconTextRow({
  text,
  icon,
  containerStyle = {},
  textStyle = {},
}) {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', ...containerStyle}}>
      <Image source={icon} />
      <Text
        style={{
          ...commonStyles.mediumFont14,
          fontSize: textScale(12),
          color: colors.white,
          marginLeft: 2,
          opacity: 1,
          ...textStyle,
        }}>
        {text}
      </Text>
    </View>
  );
}

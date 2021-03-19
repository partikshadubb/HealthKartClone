import React from 'react';
import {View, Text, Image} from 'react-native';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import {textScale} from '../styles/responsiveSize';
import {useSelector} from 'react-redux';
export default function IconTextColumn({
  text,
  icon,
  containerStyle = {},
  textStyle = {},
  isActive = false,
  activeStyle = {},
}) {
  const currentTheme = useSelector((state) => state.appTheme);
  const {themeColors, themeLayouts} = currentTheme;
  return (
    <View
      style={[
        {
          alignItems: 'center',
          justifyContent: 'space-between',
          marginRight: 10,
          padding: 10,
          paddingVertical: 10,
          borderRadius: 10,
          ...containerStyle,
        },
        isActive && {backgroundColor: themeColors.themeOpacity20},
      ]}>
      <Image style={{tintColor:isActive?colors.themeColor:colors.textGreyB}} source={icon} />
      <Text
        style={[
          {
            ...commonStyles.mediumFont14,
            color: colors.textGreyB,
            marginLeft: 2,
            opacity: 1,
            marginTop: 4,
            ...textStyle,
          },
          isActive && {color: colors.themeColor, ...activeStyle},
        ]}>
        {text}
      </Text>
    </View>
  );
}

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';

const ListItemHorizontal = ({
  iconLeft,
  iconRight,
  centerHeading,
  centerText,
  onPress = () => {},
  containerStyle = {},
  centerContainerStyle = {},
  centerHeadingStyle = {},
  rightIconStyle={}
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        marginHorizontal: moderateScale(23),
        flexDirection: 'row',
        paddingVertical: moderateScaleVertical(28),
        borderBottomColor: colors.borderLight,
        borderBottomWidth: 1,
        alignItems: 'center',
        ...containerStyle,
        // justifyContent:'space-between'
      }}>
      {iconLeft ? (
        <TouchableOpacity>
          <Image source={iconLeft} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <View
        style={{
          marginHorizontal: moderateScale(20),
          flex: 1,
          ...centerContainerStyle,
        }}>
        <Text
          style={{
            fontSize: textScale(18),
            fontFamily: fontFamily.futuraBtHeavy,
            color: colors.black,
            ...centerHeadingStyle,
          }}>
          {centerHeading}
        </Text>
        {!!centerText && (
          <Text
            style={{
              ...commonStyles.mediumFont14,
              color: colors.grey,
              lineHeight: textScale(20),
              opacity: 0.7,
              fontSize: textScale(13),
              marginTop: moderateScaleVertical(5),
            }}>
            {centerText}
          </Text>
        )}
      </View>
      {iconRight && (
        <TouchableOpacity>
          <Image style={rightIconStyle} source={iconRight} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default ListItemHorizontal;

import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  textScale,
} from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles, {hitSlopProp} from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';

const TextInputWithLabel = ({
  label,
  color,
  onChangeText,
  value,
  active = false,
  secureTextEntry = false,
  rightIcon,
  customTextStyle = {},
  placeholder="",
  borderColor,
  onPress = () => {},
  onPressRightIcon = () => {},
  
  ...rest
}) => {
  let currentColor = active ? colors.themeColor : colors.textGrey;
  return (
    <View style={{marginBottom: moderateVerticalScale(15)}}>
      <Text
        style={{
          ...commonStyles.fontSize14,
          color:color,
          marginBottom: moderateVerticalScale(7),
        }}>
        {label}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          {...rest}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          // onFocus={onFocus}
          style={{
            flex: 1,
            ...styles.textInput,
            borderColor:borderColor,
            ...customTextStyle,
          }}
          onChangeText={onChangeText}
          value={value}
        />
        {!!rightIcon && (
          <TouchableOpacity
            hitSlop={hitSlopProp}
            onPress={onPressRightIcon}
            style={{alignItems: 'center', justifyContent: 'center',marginLeft:6}}>
            <Image source={rightIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};



export default TextInputWithLabel;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: colors.themeMain,
    height: moderateVerticalScale(49),
    fontSize: moderateVerticalScale(17.5),
    fontFamily: fontFamily.regular,
    paddingVertical: 0,
    paddingHorizontal: moderateVerticalScale(16),
    textAlignVertical: 'center',
  },
});

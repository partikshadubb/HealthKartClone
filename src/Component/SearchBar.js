import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';

export default function SearchBar({containerStyle = {}, placeholder = ''}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: moderateScale(16),
        height: moderateScaleVertical(48),
        backgroundColor: colors.white,
        alignItems: 'center',
        ...containerStyle,
      }}>
      <Image style={{opacity: 0.7}} source={imagePath.search} />
      <View style={{flex: 1,marginLeft:10}}>
        <TextInput
          style={{
            flex: 1,
            paddingTop: 0,
            paddingBottom: 0,
            fontFamily: fontFamily.medium,
            color: colors.textGrey,
            color: colors.textGreyOpcaity7,
          }}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}

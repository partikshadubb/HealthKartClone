import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import CountryPicker, {Flag} from 'react-native-country-picker-modal';
import {useState} from 'react/cjs/react.development';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import {moderateScale} from '../styles/responsiveSize';

export default function PhoneNumberInput({
  cca2 = '',
  callingCode,
  onChangePhone,
  onCountryChange,
  phoneNumber,
}) {
  const [state, setState] = useState({
    countryPickerModalVisible: false,
  });

  const _onCountryChange = (data) => {
    setState({countryPickerModalVisible: false});
    onCountryChange(data);
  };
  const _openCountryPicker = () => {
    setState({countryPickerModalVisible: true});
  };
  const _onCountryPickerModalClose = () => {
    setState({countryPickerModalVisible: false});
  };
  const {countryPickerModalVisible} = state;
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius:4,
        borderColor: colors.borderLight,
        height: moderateScale(49),
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: moderateScale(88),
        }}
        onPress={_openCountryPicker}>
        <Flag countryCode={cca2} />
        <Image source={imagePath.dropdownTriangle} />
      </TouchableOpacity>
      <TextInput
        placeholder="Your phone no*"
        keyboardType="numeric"
        value={phoneNumber}
        placeholderTextColor={colors.textGreyOpcaity7}
        onChangeText={onChangePhone}
        style={{
          flex: 1,
          borderLeftWidth: 1,
          fontFamily: fontFamily.medium,
          color: colors.textGrey,

          borderLeftColor: colors.borderLight,
          opacity: 0.7,
          paddingTop: 0,
          paddingBottom: 0,
          marginVertical: 8,
          paddingHorizontal: 10,
        }}
      />
      {countryPickerModalVisible && (
        <CountryPicker
          cca2={cca2}
          visible={countryPickerModalVisible}
          withFlagButton={false}
          withFilter
          onClose={_onCountryPickerModalClose}
          onSelect={_onCountryChange}
        />
      )}

      <TextInput style={{flex: 1}} />
    </View>
  );
}

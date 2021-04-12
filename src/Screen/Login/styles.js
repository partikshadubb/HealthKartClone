import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateVerticalScale,moderateScale } from '../../styles/responsiveSize';


export default StyleSheet.create({
    container: {
        flex: 1,
      },
      navSignup: {
        backgroundColor: colors.white,
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      arrowImage: {
        height: 20,
        width: 20,
        tintColor: colors.black,
      },
      // loginText: {
      //   fontFamily:fontFamily.bold,
      //   fontSize: 20,
      // },
      checkBoxView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      },
      buttonView: {
        marginHorizontal: 15,
        height: 70,
        marginTop: -10,
        // borderBottomWidth:2
      },
      socialRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      hyphen: {
        width: 130,
        height: 1,
        backgroundColor: colors.textGrey,
        opacity: 0.6,
      },
      orText: {
        ...commonStyles.mediumFont14,
        lineHeight: 24,
        textAlign: 'center',
        fontFamily: fontFamily.medium,
        opacity: 0.6,
        marginTop: 0,
        marginHorizontal: moderateScale(16),
      },
      socialRowBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: moderateVerticalScale(40),
      },
      socialIconView: {
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
      },
      iconView: {
        flexDirection: 'row',
        borderWidth: 1,
        padding: 5,
        borderColor: colors.btnABlue,
        borderRadius: 5,
        marginRight: 20,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
      },
      iconView2: {
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.orange,
        borderRadius: 5,
        width: 130,
        padding: 5,
      },
      textFacebook: {height: 30, width: 30, marginRight: 3},
      textGoogle: {height: 30, width: 30, marginRight: 10},
      bottomContainer: {
        // flex: 1,
        // justifyContent: 'flex-end',
        marginBottom: moderateVerticalScale(30),
      },
      txtSmall: {
        ...commonStyles.mediumFont14,
        lineHeight: 24,
        textAlign: 'center',
        fontFamily: fontFamily.medium,
        marginTop: moderateVerticalScale(15),
      },
      buttonBottom: {
        marginTop: -13,
        marginBottom: moderateVerticalScale(30),
      },
      txtSmall1: {
        ...commonStyles.mediumFont14,
        lineHeight: 24,
        textAlign: 'center',
        fontFamily: fontFamily.medium,
        marginTop: moderateVerticalScale(15),
        fontSize: 16,
      },
      checkBoxView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 18,
      },
      buttonStyle: {borderWidth: 0},
    
})
import {StyleSheet} from 'react-native';

import {
  textScale,
  moderateScale,
  moderateVerticalScale,
} from './responsiveSize';
import colors from './colors';
import fontFamily from './fontFamily';
export const hitSlopProp = {
  top: 12,
  right: 12,
  left: 12,
  bottom: 12,
};
export default StyleSheet.create({
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediumFont14:{
    fontSize:textScale(14),
    color:colors.textGrey,
    fontFamily:fontFamily.medium,
    opacity:.7

  },
  mediumFont14Normal:{
    fontSize:textScale(14),
    color:colors.textGrey,
    fontFamily:fontFamily.medium,
    opacity:1
  },
  mediumFont16:{
    fontSize:textScale(14),
    color:colors.textGrey,
    fontFamily:fontFamily.medium,
  },
  mediumFont20:{
    fontSize:textScale(20),
    color:colors.textGrey,
    fontFamily:fontFamily.medium,
  },
  futuraBtHeavyFont16:{
    fontSize:textScale(16),
    color:colors.black,
    fontFamily:fontFamily.futuraBtHeavy
    
  },
  futuraBtHeavyFont14:{
    fontSize:textScale(14),
    color:colors.black,
    fontFamily:fontFamily.futuraBtHeavy
    
  },
  futuraHeavyBt:{
    fontSize:textScale(16),
    color:colors.black,
    fontFamily:fontFamily.futuraHeavyBt
  },
  buttonRect: {
    height: moderateVerticalScale(46),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.themeColor,
    borderWidth: 1,
    borderColor: colors.themeColor,
    borderRadius:4,
  },
  shadowStyle: {
    backgroundColor: colors.white,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    // borderColor: colors.lightWhiteGrayColor,
    // borderWidth: 0.7,
  },
  buttonTextWhite: {
    fontFamily: fontFamily.futuraBtHeavy,
    textTransform: 'uppercase',
    color: colors.white,
    textAlign:"center"
  },
  imgOverlay:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor:'rgba(0,0,0,0.3)'
  }
});

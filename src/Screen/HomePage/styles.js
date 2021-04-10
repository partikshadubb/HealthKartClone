import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateVerticalScale,
  moderateScale,
} from '../../styles/responsiveSize';

export default StyleSheet.create({
    searchBar: {
        backgroundColor: colors.white,
        height: 40,
        justifyContent: "center",
        position: "relative",
        marginLeft: 12,
        marginRight: 12,
        borderWidth:1,
        borderColor:colors.lightGrey,
        borderRadius:10,
        fontFamily:fontFamily.futura,
      },
      counter:{
        position: "absolute",
        backgroundColor:colors.themeColor ,
        right: 15,
        top: 12,
        borderWidth: 0.5,
        borderRadius: 20,
        width: 15,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.white,
      },
      voiceIcon:{
        height: 27,
        width: 26,
        marginRight: 5,
        position: "absolute",
        right: 10,
      },
      searchIcon:{
        height: 20,
        width: 20,
        // marginRight: 10,
        position: "absolute",
        left: 10,
      },
      counter:{
        position: 'absolute',
        right: 11,
        top: 3,
        // backgroundColor: colors.themeColor,
        height: 17,
        width: 17,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
      },
      counterText:{color: colors.white},
      container:{flex: 1,backgroundColor:colors.white},
      searchBarView:{backgroundColor:colors.white,paddingVertical:10},
});

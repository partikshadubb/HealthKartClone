import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

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
      cardView: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 10,
        margin: 8,
        borderWidth: 1,
        borderColor: colors.lightGrey,
      },
      buttonStyle: {
        borderWidth: 3,
        width: 300,
        alignSelf: 'center',
        marginTop: -5,
      },
      footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      card: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        // borderBottomWidth: 1,
        // borderBottomColor: colors.lightGrey,
      },
      cardImageView: {padding: 5, flexDirection: 'row'},
      cardImage: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
        borderRadius: 5,
      },
      cardTextView: {flexDirection: 'row', paddingTop: 6, marginLeft: 5},
      cardFullName: {fontWeight: 'bold', fontSize: 17},
      cardEmailView: {marginTop: 5, width: 180},
      bioInCard: {marginTop: 8, width: 180},
      bioTextInCard: {color: colors.darkGrey},
      sentImageView: {marginTop: 15, flexDirection: 'row', alignItems: 'center'},
      sentImageInCard: {height: 30, width: 30},
      heartImageInCard: {height: 33, width: 33, marginHorizontal: 10},
    
})
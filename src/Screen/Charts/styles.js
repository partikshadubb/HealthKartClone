import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

export default StyleSheet.create({
    bargraph: {
        height: 300,
        width: 300,
        marginHorizontal: 30,
      },
      title: {
        textAlign: 'center',
        marginVertical: 10,
        marginTop: 20,
        fontSize: 20,
      },
      navSignup: {
        backgroundColor:colors.white,
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
})
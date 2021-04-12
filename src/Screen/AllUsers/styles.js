import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

export default StyleSheet.create({
    container: {
        flex: 1,
      },
      renderView: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey,
        marginHorizontal: 5,
        marginTop: 3,
        backgroundColor: colors.white,
      },
      subRenderView: {padding: 10, flexDirection: 'row', flex: 0.9},
      renderImage: {height: 60, width: 60, borderRadius: 50},
      subRenderView2: {flexDirection: 'row', paddingTop: 6, marginLeft: 13},
      userName: {fontWeight: 'bold', fontSize: 17},
      subRenderView3: {marginTop: 3},
      subRenderView4: {justifyContent: 'center'},
      userStatus: {color: colors.grey, paddingHorizontal: 10},
      headerView: {
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        // borderBottomWidth: 1,
        // borderBottomColor: themeColor,
      },
})
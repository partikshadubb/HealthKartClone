import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

export default StyleSheet.create({
    container: {flex: 1},
  headerView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    alignItems: 'center',
    height: 40,
    paddingTop: 5,
    paddingBottom: 10,
  },
  headerTextView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  profileImage: {height: 150, width: 150, borderRadius: 100},
  userNameText: {fontWeight: 'bold', marginTop: 5},
  listView: {
    backgroundColor: colors.white,
    marginTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 15,
  },
  subListView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  subList: {flexDirection: 'row'},
  listArrowImage: {height: 25, width: 25},
  listText: {fontSize: 17, fontWeight: 'bold', marginLeft: 10},
  subListView2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginTop: 15,
  },
  subListView3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    paddingBottom: 20,
    marginTop: 15,
  },
  footerView: {
    backgroundColor: colors.white,
    marginTop: 10,
    paddingLeft: 40,
    paddingBottom: 20,
    paddingTop: 10,
  },
  footerText: {color: colors.darkGrey},
  modalBackground: {
    flex: 1,
    backgroundColor: colors.blackOpacity0,
    alignItems: 'center',
  },
  modalView: {
    borderRadius: 10,
    height: 300,
    backgroundColor: colors.blackOpacity06,
  },
  modalCloseImage: {height: 30, width: 40, left: 320},

})
//import liraries
import is from 'is_js';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import Loader from '../../Component/Loader';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';

// create a component
class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.apicall();
  }

  apicall = () => {
    this.setState({isLoading: true});
    actions
      .chatUser(10, 0)
      .then(res => {
        console.log(res.data, 'users');
        this.setState({userData: [...res.data], isLoading: false});
      })
      .catch(err => {
        this.setState({isLoading: false});
        console.log(err);
      });
  };

  _renderItem = item => {
    const {fullName, profileImg, caption, bio, isOnline} = item.item.userInfo;
    const {commonConversationId, _id} = item.item;
    console.log(item.item._id, 'render  user');
    const {themeColor} = this.props;
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(navigationStrings.CHATS, {
            name: fullName,
            image: profileImg,
            commonId: commonConversationId,
            id: _id,
          })
        }>
        <View style={styles.renderView}>
          <View style={styles.subRenderView}>
            <Image
              style={styles.renderImage}
              source={{uri: profileImg[0].original}}
            />
            <View style={styles.subRenderView2}>
              <View>
                <Text style={styles.userName}>{fullName}</Text>
                <View style={styles.subRenderView3}>
                  <Text style={{color: colors.grey}}>{bio}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.subRenderView4}>
            {isOnline ? (
              <Text
                style={{
                  color: colors.grey,
                  paddingHorizontal: 10,
                  color: themeColor,
                }}>
                online
              </Text>
            ) : (
              <Text style={styles.userStatus}>offline</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {themeColor} = this.props;
    const {userData, isLoading} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text
            style={{
              fontFamily: fontFamily.bold,
              ...commonStyles.mediumFont20,
              color: themeColor,
            }}>
            Chats
          </Text>
        </View>
        <FlatList
          data={userData}
          renderItem={item => this._renderItem(item)}
          keyExtractor={item => item.id}
        />
        <Loader isLoading={isLoading} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
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
});

//make this component available to the app
const mapStateToProps = state => {
  return {
    themeColor: state.themeReducer.themeColor,
  };
};
export default connect(mapStateToProps)(AllUsers);

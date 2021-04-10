import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import Loader from '../../Component/Loader';
import {INFINITE_LIST} from '../../config/urls';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import {apiPost} from '../../utils/utils';
import imagePath from '../../constants/imagePath';
import SearchBar from '../../Component/SearchBar';
import commonStyles from '../../styles/commonStyles';

const Limit = 5;
class LatestDeals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      noMoreData: false,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.apiCall();
  }

  apiCall(onEndReachedCall = false) {
    const {data} = this.state;
    console.log('apicall');
    this.setState({isLoading: true});
    let Skip = onEndReachedCall ? data.length : 0;
    apiPost(INFINITE_LIST, {
      searchType: 'LEADERBOARD',
      limit: Limit,
      skip: Skip,
    })
      .then(res => {
        if (res.data.length == 0) {
          this.setState({noMoreData: true, isLoading: false});
        } else {
          if (onEndReachedCall) {
            this.setState(
              {
                data: [...data, ...res.data],
                isLoading: false,
                refreshing: false,
              },
              () => {
                console.log(this.state, 'ffffff');
              },
            );
          } else {
            this.setState(
              {
                data: [...res.data],
                isLoading: false,
                refreshing: false,
                noMoreData: false,
              },
              () => {},
            );
          }
        }
      })
      .catch(err => {
        this.setState({isLoading: true});

        console.log(err);
      });
  }

  renderItem = data => {
    // console.log(data.item.fullName);
    const {themeColor} = this.props;
    return (
      <View style={styles.cardView}>
        <TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'space-between',
              // borderBottomWidth: 1,
              // borderBottomColor: colors.lightGrey,
            }}>
            <View style={{padding: 5, flexDirection: 'row'}}>
              <Image
                style={{
                  height: 150,
                  width: 150,
                  resizeMode: 'contain',
                  borderRadius: 5,
                }}
                source={{uri: data.item.profileImg[0].original}}
              />
              <View
                style={{flexDirection: 'row', paddingTop: 6, marginLeft: 5}}>
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 17}}>
                    {' '}
                    {data.item.fullName}
                  </Text>
                  <View style={{marginTop: 5, width: 180}}>
                    <Text numberOfLines={1} style={{color: themeColor}}>
                      {data.item.email}
                    </Text>
                  </View>
                  <View style={{marginTop: 8, width: 180}}>
                    <Text numberOfLines={1} style={{color: colors.darkGrey}}>
                      {data.item.bio}
                    </Text>
                  </View>

                  <View
                    style={{
                      marginTop: 15,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity>
                      <Image
                        style={{height: 30, width: 30}}
                        source={imagePath.sentImage}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Image
                        style={{height: 33, width: 33, marginHorizontal: 10}}
                        source={imagePath.heartImage}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Text
                        style={{
                          paddingHorizontal: 10,
                          paddingVertical: 5,
                          borderRadius: 15,
                          backgroundColor: themeColor,
                          color: colors.white,
                        }}>
                        More Info
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  endReached = () => {
    const {isLoading, noMoreData} = this.state;
    if (isLoading || noMoreData) {
      return;
    }

    this.setState({isLoading: true});
    this.apiCall(true);
  };

  footerItems = () => {
    const {isLoading} = this.state;
    return (
      <View style={styles.footer}>
        {isLoading ? (
          <ActivityIndicator
            size={'large'}
            color={colors.red}
            style={{margin: 15}}
          />
        ) : null}
      </View>
    );
  };

  _onRefresh = () => {
    this.setState({refreshing: true, noMoreData: false});
    this.apiCall();
  };

  render() {
    const {themeColor} = this.props;
    const {data, refreshing} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.categoriesTextView}>
            <TouchableOpacity>
              <Text style={{...commonStyles.mediumFont20, color: themeColor}}>
                {strings.CATEGORIES}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={data}
          renderItem={item => this.renderItem(item)}
          onEndReached={this.endReached}
          ListFooterComponent={this.footerItems}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this._onRefresh}
            />
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1},
  cardView: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    margin: 8,
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
  cardImageView: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
  },
  cardImage: {
    height: 210,
    width: '100%',
    position: 'relative',
    resizeMode: 'cover',
    borderRadius: 10,
    //  borderBottomLeftRadius: 10,
    //  borderBottomRightRadius:10,
  },
  cardTextView: {position: 'absolute', bottom: 10, marginHorizontal: 5},
  cardText: {
    ...commonStyles.mediumFont16,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    color: colors.white,
  },
  cardText1: {
    fontSize: 13,
    fontWeight: 'bold',
    // marginTop: 5,
    // marginBottom: 5,
    color: colors.white,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerView: {
    flexDirection: 'row',
    position: 'relative',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    alignItems: 'center',
    height: 40,
    paddingTop: 5,
  },
  categoriesTextView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

const mapStateToProps = state => {
  return {
    themeColor: state.themeReducer.themeColor,
  };
};

export default connect(mapStateToProps)(LatestDeals);

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
import styles from './styles';

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
            style={styles.subCardview}>
            <View style={styles.imageView}>
              <Image
                style={styles.cardImage}
                source={{uri: data.item.profileImg[0].original}}
              />
              <View
                style={styles.cardTextView}>
                <View>
                  <Text style={styles.fullNameInCard}>
                    
                    {data.item.fullName}
                  </Text>
                  <View style={styles.cardMailView}>
                    <Text numberOfLines={1} style={{color: themeColor}}>
                      {data.item.email}
                    </Text>
                  </View>
                  <View style={styles.cardBioView}>
                    <Text numberOfLines={1} style={styles.bioInCard}>
                      {data.item.bio}
                    </Text>
                  </View>

                  <View
                    style={styles.iconView}>
                    <TouchableOpacity>
                      <Image
                        style={styles.cardSentImage}
                        source={imagePath.sentImage}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Image
                        style={styles.cardHeartImage}
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


const mapStateToProps = state => {
  return {
    themeColor: state.themeReducer.themeColor,
  };
};

export default connect(mapStateToProps)(LatestDeals);

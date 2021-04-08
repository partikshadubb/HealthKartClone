import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import imagePath from '../../constants/imagePath';
import {GiftedChat} from 'react-native-gifted-chat'; // 0.2.5
import fontFamily from '../../styles/fontFamily';
import {connect} from 'react-redux';
import colors from '../../styles/colors';
import {SendButton} from 'react-native-fbsdk';
import actions from '../../redux/actions';
import socketServices from '../../utils/socketService';
import {SOCKET_STRINGS} from '../../constants/socketStrings';

class Chats extends Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    const {userData} = this.props;
    this.apicall();
    socketServices.initializeSocket(userData.accessToken);
  }

  apicall = () => {
    const {commonId, image, name} = this.props.route.params;

    this.setState({isLoading: true});
    actions
      .userConversation(commonId, 100)
      .then(res => {
        console.log(res.data, 'usersConaerstaion');
        const messages = res.data.map((data, index) => {
          let message = {
            _id: data._id,
            text: data.text,
            createdAt: data.createdAt,
            user: {
              _id: data.senderId._id,
              name: name,
              avatar: image[0].original,
            },
          };
          if (!!data.repliedToText) {
            message.replyText = data.repliedToText;
          }
          return message;
        });
        this.setState({isLoading: false, messages});
      })
      .catch(err => {
        this.setState({isLoading: false});
        console.log(err);
      });
  };

  onSend(messages = []) {
    if (String(messages[0].text).trim().length < 1) {
      return;
    }
    const {id, commonId} = this.props.route.params;
    const {userData} = this.props;
    // To send new message
    socketServices.emit(SOCKET_STRINGS.SEND_MESSAGE, {
      senderId: userData._id,
      recieverId: id,
      commonConversationId: commonId,
      messageType: 'Text',
      text: messages[0].text,
    });
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    const {themeColor, userData} = this.props;
    console.log(this.props.route.params, 'imagegge');
    const {name, image, commonId} = this.props.route.params;
    const SendButton = props => {
      return (
        <View style={styles.sendButtonView}>
          <Image
            source={imagePath.sent}
            style={{height: 25, width: 25, tintColor: themeColor}}
          />
        </View>
      );
    };
    return (
      <View style={styles.chatView}>
        <View style={styles.subChatView}>
          <Image
            style={styles.chatViewImage}
            source={{uri: image[0].original}}
          />
          <View
            style={{
              // backgroundC,

              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: fontFamily.bold,
                fontSize: 20,
                color: themeColor,
              }}>
              {name}
            </Text>
          </View>
        </View>

        <GiftedChat
          children={<SendButton />}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: userData._id,
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  navSignup: {
    backgroundColor: colors.white,
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sendButtonView: {
    marginHorizontal: 15,
    alignSelf: 'center',
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  chatView: {flex: 1, backgroundColor: colors.lightGrey},
  subChatView: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  chatViewImage: {height: 40, width: 40, borderRadius: 50},
});

const mapStateToProps = state => {
  return {
    themeColor: state.themeReducer.themeColor,
    userData: state.auth.userData,
  };
};
export default connect(mapStateToProps)(Chats);

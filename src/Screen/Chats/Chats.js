import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import imagePath from '../../constants/imagePath'
import { GiftedChat } from 'react-native-gifted-chat'; // 0.2.5
import fontFamily from '../../styles/fontFamily';
import { connect } from 'react-redux';
import colors from '../../styles/colors';

 class Chats extends Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: imagePath.slider1 ,
          },
        },
      ],
    });
  }

  onSend(messages = []) {
      
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }
  

  render() {
      const{themeColor}=this.props
    return (
        <View style={{flex:1,backgroundColor:colors.white}}>
            <View style={{
        // backgroundC,
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent:"space-between",
        borderBottomWidth:1,
        borderBottomColor:themeColor,
      }}>
          
          <Text style={{ fontFamily:fontFamily.bold,
    fontSize: 20,color:themeColor}}>Chats</Text>
          
        </View>
 <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
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
        justifyContent:"space-between"
      },
})

const mapStateToProps = state =>{
    return(
      {
      themeColor:state.themeReducer.themeColor
  
      }
    )
  }
  export default connect(mapStateToProps)(Chats);
  
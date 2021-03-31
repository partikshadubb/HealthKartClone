
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-check-box';
import {BorderlessButton, ScrollView} from 'react-native-gesture-handler';
import ButtonWithLoader from '../../Component/ButtonWithLoader';
import IconTextRow from '../../Component/IconTextRow';
import StatusBar from '../../Component/StatusBar';
import TextInputWithLabel from '../../Component/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import api from '../../redux/actions';
import {getUserData} from '../../utils/utils';
import {showMessage} from 'react-native-flash-message';
import validator from '../../utils/validations';
import Loader from '../../Component/Loader';
import strings from '../../constants/lang';
import { connect } from 'react-redux';

// create a component
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      isLoading: false,
    };
  }

  onAddText(key) {
    return value => {
      this.setState({[key]: value});
    };
  }

  isValidData = () => {
    const {
      username,
      email,
      password,
      confirmPassword,
      phoneNumber,
    } = this.state;

    const error = validator({
      name: username,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      confirmPassword: confirmPassword,
    });
    if (error) {
      showMessage({
        type: 'danger',
        icon: 'danger',
        message: error,
      });
      return false;
    }
    this.setState({isLoading: true});
    api
      .signUp({
        name: username,
        email: email,
        phoneNumber: phoneNumber,
        languageCode: 'EN',
        signupType: 'APP',
        password: password,
      })
      .then(res => {
        this.setState({isLoading: false});
        console.log(res, 'signup');
        showMessage({
          message: 'Signup Successfully',
          type: 'success',
        });
      })
      .catch(error => {
        console.log(error);
      });
    this.props.navigation.navigate('home');

    return true;
  };

  render() {
    const {isLoading} = this.state;
    const{themeColor}=this.props
    return (
      <View style={styles.container}>
        <StatusBar />

        <View style={styles.navSignup}>
          <Text style={{ fontFamily: fontFamily.bold,
    fontSize: 20,color:themeColor}}> {strings.SIGN_UP} </Text>
          <Image style={styles.arrowImage} source={imagePath.crossImage} />
        </View>
        <ScrollView>
          <View style={{paddingHorizontal: 15, marginTop: 10}}>
            <Text style={{fontFamily: fontFamily.bold}}>
             {strings.SIGN_UP_TEXT}
            </Text>
          </View>

          <View style={{paddingHorizontal: 15, marginTop: 15}}>
            <TextInputWithLabel
              onChangeText={this.onAddText('username')}
              label={strings.ENTER_NAME}
              placeholder={strings.ENTER_NAME}
              color={themeColor}
              borderColor={themeColor}
            />
          </View>

          <View style={{paddingHorizontal: 15}}>
            <TextInputWithLabel
              onChangeText={this.onAddText('phoneNumber')}
              label={strings.YOUR_PHONE_NUMBER}
              placeholder={strings.YOUR_PHONE_NUMBER}
              color={themeColor}
              borderColor={themeColor}

            />
          </View>

          <View style={{paddingHorizontal: 15}}>
            <TextInputWithLabel
              onChangeText={this.onAddText('email')}
              label={strings.YOUR_EMAIL}
              placeholder={strings.YOUR_EMAIL}
              color={themeColor}
              borderColor={themeColor}
            />
          </View>

          <View style={{paddingHorizontal: 15}}>
            <TextInputWithLabel
              onChangeText={this.onAddText('password')}
              label={strings.ENTER_PASSWORD}
              placeholder={strings.ENTER_PASSWORD}
              secureTextEntry={true}
              color={themeColor}
              borderColor={themeColor}
            />
          </View>

          <View style={{paddingHorizontal: 15}}>
            <TextInputWithLabel
              onChangeText={this.onAddText('confirmPassword')}
              label={strings.CONFIRM_PASSWORD}
              placeholder={strings.CONFIRM_PASSWORD}
              secureTextEntry={true}
              color={themeColor}
              borderColor={themeColor}
            />
          </View>

          <View style={styles.buttonView}>
            <ButtonWithLoader
              btnText={strings.SIGN_UP}
              btnTextStyle={20}
              onPress={() => this.isValidData()}
              bgColor={themeColor}
              btnStyle={styles.buttonStyle}
            />
          </View>

          <View style={styles.buttonBottom}>
            <Text style={{...styles.txtSmall, color: colors.textGreyLight}}>
              {strings.SIGNUP_AGREEMENT_TEXT}
              <Text
                style={{
                  color: themeColor,
                  fontFamily: fontFamily.futuraBtHeavy,
                }}>
                {strings.TERMS_AND_CONDITIONS}
              </Text>
            </Text>
          </View>

          <View style={styles.socialRow}>
            <View style={styles.hyphen} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.hyphen} />
          </View>

          <View style={{flexDirection: 'row'}}></View>

          <View style={styles.socialIconView}>
            <TouchableOpacity>
              <View style={styles.iconView}>
                <Image
                  style={styles.textFacebook}
                  source={imagePath.facebookImage}
                />
                <Text> {strings.FACEBOOK} </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.iconView2}>
                <Image
                  style={styles.textGoogle}
                  source={imagePath.googleImage}
                />
                <Text> {strings.GOOGLE} </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomContainer}>
            <Text style={{...styles.txtSmall1, color: colors.textGreyLight}}>
             {strings.ALREADY_HAVE_AN_ACCOUNT}
              <Text
                onPress={() =>
                  this.props.navigation.navigate(navigationStrings.LOGIN)
                }
                style={{
                  color:themeColor,
                  fontFamily: fontFamily.futuraBtHeavy,
                }}>
                {strings.LOGIN}
              </Text>
            </Text>
          </View>
          <Loader isLoading={isLoading} />
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
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
  // loginText: {
  //   fontFamily: fontFamily.bold,
  //   fontSize: 20,
    
  // },
  checkBoxView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  buttonView: {
    marginHorizontal: 15,
    height: 70,
    marginTop: -10,
   
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hyphen: {
    width: 130,
    height: 1,
    backgroundColor: colors.textGrey,
    opacity: 0.6,
  },
  orText: {
    ...commonStyles.mediumFont14,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: fontFamily.medium,
    opacity: 0.6,
    marginTop: 0,
    marginHorizontal: moderateScale(16),
  },
  socialRowBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScaleVertical(40),
  },
  socialIconView: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  iconView: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 5,
    borderColor: colors.btnABlue,
    borderRadius: 5,
    marginRight: 20,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView2: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.orange,
    borderRadius: 5,
    width: 130,
    padding: 5,
  },
  textFacebook: {height: 30, width: 30,
     marginRight: 3},
  textGoogle: {height: 30, width: 30,
     marginRight: 10},
  bottomContainer: {
    // flex: 1,
    // justifyContent: 'flex-end',
    marginBottom: moderateScaleVertical(30),
  },
  txtSmall: {
    ...commonStyles.mediumFont14,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: fontFamily.medium,
    marginTop: moderateScaleVertical(15),
  },
  buttonBottom: {
    marginTop: -13,
    marginBottom: moderateScaleVertical(30),
  },
  txtSmall1: {
    ...commonStyles.mediumFont14,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: fontFamily.medium,
    marginTop: moderateScaleVertical(15),
    fontSize: 16,
  },
  buttonStyle:{borderWidth:0}
});

const mapStateToProps = state =>{
  return(
    {
    cartList : state.homeList.cartList,
    themeColor:state.themeReducer.themeColor

    }
  )
}
//make this component available to the app
export default connect(mapStateToProps)(Signup);

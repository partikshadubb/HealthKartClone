import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import {BorderlessButton, ScrollView} from 'react-native-gesture-handler';
import ButtonWithLoader from '../../Component/ButtonWithLoader';
import StatusBar from '../../Component/StatusBar';
import TextInputWithLabel from '../../Component/TextInputWithLabel';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateVerticalScale,
} from '../../styles/responsiveSize';
import api from '../../redux/actions';
import {showMessage} from 'react-native-flash-message';
import validator from '../../utils/validations';
import strings from '../../constants/lang';
import {connect} from 'react-redux';
// import MobileOTP from '../MobileOtp/MobileOTP';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import styles from './styles';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
GoogleSignin.configure();

// create a component
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      password: '',
      isChecked:false,
      showPwd:false,
    };
  }

  onAddText(key) {
    return value => {
      this.setState({[key]: value});
    };
  }

  isValidData = () => {
    const {userEmail, password} = this.state;
    const error = validator({email: userEmail, password: password});
    if (error) {
      showMessage({
        type: 'danger',
        icon: 'danger',
        message: error,
      });
      return false;
    }

    api
      .login({email: userEmail, password: password})
      .then(res => {
        console.log(res, 'login');
        showMessage({
          message: 'Login Successfully',
          type: 'success',
        });
        this.props.navigation.navigate(navigationStrings.HOMEPAGE);
      })
      .catch(error => {
        console.log(error);
      });
    return true;
  };

  facebookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      login => {
        if (login.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data.accessToken.toString();
            console.log(accessToken, 'facebook');
            // this.getInfoFromToken(accessToken);
            this.props.navigation.navigate(navigationStrings.TAB_ROUTES);
          });
        }
      },
      error => {
        console.log('Login fail with error: ' + error);
      },
    );
  };
showLoginPwd=()=>{
  
  this.setState({ isChecked:!this.state.isChecked});

}

signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    this.setState({ userInfo });
    alert(JSON.stringify(userInfo))
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};


  render() {
    const {themeColor} = this.props;
    const{isChecked}=this.state
    return (
      <View style={styles.container}>
        <StatusBar bgColor={themeColor} />

        <View style={styles.navSignup}>
          <Text
            style={{
              fontFamily: fontFamily.bold,
              fontSize: 20,
              color: themeColor,
            }}>
            {strings.LOGIN}
          </Text>
          <Image style={styles.arrowImage} source={imagePath.crossImage} />
        </View>
        <ScrollView>
          {/* <View style={{paddingHorizontal:15,}}>
        <TextInputWithLabel  onChangeText={this.onAddText("phoneNumber")}
           label="Enter Phone No."  placeholder="enter phone no."/>

        </View> */}

          <View style={{paddingHorizontal: 15, marginTop: 15}}>
            <TextInputWithLabel
              onChangeText={this.onAddText('userEmail')}
              label={strings.ENTER_EMAIL}
              color={themeColor}
              borderColor={themeColor}
              placeholder={strings.YOUR_EMAIL}
            />
          </View>

          <View style={{paddingHorizontal: 15}}>
            <TextInputWithLabel
              onChangeText={this.onAddText('password')}
              label={strings.ENTER_PASSWORD}
              color={themeColor}
              borderColor={themeColor}
              placeholder={strings.ENTER_PASSWORD}
              secureTextEntry={!isChecked}
            />
          </View>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(navigationStrings.MOBILEOTP)
            }
            style={{
              backgroundColor: themeColor,
              width: 100,
              borderRadius: 10,
              color: colors.white,
              alignSelf: 'flex-end',
              marginRight: 15,
              paddingHorizontal: 5,
            }}>
            <Text style={{color: colors.white}}>{strings.LOGIN_VIA_OTP}</Text>
          </TouchableOpacity>

          <View style={styles.checkBoxView}>
          <CheckBox
    style={{flex: 1,}}
    
    onClick={this.showLoginPwd}
    isChecked={this.state.isChecked}
    rightText="show password"
   
/>
            
            <Text>{strings.FORGOT_PASSWORD}</Text>
          </View>

          <View style={styles.buttonView}>
            <ButtonWithLoader
              btnStyle={styles.buttonStyle}
              bgColor={themeColor}
              btnText={strings.LOGIN}
              btnTextStyle={20}
              onPress={() => this.isValidData()}
            />
          </View>

          {/* <View style={styles.buttonBottom}>
          <Text style={{...styles.txtSmall, color: colors.textGreyLight}}>
            By signing up you agree to our 
            <Text
            
              style={{
                color: themeColor,
                fontFamily: fontFamily.futuraBtHeavy,
              }}>
            Terms & Conditions
            </Text>
          </Text>
        </View>
   */}

          <View style={styles.socialRow}>
            <View style={styles.hyphen} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.hyphen} />
          </View>

          <View style={{flexDirection: 'row'}}></View>

          <View style={styles.socialIconView}>
            <TouchableOpacity onPress={this.facebookLogin}>
              <View style={styles.iconView}>
                <Image
                  style={styles.textFacebook}
                  source={imagePath.facebookImage}
                />
                <Text>{strings.FACEBOOK}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={this.signIn}>
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
              {strings.NEW_TO_HEALTHKART}
              <Text
                onPress={() =>
                  this.props.navigation.navigate(navigationStrings.SIGNUP)
                }
                style={{
                  color: themeColor,
                  fontFamily: fontFamily.futuraBtHeavy,
                }}>
                {strings.SIGN_UP}
              </Text>
            </Text>
          </View>
          <View>
          {/* <GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={this.signIn}
    disabled={this.state.isSigninInProgress} /> */}

          </View>
         
        </ScrollView>
      </View>
    );
  }
}



const mapStateToProps = state => {
  return {
    cartList: state.homeList.cartList,
    themeColor: state.themeReducer.themeColor,
  };
};
export default connect(mapStateToProps)(Login);

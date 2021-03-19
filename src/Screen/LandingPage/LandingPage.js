import React, { Component } from "react";
import { Text, View, Image,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import imagePath from "../../constants/imagePath";
import navigationStrings from "../../constants/navigationStrings";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abc: "abc",
    };
  }


  
  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.logoView}
        >
          <Image
            style={styles.logoimage}
            source={imagePath.myntra}
          />
          <Text
            style={styles.easyUsingText}
          >
            EASY USING
          </Text>
          <View style={styles.socialIconView}>
            <TouchableOpacity>
              <View
                style={styles.facebookView}
              >
                <Image
                  style={styles.fbImage}
                  source={imagePath.facebookImage}
                />
                <Text>FACEBOOK</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={styles.googleImageView}
              >
                <Image
                  style={styles.gImage}
                  source={imagePath.googleImage}
                />
                <Text>GOOGLE</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.btnView}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("login")}
            >
              <View
                style={styles.loginBtnView}
              >
                <Text
                  style={styles.loginText}
                >
                  Login
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("signup")}
            >
              <View
                style={styles.signupBtnView}
              >
                <Text
                  style={styles.loginText}
                >
                  Signup
                </Text>
              </View>
            </TouchableOpacity>
          </View>
         
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
container:{ flex: 1 },
logoView:{
  justifyContent: "center",
  alignItems: "center",
  marginTop: 180,
},
logoimage:{ height: 100, width: 100 },
easyUsingText:{
  fontSize: 15,
  color: "grey",
  fontFamily: "serif",
  marginTop: 30,
},
socialIconView:{ flexDirection: "row", marginTop: 15 },
facebookView:{
  flexDirection: "row",
  borderWidth: 1,
  padding: 10,
  borderColor: "grey",
  borderRadius: 5,
  marginRight: 20,
  width: 130,
  justifyContent:"center",
  alignItems:"center"
},
fbImage:{ height: 30, width: 20, marginRight: 10 },
googleImageView:{
  flexDirection: "row",
  borderWidth: 1,
  padding: 10,
  borderColor: "grey",
  borderRadius: 5,
  width: 130,
  alignItems:"center"
},
gImage:{ height: 30, width: 30, marginRight: 10 },
btnView:{ flexDirection: "row", marginTop: 45 },
loginBtnView:{
  flexDirection: "row",
  padding: 15,
  borderRadius: 5,
  marginRight: 20,
  width: 130,
  backgroundColor: "#e0436c",
  justifyContent: "center",
  alignItems: "center",
},
loginText:{ fontWeight: "bold", fontSize: 15, color: "white" },
signupBtnView:{
  flexDirection: "row",
  padding: 15,
  borderRadius: 5,
  width: 130,
  backgroundColor: "#e0436c",
  justifyContent: "center",
  alignItems: "center",
},

})
import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { connect } from "react-redux";
import imagePath from "../../constants/imagePath";
import strings from "../../constants/lang";
import actions from "../../redux/actions";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";

 class Profile extends Component {



changeTheme=()=>{
// let newColor={themeColor:"red"}
console.log(this.props, "Profile init")
actions.switchTheme(this.props.themeColor)
console.log(this.props, "Profile final")

}

  render() {
    const {themeColor}=this.props
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            backgroundColor: "white",
            alignItems: "center",
            height: 40,
            paddingTop: 5,
            paddingBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            {/* <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Image
                style={{ height: 25, width: 25 }}
                source={{
                  uri:
                    "https://o.remove.bg/downloads/38477b69-12db-4609-9b99-4057b5fff7d4/images-removebg-preview.png",
                }}
              />
            </TouchableOpacity> */}
            <Text style={{  fontFamily:fontFamily.bold,
    fontSize: 20, color:themeColor,paddingHorizontal:10}}>{strings.PROFILE}</Text>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              height: 200,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ height: 150, width: 150, borderRadius: 100 }}
              source={{
                uri:
                  "data:image/png;base64,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",
              }}
            />
            <Text style={{ fontWeight: "bold", marginTop: 5 }}>User Name</Text>
          </View>

          <View
            style={{
              backgroundColor: colors.white,
              marginTop: 10,
              paddingLeft: 10,
              paddingBottom: 10,
              paddingTop: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 10,
                borderBottomColor: colors.lightGrey,
                borderBottomWidth: 1,
                paddingBottom: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ height: 25, width: 25 }}
                  source={imagePath.leftArrow}
                />
                <TouchableOpacity onPress={this.changeTheme}>
                <Text
                  style={{ fontSize: 17,
                     fontWeight: "bold",
                      marginLeft: 10 }}
                >
                  Change Theme
                </Text>
                </TouchableOpacity>
              </View>
              
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 10,
                borderBottomColor: colors.lightGrey,
                borderBottomWidth: 1,
                paddingBottom: 20,
                marginTop: 15,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ height: 25, width: 25 }}
                  source={imagePath.leftArrow}
                />
                <Text
                  style={{ fontSize: 17,
                     fontWeight: "bold",
                      marginLeft: 10 }}
                >
                  Help
                </Text>
              </View>
              
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 10,
                paddingBottom: 20,
                marginTop: 15,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ height: 25, width: 25 }}
                  source={imagePath.leftArrow}
                />
                <Text
                  style={{ fontSize: 17, 
                    fontWeight: "bold", 
                    marginLeft: 10 }}
                >
                  Wishlist
                </Text>
              </View>
             
            </View>
          </View>

          <View
            style={{
              backgroundColor: colors.white,
              marginTop: 10,
              paddingLeft: 10,
              paddingBottom: 10,
              paddingTop: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 10,
                borderBottomColor: colors.lightGrey,
                borderBottomWidth: 1,
                paddingBottom: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ height: 25, width: 25 }}
                  source={imagePath.leftArrow}
                />
                <Text
                  style={{ fontSize: 17, 
                    fontWeight: "bold",
                     marginLeft: 10 }}
                >
                  Scan for coupons
                </Text>
              </View>
              
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 10,
                paddingBottom: 20,
                marginTop: 15,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ height: 25, width: 25 }}
                  source={imagePath.leftArrow}
                />
                <Text
                  style={{ fontSize: 17, fontWeight: "bold", marginLeft: 10 }}
                >
                  Refer & Earns
                </Text>
              </View>
             
            </View>
          </View>

          <View
            style={{
              backgroundColor:colors.white,
              marginTop: 10,
              paddingLeft: 40,
              paddingBottom: 20,
              paddingTop: 10,
            }}
          >
            <Text style={{ color: colors.darkGrey }}>FAQs </Text>
            <Text style={{ color: colors.darkGrey }}>ABOUT US </Text>
            <Text style={{ color: colors.darkGrey }}>TERMS OF USE </Text>
            <Text style={{ color: colors.darkGrey }}>PRIVACY POLICY </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state =>{
  return(
    {
    themeColor:state.themeReducer.themeColor

    }
  )
}

export default connect(mapStateToProps)(Profile);
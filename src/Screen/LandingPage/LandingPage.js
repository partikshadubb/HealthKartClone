import React, { Component } from "react";
import { Text, View, Image } from "react-native";
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
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 180,
          }}
        >
          <Image
            style={{ height: 80, width: 100 }}
            source={imagePath.myntra}
          />
          <Text
            style={{
              fontSize: 15,
              color: "grey",
              fontFamily: "serif",
              marginTop: 50,
            }}
          >
            EASY USING
          </Text>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: 1,
                  padding: 15,
                  borderColor: "grey",
                  borderRadius: 5,
                  marginRight: 20,
                  width: 130,
                }}
              >
                <Image
                  style={{ height: 20, width: 20, marginRight: 10 }}
                  source={{
                    uri:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKKgI9pF1hBouy0Xt5sm16Or0Y7uSEFGoiEQ&usqp=CAU",
                  }}
                />
                <Text>FACEBOOK</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: 1,
                  padding: 15,
                  borderColor: "grey",
                  borderRadius: 5,
                  width: 130,
                }}
              >
                <Image
                  style={{ height: 20, width: 20, marginRight: 10 }}
                  source={{
                    uri:
                      "https://o.remove.bg/downloads/ab6f9ced-198c-4357-9158-9e374c8690de/google-new-logo-1030x541-removebg-preview.png",
                  }}
                />
                <Text>GOOGLE</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", marginTop: 45 }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("login")}
            >
              <View
                style={{
                  flexDirection: "row",
                  padding: 15,
                  borderRadius: 5,
                  marginRight: 20,
                  width: 130,
                  backgroundColor: "#e0436c",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, color: "white" }}
                >
                  Login
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("signup")}
            >
              <View
                style={{
                  flexDirection: "row",
                  padding: 15,
                  borderRadius: 5,
                  width: 130,
                  backgroundColor: "#e0436c",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, color: "white" }}
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

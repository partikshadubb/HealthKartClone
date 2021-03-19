import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class LatestDeals extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 30 }}>
        <View
          style={{
            flexDirection: "row",
            position: "relative",
            flexWrap: "wrap",
            justifyContent: "space-between",
            backgroundColor: "white",
            alignItems: "center",
            height: 40,
            paddingTop: 5,
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
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Image
                style={{ height: 25, width: 25 }}
                source={{
                  uri:
                    "https://o.remove.bg/downloads/407dcca4-c4a6-48fb-8700-f21ef9e50596/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406-removebg-preview.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ marginLeft: 15, fontWeight: "bold" }}>
                Categories
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginRight: 15,
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Image
                style={{ height: 20, width: 20, marginRight: 15 }}
                source={{
                  uri:
                    "https://o.remove.bg/downloads/dc6f76d6-7742-4748-899d-888d429c59ee/871-8719667_download-png-transparent-background-search-icon-removebg-preview.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ height: 21, width: 20, marginRight: 15 }}
                source={{
                  uri:
                    "https://o.remove.bg/downloads/af51ea7a-8061-468d-be3d-306b4e38c7fd/img_316859-removebg-preview.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ height: 20, width: 22, marginRight: 15 }}
                source={{
                  uri:
                    "https://o.remove.bg/downloads/12b45c3f-e4b1-4054-b38e-4d22908e4102/images-removebg-preview.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ height: 20, width: 20 }}
                source={{
                  uri:
                    "https://o.remove.bg/downloads/2a835397-97f1-437f-8df6-cfa6da886457/images-removebg-preview.png",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          <ScrollView>
          <View
            style={{
              height: 200,
              
            
            }}
          >
            <Image
              style={{ height: 200,resizeMode:"cover"  }}
              source={{
                uri:
                  "https://img.freepik.com/free-psd/sneakers-sale-banner-template_23-2148748556.jpg?size=626&ext=jpg&ga=GA1.2.269866217.1592753711",
              }}
            />
           <Image
              style={{ height: 200,resizeMode:"cover"  }}
              source={{
                uri:
                  "https://img.freepik.com/free-vector/modern-black-friday-sale-banner-template-with-3d-background-red-splash_1361-1877.jpg?size=626&ext=jpg&ga=GA1.2.269866217.1592753711",
              }}
            />
          </View>
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

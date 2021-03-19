import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import DetailPage from "../Screen/DetailPage/DetailPage";

function HomeStyle(props) {
  const { shoeList, cartCounter ,addCartArray} = props;
 const navigation = useNavigation();
  let _renderItem = ({ item }) => {
    const {
      name,
      id,
      image,
      originalPrice,
      reducedPrice,
      discount,
      caption,
    } = item;

    // console.log(addCartArray,"asdfghj")
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderRadius: 10,
          margin: 5,
          borderWidth: 1,
          padding: 5,
          borderColor: "#ddd",
        }}
      >
        <View>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                justifyContent: "center",
              }}
            >
              <View>
                <Image style={{ height: 190 }} source={{ uri: image }} />
              </View>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "bold",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                {name}
              </Text>
              <Text style={{ fontSize: 13, color: "gray" }}>{caption}</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "bold", color: "black" }}
                >
                  Rs.{reducedPrice}
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    color: "#aaa",
                    marginLeft: 7,
                    textDecorationLine: "line-through",
                  }}
                >
                  Rs.{originalPrice}{" "}
                </Text>

                <Text style={{ fontSize: 12, color: "#e0436c", marginLeft: 5 }}>
                  ({discount}%OFF)
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={()=>{cartCounter(item)}}>
            <View
              style={{
                borderWidth: 1,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "black",
                marginVertical: 10,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "grey" }}>Add To Cart</Text>
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={shoeList}
      numColumns={2}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({});

export default HomeStyle;

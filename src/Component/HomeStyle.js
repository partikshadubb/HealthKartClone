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
import { color } from "react-native-reanimated";
import { connect } from "react-redux";
import DetailPage from "../Screen/DetailPage/DetailPage";
import colors from "../styles/colors";

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
const {themeColor}=props
    // console.log(addCartArray,"asdfghj")
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          borderRadius: 10,
          marginHorizontal: 5,
          borderWidth: 1,
          padding: 5,
          borderColor: colors.lightGrey,
          marginBottom:10
        }}
      >
        <View>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: colors.white,
                borderRadius: 10,
                justifyContent: "center",
              }}
            >
              <View>
                <Image style={{ height: 190,resizeMode:"contain",width:"100%" }} source={ image } />
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
              <Text style={{ fontSize: 13, color: colors.darkGrey }}>{caption}</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "bold", color: colors.black }}
                >
                  Rs.{reducedPrice}
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    color: colors.grey,
                    marginLeft: 7,
                    textDecorationLine: "line-through",
                  }}
                >
                  Rs.{originalPrice}{" "}
                </Text>

                <Text style={{ fontSize: 12, color: themeColor, marginLeft:1 }}>
                  ({discount}%OFF)
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{cartCounter(item)}}>
            <View
              style={{
              
                height: 30,
                justifyContent: "center",
                alignItems: "center",
                
                marginVertical: 10,
                borderRadius: 5,
                backgroundColor:themeColor
              }}
            >
              <Text style={{ color:colors.white }}>Add To Cart</Text>
            </View>
          </TouchableOpacity>
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

const mapStateToProps = state =>{
  return(
    {
    themeColor:state.themeReducer.themeColor

    }
  )
}

export default connect(mapStateToProps)(HomeStyle);

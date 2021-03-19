import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class LatestDeals extends Component {
  render() {
    
     let item = this.props.route.params.itemList;

    return (
      <View style={{ flex: 1, marginTop: 30 }}>
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
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Image
                style={{ height: 25, width: 25 }}
                source={{
                  uri:
                    "https://o.remove.bg/downloads/38477b69-12db-4609-9b99-4057b5fff7d4/images-removebg-preview.png",
                }}
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 20, fontWeight: "bold" }}>Cart</Text>
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
<ScrollView   >
              

                {
  item.map((value,key)=>{
   
    
const{ name,price,image,id,originalPrice,reducedPrice,discount,star,emi,number,caption}=value
   
    return(
      // <Text key={key}>{value.name}</Text>
      <View style={{marginHorizontal:1,paddingHorizontal:5,marginTop:6}}>
        <View style={{ borderWidth:1,
               borderColor:"#ddd",
               
                backgroundColor:"white",
                padding:5,}}>
      <View
              style={{
              marginBottom:10,
                flexDirection:"row"
                // backgroundColor:"blue",
                
              }}
            >
              <View style={{height:135,width:100,justifyContent:"center"}}>
                <Image style={{ height: 200,resizeMode:"contain" }} source={{ uri: image }} />
              </View>
              <View style={{backgroundColor:"white",paddingHorizontal:15,}}>
              <Text
                style={{
                  fontSize: 16,
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
                  marginTop:3
                }}
              >
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "black" }}
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
                  Rs.{originalPrice}
                </Text>

                <Text style={{ fontSize: 12, color: "#e0436c", marginLeft: 5 }}>
                  ({discount}%OFF)
                </Text>
               

              </View>
                <Text style={{color:"#e0436c",fontSize:10,marginTop:5}}>4 offers applied . 3 offers applied</Text>
      <View style={{flexDirection:"row",justifyContent:"space-between",}}>
      <Text style={{fontWeight:"bold",backgroundColor:"#ddd",padding:5,marginTop:5,width:70,}}>Size: 6</Text>

       <Text style={{fontWeight:"bold",backgroundColor:"#ddd",padding:5,marginTop:5}}>Qty: 1 </Text>
       </View>
              </View>
            </View>
          
<View style={{height:40,backgroundColor:"white",borderTopColor:"#ddd",borderTopWidth:1,flexDirection:"row",}}>
<View style={{width:"50%",justifyContent:"center",alignItems:"center",flexDirection:"row",borderRightWidth:1,borderRightColor:"#ddd",marginTop:3}}>
  <Image style={{height:20,width:20}}
   source={{uri:"https://o.remove.bg/downloads/937f00fa-ca10-430a-80eb-e8a68b0e6e60/images-removebg-preview.png"}}/>
  <Text style={{color:"grey",marginLeft:5}}>ADD TO WISHLIST</Text>
</View>
<View style={{width:"50%",justifyContent:"center",alignItems:"center",marginTop:3}}>
  <Text style={{color:"grey"}}>REMOVE</Text>
</View>
<View>

</View>
</View>

            </View>  
            </View>
    )

  })
}
                {/* </View> */}


</ScrollView>

      </View>
    );
  }
}

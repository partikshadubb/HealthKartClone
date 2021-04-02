import React from 'react';
import {View, Text, Image,StyleSheet,TextInput} from 'react-native';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import {textScale} from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function({onChangeText,value,onPress=()=>{}}) {

    return(
        <View style={styles.searchBar}>
            <TextInput
              style={{ marginLeft: 35, fontSize: 15, }}
              onChangeText= {onChangeText}
              value={value}
              placeholder="Search for Products, Brands and More"
            />

            <Image
              style={styles.searchIcon}
              source={{
                uri:
                  "https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png",
              }}
            />
            {/* <View>
            <TouchableOpacity style={{backgroundColor:"red", height:20,width:20, right: 0, top: 0, position: "absolute"}} >
            <Image
              style={styles.voiceIcon}
              source={{
                uri:
                  "https://www.materialui.co/materialIcons/hardware/keyboard_voice_grey_192x192.png",
              }}
            />
            </TouchableOpacity>
            </View> */}
            {/* <View style = {{position: "absolute",top:0, right: 10,height: 30,
             width: 30,justifyContent:"center",alignItems:"center"}}>
              <TouchableOpacity
              onPress = {onPress}
              >
                 <Image
              style={{height: 27,
                width: 26,}}
              source={{
                uri:
                  "https://www.materialui.co/materialIcons/hardware/keyboard_voice_grey_192x192.png",
              }}
            />
              </TouchableOpacity>
            </View> */}
          </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: colors.white,
        height: 40,
        justifyContent: "center",
        position: "relative",
        marginLeft: 12,
        marginRight: 12,
        borderWidth:1,
        borderColor:colors.lightGrey,
        borderRadius:10,
        fontFamily:fontFamily.futura,
      },
     
      searchIcon:{
        height: 20,
        width: 20,
        // marginRight: 10,
        position: "absolute",
        left: 10,
      },
})
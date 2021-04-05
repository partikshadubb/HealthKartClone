import React from 'react'
import {View,Text,Image,TextInput,StyleSheet, Touchable} from 'react-native'
import imagePath from '../constants/imagePath'
import colors from '../styles/colors'
import {connect} from 'react-redux';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
 function Header({
   menuPress,
  newColor}) {
    console.log(newColor)
    return(
        <View style={styles.navbar}>
        <View
          style={{ flexDirection: "row",height:50,
           justifyContent: "space-between",alignItems:"center" }}
        >
          <View style={{ flexDirection: "row",
          justifyContent:"center",alignItems:"center" }}>
            <TouchableOpacity onPress={menuPress} >
             
            <Image
              style={{ height: 20, width: 30 ,tintColor:newColor}}
              source={imagePath.menu}
            />
            </TouchableOpacity>
            <Text style={{color:newColor ,fontSize:20,marginLeft:10}}>
              HEALT
              <Text style={{backgroundColor:newColor ,color:colors.white}}>HK</Text>ART</Text>
          </View>
         
         {/* <TouchableOpacity  onPress={()=>changeTheme()} >
           <ButtonWithLoader btnText="ChangeTheme" />
         </TouchableOpacity> */}
           
            <TouchableOpacity
              //{newItem:cartArray, price:price }
              onPress={()=>navigation.navigate('Cart')}
            >
              <Image
                style={{ height: 27, width: 27 ,marginHorizontal:10}}
                source={imagePath.cart}
              />
            </TouchableOpacity>
          </View>
        </View>

     
)
    }
    // export default Header;
    const styles = StyleSheet.create({
        navbar: {
          backgroundColor: colors.white,
          height: 50,
          // borderBottomWidth:.6,
          // borderBottomColor:colors.lightGreyBg
        },
    })

    const mapStateToProps = state =>{
      return(
        {
        themeColor:state.themeReducer.themeColor
    
        }
      )
    }

export default connect(mapStateToProps)(Header);
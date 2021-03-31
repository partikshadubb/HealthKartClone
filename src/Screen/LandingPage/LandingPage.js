// import React, { Component } from "react";
// import { Text, View, Image,StyleSheet } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import imagePath from "../../constants/imagePath";
// import navigationStrings from "../../constants/navigationStrings";

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       abc: "abc",
//     };
//   }


  
//   render() {
//     return (
//       <View style={styles.container}>
//         <View
//           style={styles.logoView}
//         >
//           <Image
//             style={styles.logoimage}
//             source={imagePath.myntra}
//           />
//           <Text
//             style={styles.easyUsingText}
//           >
//             EASY USING
//           </Text>
//           <View style={styles.socialIconView}>
//             <TouchableOpacity>
//               <View
//                 style={styles.facebookView}
//               >
//                 <Image
//                   style={styles.fbImage}
//                   source={imagePath.facebookImage}
//                 />
//                 <Text>FACEBOOK</Text>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <View
//                 style={styles.googleImageView}
//               >
//                 <Image
//                   style={styles.gImage}
//                   source={imagePath.googleImage}
//                 />
//                 <Text>GOOGLE</Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.btnView}>
//             <TouchableOpacity
//               onPress={() => this.props.navigation.navigate("login")}
//             >
//               <View
//                 style={styles.loginBtnView}
//               >
//                 <Text
//                   style={styles.loginText}
//                 >
//                   Login
//                 </Text>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => this.props.navigation.navigate("signup")}
//             >
//               <View
//                 style={styles.signupBtnView}
//               >
//                 <Text
//                   style={styles.loginText}
//                 >
//                   Signup
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>
         
//         </View>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
// container:{ flex: 1 },
// logoView:{
//   justifyContent: "center",
//   alignItems: "center",
//   marginTop: 180,
// },
// logoimage:{ height: 100, width: 100 },
// easyUsingText:{
//   fontSize: 15,
//   color: "grey",
//   fontFamily: "serif",
//   marginTop: 30,
// },
// socialIconView:{ flexDirection: "row", marginTop: 15 },
// facebookView:{
//   flexDirection: "row",
//   borderWidth: 1,
//   padding: 10,
//   borderColor: "grey",
//   borderRadius: 5,
//   marginRight: 20,
//   width: 130,
//   justifyContent:"center",
//   alignItems:"center"
// },
// fbImage:{ height: 30, width: 20, marginRight: 10 },
// googleImageView:{
//   flexDirection: "row",
//   borderWidth: 1,
//   padding: 10,
//   borderColor: "grey",
//   borderRadius: 5,
//   width: 130,
//   alignItems:"center"
// },
// gImage:{ height: 30, width: 30, marginRight: 10 },
// btnView:{ flexDirection: "row", marginTop: 45 },
// loginBtnView:{
//   flexDirection: "row",
//   padding: 15,
//   borderRadius: 5,
//   marginRight: 20,
//   width: 130,
//   backgroundColor: "#e0436c",
//   justifyContent: "center",
//   alignItems: "center",
// },
// loginText:{ fontWeight: "bold", fontSize: 15, color: "white" },
// signupBtnView:{
//   flexDirection: "row",
//   padding: 15,
//   borderRadius: 5,
//   width: 130,
//   backgroundColor: "#e0436c",
//   justifyContent: "center",
//   alignItems: "center",
// },

// })



import  React,{Component} from 'react';
import {
  Text, 
  View,
  SafeAreaView, 
  Image,
  Dimensions,
  Touchable,
  TouchableOpacity,
  ImageBackground,
  StyleSheet
  } from 'react-native';
import { color } from 'react-native-reanimated';
import StatusBar, {} from '../../Component/StatusBar'
import Carousel, {Pagination}from 'react-native-snap-carousel';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import ButtonWithLoader from '../../Component/ButtonWithLoader'
import navigationStrings from '../../constants/navigationStrings';
import strings from '../../constants/lang';
import { connect } from 'react-redux';
// import { Pagination } from 'react-native-snap-carousel';

const{width,height} =Dimensions.get("screen")

 class LandingPage extends Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          
          {
            image:imagePath.peanut,
            text: strings.CAROUSAL_TEXT_FIRST,
          },
          {
            image:imagePath.carousal,
            text: strings.CAROUSAL_TEXT_SECOND,
          },
          {
            image:imagePath.nitro,
            text: strings.CAROUSAL_TEXT_THIRD ,
          },
          {
           
          },
        ]
      }
    }

    get pagination () {
        const { carouselItems,activeIndex } = this.state;
       
        return (
            <Pagination
              dotsLength={carouselItems.length}
              activeDotIndex={activeIndex}
            //   containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: colors.white,
                  
        
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
   
  }

    _renderItem({item,index}){
        return (
          <View style={{
              // backgroundColor:'red',
              borderRadius: 5,
              height: 300,
              width:'100%',
              alignItems:"center",
              justifyContent:"center",
              marginVertical:130
            //   marginLeft: 25,
            //   marginRight: 25,
               }}>
            
            <Image style={{resizeMode:"cover",
            height:300,width:300}}
             source={item.image}/>
         <View style={{padding:15,width:290,
        
         justifyContent:"center",}}>
         <Text style={{color:colors.white,
          fontSize:25,textAlign:"center"}}>
            {item.text}
            </Text>
          </View>
          </View>
        )
    }

    render() {
      const{themeColor}=this.props
      const {activeIndex}=this.state
      if(activeIndex != 3){
        return (
          
            <View style={{ flex: 1,
              backgroundColor:themeColor,
             }}>
               {/* <StatusBar /> */}
                <View>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={width}
                  itemWidth={400}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
                  <View>
                { this.pagination }
                </View>
                </View>
                  {/* <Text style={{color:colors.themeColor,backgroundColor:"white",paddingHorizontal:50,paddingVertical:10}}>
                    Get Started
                  </Text> */}
<TouchableOpacity>
<View >
<Text style={{color:themeColor,
  backgroundColor:colors.white,
  alignSelf:"center",
  paddingHorizontal:110,
  paddingVertical:13,
  borderRadius:10,
  fontFamily:fontFamily.bold,fontSize:17}}>
                   {strings.GET_STARTED}
                  </Text>
</View>
</TouchableOpacity>
            </View>
          
        );
    }
    else {
      return(
        <View style={styles.container}>
          <StatusBar/>
          <ImageBackground
              source={imagePath.logo}
              style={styles.image}>
              <View
                style={styles.buttonView}>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate(navigationStrings.SIGNUP)}>
                <View>
<Text style={{color:themeColor,
  backgroundColor:colors.white,
  alignSelf:"center",
paddingHorizontal:50,
paddingVertical:13,
borderRadius:10,
fontFamily:fontFamily.bold,fontSize:17}}>
                   {strings.SIGN_UP}
                  </Text>
</View>
</TouchableOpacity>


<TouchableOpacity onPress={()=>this.props.navigation.navigate(navigationStrings.LOGIN)}>
<View >
<Text style={{color:themeColor,
  backgroundColor:colors.white,
  alignSelf:"center",
paddingHorizontal:50,
paddingVertical:13,
borderRadius:10,
fontFamily:fontFamily.bold,fontSize:17}}>
                    {strings.LOGIN}
                  </Text>
</View>
</TouchableOpacity>
              </View>
             
            </ImageBackground>
        </View>
      )
    }
}
}
const styles = StyleSheet.create({
  container:{flex:1},
  image: {
    flex: 1,
    resizeMode: "contain",
    
  },
 buttonView:{
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop:500,
  marginHorizontal:15
},
// signUpText:{color:colors.themeColor,
//   backgroundColor:colors.white,
//   alignSelf:"center",
// paddingHorizontal:50,
// paddingVertical:13,
// borderRadius:10,
// fontFamily:fontFamily.bold,fontSize:17},
// getStarted:{color:colors.themeColor,
//   backgroundColor:colors.white,
//   alignSelf:"center",
//   paddingHorizontal:110,
//   paddingVertical:13,
//   borderRadius:10,
//   fontFamily:fontFamily.bold,fontSize:17},

});
const mapStateToProps = state =>{
  return(
    {
    themeColor:state.themeReducer.themeColor

    }
  )
}

export default connect(mapStateToProps)(LandingPage);
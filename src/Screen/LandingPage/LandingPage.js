


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
import commonStyles from '../../styles/commonStyles';
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

    _renderItem({item}){
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
               <StatusBar />
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
...commonStyles.mediumFont16}}>
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
...commonStyles.mediumFont16}}>
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
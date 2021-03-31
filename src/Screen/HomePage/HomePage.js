import React, {Component} from 'react';
import {View, Text, Image, StyleSheet,TextInput} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import DetailPage from '../DetailPage/DetailPage';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStyle from '../../Component/HomeStyle';
import imagePath from '../../constants/imagePath';
import {createStore} from 'redux';
import reducers from '../../redux/reducers/homeList';
import {addList} from '../../redux/actions/auth';
import store from '../../redux/store';
import navigationStrings from '../../constants/navigationStrings';
import types from '../../redux/types';
import colors from '../../styles/colors';
import StatusBar from '../../Component/StatusBar';
import actions from '../../redux/actions';
import Header from '../../Component/Header';
import SearchBar from '../../Component/SearchBar';
import SnapCarousel from '../../Component/SnapCarousel';
import {connect} from 'react-redux'
import { clearUserData } from '../../utils/utils';
import styles from './styles';


const {dispatch} = store;
 class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      addCartArray: [],
      themeColor:"#00bfbf",
      shoeList: [
        {
          id: 1,
          name: "MusleBlaze Whey Protein",
          caption: 'healthy protein',
          image:imagePath.item1,
          originalPrice: 12999,
          reducedPrice: 9999,
          discount: 68,
          star: 3.9,
          number: 65067,
          quantity:1,
        },
        {
          id: 2,
          name: "SLIM SHAKE",
          image:imagePath.item4,
          caption: 'shake',

          originalPrice: 12999,
          reducedPrice: 12318,
          discount: 34,
          star: 3.9,
          number: 65067,
          quantity:1,
        },
        {
          id: 3,
          name: "SLIM SHAKE CHOCOLATE",
          caption: 'choclate flavour',
          image:imagePath.item7,

          originalPrice: 20999,
          reducedPrice: 13318,
          discount: 28,
          star: 3.9,
          number: 65067,
          quantity:1,
        },
        {
          id: 4,
          name: "MASS GAINER IMPROVED",
          caption: 'gainer',
          image:imagePath.item3,
          originalPrice: 12999,
          reducedPrice: 11318,
          discount: 18,
          star: 3.9,
          number: 65067,
          quantity:1,
        },
        {
          id: 5,
          name: "High Protien Serial",
          caption: 'Women protein',
          image:imagePath.item2,
          originalPrice: 123999,
          reducedPrice: 110318,
          discount: 20,
          star: 3.9,
          number: 65067,
          quantity:1,
        },
        {
          id: 6,
          name: "100% WHEY PROTIEN",
          caption: 'protein',
          image:imagePath.item5,
          originalPrice: 12999,
          reducedPrice: 9999,
          discount: 68,
          star: 3.9,
          number: 65067,
          quantity:1,
        },
        {
          id: 7,
          name: "PROTIEN SLIM NATURAL",
          caption: 'slim protein',
          image:imagePath.item6,
          originalPrice: 12999,
          reducedPrice: 12318,
          discount: 34,
          star: 3.9,
          number: 65067,
          quantity:1,
        },
        {
          id: 8,
          name: "TRIPLE GINSENG",
          caption: 'protein',
          image:imagePath.item8,
          originalPrice: 20999,
          reducedPrice: 13318,
          discount: 28,
          star: 3.9,
          number: 65067,
          quantity:1,
        },
        {
          id: 9,
          name: "100% WHEY PROTIEN",
          caption: 'protein',
          image:imagePath.item5,
          originalPrice: 12999,
          reducedPrice: 11318,
          discount: 18,
          star: 3.9,
          number: 65067,
          quantity:1,
        },
        {
          id: 10,
          name: "MusleBlaze Whey Protein",
          caption: 'healthy protein',
          image:imagePath.item1,
          originalPrice: 123999,
          reducedPrice: 110318,
          discount: 20,
          star: 3.9,
          number: 65067,
          quantity:1,
        },
        
      ],
    };
  }

  // componentDidMount() {
  //   this.focusListener = this.props.navigation.addListener('focus', () => {
  //     if (this.props.route.params) {
  //       let itemAdded = this.props.route.params.productDetails;
  //       this.props.route.params = null;
  //       this.cartCounter(itemAdded);
  //     }
  //   });
  // }
  // componentWillUnmount() {
  //   if (this.focusListener) {
  //     this.focusListener();
  //   }
  // }

  cartCounter = item => {

    let abc = this.props.cartList
    console.log(abc,"addcart")
    let itemBool = true;
    for (let i = 0; i < abc.length; i++)
      if (abc[i].id == item.id) {
        alert('already added');
        itemBool = false;
      }
    if (itemBool) {
      actions.addList(item)

      console.log(item, 'in Home');
      let cartArray = [...abc, item];
     
      this.setState({ abc: cartArray});
    }
  };


  onLogout = () => {
    actions.logout()
    this.props.navigation.navigate(navigationStrings.LOGIN)

  }

changeTheme=()=>{
  const {themeColor}=this.state
  actions.switchTheme(themeColor)
  
}

  render() {
    console.log(this.props.themeColor)
    const {shoeList, } = this.state;
    const {themeColor}=this.props
    console.log(themeColor,"color")
    return (
      <View style={{flex: 1,backgroundColor:colors.white}}>
        <StatusBar bgColor={themeColor}/>
        <Header navigation={this.props.navigation} onLogout={this.onLogout} changeTheme={this.changeTheme} />
       


<View style={{backgroundColor:colors.white,paddingVertical:10}}>
<View style={styles.searchBar}>
            <TextInput
              style={{ marginLeft: 35, fontSize: 15, }}
              placeholder="Search for Products, Brands and More"
            />

            <Image
              style={styles.searchIcon}
              source={{
                uri:
                  "https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png",
              }}
            />
            <Image
              style={styles.voiceIcon}
              source={{
                uri:
                  "https://www.materialui.co/materialIcons/hardware/keyboard_voice_grey_192x192.png",
              }}
            />
          </View>
          </View>
<ScrollView>
<SnapCarousel/>

        <View style={{flex: 1}}>
          {<HomeStyle shoeList={shoeList} cartCounter={this.cartCounter} />}
        </View>
        </ScrollView>
        <View
          style={{  position: 'absolute',
          right: 11,
          top: 3,
           backgroundColor: themeColor,
          height: 17,
          width: 17,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,}}>
          <Text style={{color: colors.white}}>{this.props.cartList.length}</Text>
        </View>
      </View>
      
    );
  }
}


const mapStateToProps = state =>{
  return(
    {
    cartList : state.homeList.cartList,
    themeColor:state.themeReducer.themeColor

    }
  )
}

export default connect(mapStateToProps)(HomePage)
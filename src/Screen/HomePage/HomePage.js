import React, {Component} from 'react';
import {View, Text,} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import HomeStyle from '../../Component/HomeStyle';
import imagePath from '../../constants/imagePath';
import store from '../../redux/store';
import colors from '../../styles/colors';
import StatusBar from '../../Component/StatusBar';
import actions from '../../redux/actions';
import Header from '../../Component/Header';
import SnapCarousel from '../../Component/SnapCarousel';
import {connect} from 'react-redux'
import SearchBar1 from '../../Component/SearchBar1';
import styles from '../HomePage/styles';
import socketServices from '../../utils/socketService';
import {navigate  } from "../../Navigation/NavigationService";

import navigationStrings from '../../constants/navigationStrings';


const {dispatch} = store;
 class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      addCartArray: [],
      
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
  componentDidMount(){
    const{userData}=this.props
    socketServices.initializeSocket(userData.accessToken);
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

  }

changeTheme=()=>{
  const {themeColor}=this.state
  actions.switchTheme(themeColor)
  
}
openDrawer = () => {
  const { navigation } = this.props;
  navigation.openDrawer();
}

  render() {
    console.log(this.props.themeColor)
    const {shoeList, } = this.state;
    const {themeColor}=this.props
    console.log(themeColor,"color")
    return (
      <View style={styles.container}>
        <StatusBar bgColor={themeColor}/>
        <Header menuPress={this.openDrawer} cartPress={()=>navigate(navigationStrings.CART)
} newColor={themeColor} />


<View style={styles.searchBarView}>
  <SearchBar1 placeholder="Search for Products, Brands and More"/>
          </View>
<ScrollView>

{/* <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={200}
                       imageHeight={200}>
                <Image style={{width:200, height:200}}
                       source={imagePath.item3}/>
            </ImageZoom> */}

<SnapCarousel/>

        <View>
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
          <Text style={styles.counterText}>{this.props.cartList.length}</Text>
        </View>
      </View>
      
    );
  }
}


const mapStateToProps = state =>{
  return(
    {
    cartList : state.homeList.cartList,
    themeColor:state.themeReducer.themeColor,
    userData:state.auth.userData

    }
  )
}

export default connect(mapStateToProps)(HomePage)
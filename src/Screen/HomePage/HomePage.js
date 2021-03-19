import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
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

const {dispatch} = store;
export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      addCartArray: [],
      shoeList: [
        {
          id: 1,
          name: 'Roadster',
          caption: 'Men Solid Sneakers',
          image:
            'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13327884/2021/2/17/7f94433c-c5d8-41b1-a403-191946aa9d851613562860500-Nike-Men-Blue-Colourblocked-DBREAK-TYPE-SE-Sneakers-31616135-1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 2,
          name: 'Sneakers',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/11/649a4bd5-dc24-4800-9f5f-7cc4b82089b11613037412192-1.jpg',
          caption: 'Men Solid Sneakers',

          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 3,
          name: 'Boots',
          caption: 'Women Boots',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/11/ca8e7600-18c7-4460-a2cf-a4841a50b7d21613047770563-1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 4,
          name: 'Printed Flats',
          caption: 'Women Flats',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12721072/2021/2/17/a80cd1c7-fba1-4423-a0ac-bdc70aed99e51613544312960-Shezone-Women-Black--Beige-Animal-Printed-Ballerinas-6161613-1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 5,
          name: 'Marc Lorie',
          caption: 'Women Flats',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7447456/2018/10/29/a4748e3a-1f57-4973-a8f9-7fd8f12f97071540811042566-Marc-Loire-Women-Mint-Green-Solid-One-Toe-Flats-5421540811042405-1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 6,
          name: 'Black Heels',
          caption: 'Women Heels',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10690332/2019/11/8/388ffce2-e348-4b22-9466-f4e8eaec72db1573211374396-Mast--Harbour-Women-Black-Solid-Pumps-3391573211372753-1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 7,
          name: 'Sports',
          caption: 'Men Sports Shoe',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11979688/2020/11/24/973fe8e6-ee05-4264-b44c-1b1a3a4261f21606214841699-PHANTOM-GT-ACADEMY-FGMG-2461606214839997-1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 8,
          name: 'Roadster',
          caption: 'Men Casual Shoes',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11999930/2020/11/3/288921fe-bd9c-44c4-b209-88d6382271ae1604401784073-HRX-by-Hrithik-Roshan-Men-Blue-N-FLUX-Running-Shoe-148160440-1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 9,
          name: 'Sports',
          caption: 'Men Sports Shoe',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11418106/2020/5/22/8f3e54ce-53aa-4043-9d60-523bf9b8ba601590130240279PumaMenBlackHYBRIDNETFITAstroRunningShoes1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 10,
          name: 'Sneakers',
          caption: 'Men Solid Sneakers',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/7/19/1168fffd-9880-47a4-9b8c-e228f7bc64b31563476258168-1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 11,
          name: 'Boot',
          caption: 'Men Boots',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7741225/2018/11/6/17b6de13-4107-479a-a32a-07f98fd2cc3f1541491577565-Eego-Italy-Men-Black-Leather-High-Top-Trekking-Shoes-4121541491577381-1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 12,
          name: 'Marc',
          caption: 'Women Boots',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/12/17/95e1e28a-c133-4661-8b10-fb3556ddfd611608210624529-1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 13,
          name: 'Roadster',
          caption: 'Men Solid Sneakers',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10492784/2020/2/17/84cdda83-49c9-4407-a03a-666f860055691581921711182-HRX-by-Hrithik-Roshan-Men-Beige-Chunky-Sneakers-906158192170-1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 14,
          name: 'Sneakers',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/11/649a4bd5-dc24-4800-9f5f-7cc4b82089b11613037412192-1.jpg',
          caption: 'Men Solid Sneakers',

          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 15,
          name: 'Boots',
          caption: 'Women Boots',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/11/ca8e7600-18c7-4460-a2cf-a4841a50b7d21613047770563-1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 16,
          name: 'Printed Flats',
          caption: 'Women Flats',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12721072/2021/2/17/a80cd1c7-fba1-4423-a0ac-bdc70aed99e51613544312960-Shezone-Women-Black--Beige-Animal-Printed-Ballerinas-6161613-1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 17,
          name: 'Marc Lorie',
          caption: 'Women Flats',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7447456/2018/10/29/a4748e3a-1f57-4973-a8f9-7fd8f12f97071540811042566-Marc-Loire-Women-Mint-Green-Solid-One-Toe-Flats-5421540811042405-1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 18,
          name: 'Black Heels',
          caption: 'Women Heels',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10690332/2019/11/8/388ffce2-e348-4b22-9466-f4e8eaec72db1573211374396-Mast--Harbour-Women-Black-Solid-Pumps-3391573211372753-1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 19,
          name: 'Sports',
          caption: 'Men Sports Shoe',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11979688/2020/11/24/973fe8e6-ee05-4264-b44c-1b1a3a4261f21606214841699-PHANTOM-GT-ACADEMY-FGMG-2461606214839997-1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 20,
          name: 'Roadster',
          caption: 'Men Casual Shoes',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11999930/2020/11/3/288921fe-bd9c-44c4-b209-88d6382271ae1604401784073-HRX-by-Hrithik-Roshan-Men-Blue-N-FLUX-Running-Shoe-148160440-1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 21,
          name: 'Sports',
          caption: 'Men Sports Shoe',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11418106/2020/5/22/8f3e54ce-53aa-4043-9d60-523bf9b8ba601590130240279PumaMenBlackHYBRIDNETFITAstroRunningShoes1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
        {
          id: 22,
          name: 'Sneakers',
          caption: 'Men Solid Sneakers',
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/7/19/1168fffd-9880-47a4-9b8c-e228f7bc64b31563476258168-1.jpg',
          originalPrice: 999,
          reducedPrice: 318,
          discount: 68,
          star: 3.9,
          number: 65067,
        },
      ],
    };
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      if (this.props.route.params) {
        let itemAdded = this.props.route.params.productDetails;
        this.props.route.params = null;
        this.cartCounter(itemAdded);
      }
    });
  }
  componentWillUnmount() {
    if (this.focusListener) {
      this.focusListener();
    }
  }

  cartCounter = item => {
    //item >> array >>

    const {counter, addCartArray} = this.state;
    let itemBool = true;
    for (let i = 0; i < addCartArray.length; i++)
      if (addCartArray[i].id == item.id) {
        alert('already added');
        itemBool = false;
      }
    if (itemBool) {
      console.log(item, 'in Home');
      let cartArray = [...addCartArray, item];
      store.dispatch(addList(item));
      this.setState({counter: counter + 1, addCartArray: cartArray});
    }
  };

  render() {
    const {shoeList, name, image, counter, addCartArray} = this.state;
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            position: 'relative',
            flexWrap: 'wrap',
            // justifyContent: "space-between",
            backgroundColor: 'white',
            alignItems: 'center',
            height: 40,
            alignItems: 'center',
            // paddingTop: 5,
          }}>
          {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("login")}
            >
              <Image
                style={{ height: 25, width: 25 }}
                source={{
                  uri:
                    "https://o.remove.bg/downloads/407dcca4-c4a6-48fb-8700-f21ef9e50596/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406-removebg-preview.png",
                }}
              />
            </TouchableOpacity> */}
          <TouchableOpacity>
            <Image
              style={{height: 30, width: 50}}
              source={{
                uri:
                  'https://o.remove.bg/downloads/07411f6e-60b1-4710-ae9f-88c3e1cd2538/1611996262_ynt-removebg-preview.png',
              }}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',

              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Image
                style={{height: 50, width: 50, marginRight: 15}}
                source={imagePath.myntra}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{height: 20, width: 22, marginRight: 15}}
                source={{
                  uri:
                    'https://o.remove.bg/downloads/12b45c3f-e4b1-4054-b38e-4d22908e4102/images-removebg-preview.png',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Cart', {
                  itemList: addCartArray,
                })
              }>
              <Image
                style={{height: 20, width: 20, marginLeft: 175}}
                source={imagePath.cart}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 1}}>
          {<HomeStyle shoeList={shoeList} cartCounter={this.cartCounter} />}
        </View>
        <View
          style={{
            position: 'absolute',
            right: 11,
            top: 3,
            backgroundColor: '#e0436c',
            height: 15,
            width: 15,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
          }}>
          <Text style={{color: 'white'}}>{counter}</Text>
        </View>
      </View>
    );
  }
}

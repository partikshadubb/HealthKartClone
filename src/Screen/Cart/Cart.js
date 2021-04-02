import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
 
} from 'react-native';
import {connect} from 'react-redux';
import imagePath from '../../constants/imagePath';
import actions from '../../redux/actions';
import store from '../../redux/store';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import strings from '../../constants/lang';
import styles from './styles';

const {dispatch} = store;
class Cart extends Component {
  increment = id => {
    actions.increment(id);
  };

  decrement = id => {
    actions.decrement(id);
  };

  delete = id => {
    // alert(id)
    actions.deleteList(id);
  };

  _renderItem = item => {
    console.log(this.props.cartList, 'in cart');
    console.log(item.item.name, 'item');
    const {cartList} = this.props;
    const {
      name,
      price,
      image,
      id,
      originalPrice,
      reducedPrice,
      discount,
      quantity,
      star,
      emi,
      number,
      caption,
    } = item.item;
const {themeColor}=this.props
    return (
      <View style={styles.addCartViewMain}>
        <View style={styles.addToCartView}>
          <View style={styles.cartView}>
            <View style={styles.imageView}>
              <Image style={styles.cartImage} source={image} />
            </View>
            <View style={styles.textView}>
              <Text style={styles.productName}>{name}</Text>
              <Text style={styles.productCaption}>{caption}</Text>
              <View style={styles.priceView}>
                <Text style={styles.productReducedPrice}>
                  Rs.{reducedPrice}
                </Text>
                <Text style={styles.productOriginalPrice}>
                  Rs.{originalPrice}
                </Text>

                <Text style={ {fontSize: 12, 
                  color:themeColor ,
                   marginLeft: 5}}>
     ({discount}%OFF)</Text>
              </View>
              <Text style={{color:themeColor,
    fontSize:10,marginTop:5}}>
                4 offers applied . 3 offers applied
              </Text>
              <View style={styles.sizeQuantityView}>
                <Text style={styles.sizeText}>Size: 6</Text>
                <View style={styles.quantityView}>
                  <TouchableOpacity
                    onPress={() => this.decrement(item.item.id)}>
                    <View style={styles.decrementView}>
                      <Image
                        style={styles.decrementImage}
                        source={{
                          uri:
                            'https://cdn.iconscout.com/icon/free/png-256/minus-146-475070.png',
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}> {quantity} </Text>

                  <TouchableOpacity
                    onPress={() => this.increment(item.item.id)}>
                    <View style={styles.decrementView}>
                      <Image
                        style={styles.decrementImage}
                        source={{
                          uri:
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF-TvpmtZqroWI2rN_8Hsx5Lq9l9JEFtxurg&usqp=CAU',
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.buttonsView}>
            <View style={styles.buttons}>
              <Text style={styles.addToWishlistText}>ADD TO WISHLIST</Text>
            </View>

            <TouchableOpacity
              onPress={() => this.delete(item.item.id)}
              style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 3,
              }}>
              <Text style={styles.removeText}>REMOVE</Text>
            </TouchableOpacity>

            <View></View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const {cartList, price,} = this.props;
    const {themeColor}=this.props 
    console.log(this.props.price, 'totalPrice');
    return (
      <View style={styles.container}>
        <View style={styles.navSignup}>
          <Text style={{fontFamily: fontFamily.bold,
    fontSize: 20,color:themeColor}}>{strings.CART}</Text>
          <Image style={styles.arrowImage} source={imagePath.crossImage} />
        </View>

        <View>
          <View style={styles.totalPriceView}>
            <Text style={styles.totalPriceText}>
              {strings.TOTAL_PRICE}: {price}
            </Text>
            <TouchableOpacity>
              <Text style={{color: colors.white,
    marginRight: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: themeColor}} >{strings.PLACE_ORDERS}</Text>
            </TouchableOpacity>
          </View>
         
        </View>
        <FlatList
            data={cartList}
            renderItem={this._renderItem}
            keyExtractor={item => item.id}
          />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartList: state.homeList.cartList,
    price: state.homeList.price,
    themeColor:state.themeReducer.themeColor,
  };
};

export default connect(mapStateToProps)(Cart);

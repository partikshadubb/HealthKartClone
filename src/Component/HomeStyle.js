import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {color} from 'react-native-reanimated';
import {connect} from 'react-redux';
import navigationStrings from '../constants/navigationStrings';
import DetailPage from '../Screen/DetailPage/DetailPage';
import colors from '../styles/colors';

function HomeStyle(props) {
  const {shoeList, cartCounter, addCartArray} = props;
  const navigation = useNavigation();
  let _renderItem = ({item}) => {
    const {
      name,
      id,
      image,
      originalPrice,
      reducedPrice,
      discount,
      caption,
    } = item;
    const {themeColor} = props;
    // console.log(addCartArray,"asdfghj")
    return (
      <View style={styles.card}>
        <View>
          <TouchableOpacity>
            <View style={styles.cardImageView}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    navigationStrings.IMAGE_SCREEN,
                    (item = {item}),
                  )
                }>
                <View>
                  <Image style={styles.cardImage} source={image} />
                </View>
              </TouchableOpacity>
              <Text style={styles.productNameInCard}>{name}</Text>
              <Text style={styles.productCaptionInCard}>{caption}</Text>
              <View style={styles.priceView}>
                <Text style={styles.productReducedPriceIncard}>
                  Rs.{reducedPrice}
                </Text>
                <Text style={styles.originalPriceInCard}>
                  Rs.{originalPrice}{' '}
                </Text>

                <Text style={{fontSize: 12, color: themeColor, marginLeft: 1}}>
                  ({discount}%OFF)
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              cartCounter(item);
            }}>
            <View
              style={{
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',

                marginVertical: 10,
                borderRadius: 5,
                backgroundColor: themeColor,
              }}>
              <Text style={styles.buttonText}>Add To Cart</Text>
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
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    padding: 5,
    borderColor: colors.lightGrey,
    marginBottom: 10,
  },
  cardImageView: {
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: 'center',
  },
  cardImage: {height: 190, resizeMode: 'contain', width: '100%'},
  productNameInCard: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  productCaptionInCard: {fontSize: 13, color: colors.darkGrey},
  priceView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  productReducedPriceIncard: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.black,
  },
  originalPriceInCard: {
    fontSize: 11,
    color: colors.grey,
    marginLeft: 7,
    textDecorationLine: 'line-through',
  },
  buttonText: {color: colors.white},
});

const mapStateToProps = state => {
  return {
    themeColor: state.themeReducer.themeColor,
  };
};

export default connect(mapStateToProps)(HomeStyle);

import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../styles/colors";

class DetailPage extends Component {
  render() {
    //console.log(this.props.route.params.productDetails.item)
    let item = this.props.route.params.productDetails.item;

    let {
      caption,
      discount,
      image,
      name,
      number,
      originalPrice,
      reducedPrice,
      star,
    } = item;
    return (
      <View style={styles.header}>
        <View style={styles.headerstart}>
          <View style={styles.headerpart1}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("tabRoutes")}
            >
              <Image
                style={styles.arrowImage}
                source={{
                  uri:
                    "https://o.remove.bg/downloads/38477b69-12db-4609-9b99-4057b5fff7d4/images-removebg-preview.png",
                }}
              />
            </TouchableOpacity>
            <Text style={styles.productText}>Product Details</Text>
          </View>
        </View>

        <ScrollView style={styles.scrollstyle}>
          <View style={styles.productImageView}>
            <Image style={styles.productImage} source={{ uri: image }} />
          </View>
          <View style={styles.viewProductDetails}>
            <View style={styles.viewProductName}>
              <Text style={styles.productName}>{name}</Text>
              <Text style={styles.productCaption}>{caption}</Text>
            </View>
            <View style={styles.productPrice}>
              <Text style={styles.productReducedPrice}>Rs.{reducedPrice}</Text>
              <Text style={styles.productOriginalPrice}>
                Rs.{originalPrice}
              </Text>
              <Text style={styles.discountPrice}>({discount}%OFF)</Text>
            </View>
            <View style={styles.staticPart1}>
              <Text style={styles.textPart1}>inclusive of all taxes</Text>
            </View>
          </View>

          <View style={styles.staticPart2}>
            <Text style={styles.headingPart2}>CHECK DELIVERY & SERVICES</Text>
            <View style={styles.textpart2}>
              <Text style={styles.textColorPart2}>
                Free Delivery on order above Rs.700{" "}
              </Text>
              <Text style={styles.textColorPart2}>
                Pay on delivery might be available{" "}
              </Text>
              <Text style={styles.textColorPart2}>Easy 30 days returns </Text>
              <Text style={styles.textColorPart2}>
                Try &amp; Buy might be available{" "}
              </Text>
              <Text style={styles.textColorPart2}>
                This item is only returnable and not exchangeable{" "}
              </Text>
            </View>
          </View>

          <View style={styles.viewPart3}>
            <View style={styles.subpart3}>
              <Text style={styles.offerPart3}>OFFER</Text>
              <Text style={styles.textPart3}>
                Flat 300 off + Free shipping{" "}
              </Text>
            </View>
            <View style={styles.part3b}>
              <View style={styles.viewPart3b}>
                <Image
                  style={styles.part3bImage}
                  source={{
                    uri:
                      "https://o.remove.bg/downloads/2106156d-1de6-425c-bc8b-cb29076aa012/free-delivery-truck-icon-line-115534873698wtyeysnh4-removebg-preview.png",
                  }}
                />
                <Text style={styles.part3bText}>
                  Applicable on your first order.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.viewPart3}>
            <View style={styles.subpart3}>
              <Text style={styles.view4Text}>Select size (UK size)</Text>
              <Text style={styles.sizeChart}>SIZE CHART</Text>
            </View>
            <View style={styles.part3b}>
              <ScrollView horizontal={true}>
                <View style={styles.scrollHorizontal}>
                  <Text>1</Text>
                </View>
                <View style={styles.scrollHorizontal}>
                  <Text>2</Text>
                </View>
                <View style={styles.scrollHorizontal}>
                  <Text>3</Text>
                </View>
                <View style={styles.scrollHorizontal}>
                  <Text>4</Text>
                </View>
                <View style={styles.scrollHorizontal}>
                  <Text>5</Text>
                </View>
                <View style={styles.scrollHorizontal}>
                  <Text>6</Text>
                </View>
                <View style={styles.scrollHorizontal}>
                  <Text>7</Text>
                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.viewPart3}>
            <View style={styles.viewPartReviews}>
              <Text style={styles.viewPartText}>View all 4 reviews</Text>
            </View>
            <View style={styles.viewPart5}>
              <View style={styles.subpartView5}>
                <View style={styles.subpart2}>
                  <Image
                    style={styles.imagePart5}
                    source={{
                      uri:
                        "https://o.remove.bg/downloads/6b9c1d84-e2e2-47c7-b883-2083a7f8f254/images-removebg-preview.png",
                    }}
                  />
                  <Text style={styles.textColorPart2}>Genuine Products</Text>
                </View>
                <View style={styles.subpart2}>
                  <Image
                    style={styles.imagePart5}
                    source={{
                      uri:
                        "https://o.remove.bg/downloads/d0715bcd-5502-4b64-910a-66a0e50c4367/images-removebg-preview.png",
                    }}
                  />
                  <Text style={styles.textColorPart2}>Quality</Text>
                </View>
                <View style={styles.subpart2}>
                  <Image
                    style={styles.image2Part5}
                    source={{
                      uri:
                        "https://o.remove.bg/downloads/f8f6f957-d9da-409b-8c57-dd9154deabb0/images-removebg-preview.png",
                    }}
                  />
                  <Text style={styles.textColorPart2}>Secure Payments</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.viewPart6}>
            <TouchableOpacity>
              <View style={styles.subPart6}>
                <Image
                  style={styles.imagePart6}
                  source={{
                    uri:
                      "https://o.remove.bg/downloads/12b45c3f-e4b1-4054-b38e-4d22908e4102/images-removebg-preview.png",
                  }}
                />
                <Text>WISHLIST</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Home", { productDetails: item })
              }
            >
              <View style={styles.addCartButton}>
                <Text style={styles.addCartText}>ADD TO CART</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.viewPart3}>
            <Text style={styles.infoText}>More Information</Text>
            <View style={styles.part3b}>
              <View style={styles.bottomView}>
                <Text style={styles.textColorPart2}>Product Code: </Text>
                <Text style={styles.bottomText}>1321459861 </Text>
              </View>
              <View style={styles.bottomView}>
                <Text style={styles.textColorPart2}>Sold By: </Text>
                <Text style={styles.bottomText2}>
                  MIRZA INTERNATIONAL LIMITED{" "}
                </Text>
              </View>
              <Text style={styles.textColorPart2}>Easy 30 days returns </Text>
              <Text style={styles.bottomViewMore}>VIEW MORE</Text>
              <Text style={styles.textColorPart2}>More about Myntra </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default DetailPage;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    display: "flex",
    marginTop: 30,
  },
  headerstart: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
    height: 50,
    paddingTop: 5,
  },
  headerpart1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  arrowImage: {
    height: 30,
    width: 30,
  },
  productText: {
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 15,
  },
  scrollstyle: {
    padding: 5,
  },
  productImageView: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    height: 350,
    width: 350,
    borderWidth: 1,
    resizeMode: "contain",
  },
  viewProductDetails: {
    backgroundColor: "white",
    paddingBottom: 10,
  },
  viewProductName: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    alignItems: "center",
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productCaption: {
    color: "grey",
    marginLeft: 5,
  },
  productPrice: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 5,
  },
  productReducedPrice: {
    fontWeight: "bold",
    fontSize: 15,
  },
  productOriginalPrice: {
    marginLeft: 10,
    color: "gray",
    textDecorationLine: "line-through",
  },
  discountPrice: {
    marginLeft: 10,
    color: "#e0436c",
  },
  staticPart1: {
    marginLeft: 10,
    marginTop: 7,
  },
  textPart1: {
    color: "#03a685",
    fontSize: 16,
    fontWeight: "bold",
  },
  staticPart2: {
    backgroundColor: "white",
    marginTop: 10,
    paddingLeft: 10,
    paddingBottom: 20,
    paddingTop: 10,
  },
  headingPart2: {
    fontSize: 17,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  textpart2: {
    fontSize: 17,
    fontWeight: "bold",
  },
  textColorPart2: {
    color: "grey",
  },
  viewPart3: {
    backgroundColor: "white",
    marginTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 15,
  },
  subpart3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
  },
  offerPart3: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#03a685",
    padding: 4,
  },
  textPart3: {
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
    paddingRight: 50,
  },
  part3b: {
    marginTop: 15,
  },
  viewPart3b: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
  },
  part3bImage: {
    height: 50,
    width: 50,
  },
  part3bText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
    paddingRight: 50,
    marginTop: 15,
  },
  view4Text: {
    fontSize: 17,
    fontWeight: "bold",
  },
  sizeChart: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#e0436c",
    paddingRight: 20,
  },
  scrollHorizontal: {
    borderWidth: 1,
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  viewPartReviews: {
    flexDirection: "row",
    marginRight: 10,
  },
  viewPartText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#e0436c",
  },
  viewPart5: {
    marginTop: 15,
    justifyContent: "space-between",
  },
  subpartView5: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 15,
  },
  subpart2: {
    justifyContent: "center",
    alignItems: "center",
  },
  imagePart5: {
    height: 40,
    width: 40,
  },
  image2Part5: {
    height: 50,
    width: 50,
  },
  viewPart6: {
    flexDirection: "row",
    marginTop: 15,
    backgroundColor: "white",
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: "center",
  },
  subPart6: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 15,
    borderColor: "grey",
    borderRadius: 5,
    marginRight: 20,
    width: 130,
  },
  imagePart6: {
    height: 20,
    width: 22,
    marginRight: 10,
  },
  addCartButton: {
    flexDirection: "row",
    padding: 15,
    borderRadius: 5,
    width: 140,
    backgroundColor: "#e0436c",
  },
  addCartText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
  },
  infoText: { fontSize: 16, fontWeight: "bold" },
  bottomView: { flexDirection: "row" },
  bottomText: { color: "black", fontWeight: "bold" },
  bottomText2: { color: "#e0436c", fontWeight: "bold" },
  bottomViewMore: { color: "#e0436c" },
});

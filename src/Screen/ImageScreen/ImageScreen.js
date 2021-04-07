//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import * as Animatable from 'react-native-animatable';

// create a component
const StyledImage = Animatable.createAnimatableComponent(Image);
class ImageScreen extends Component {
  _onPress = () => {
    this.AnimationRef.bounce();
  };

  render() {
    console.log(this.props.route.params.item.image, 'imagegge');
    const {image,name} = this.props.route.params.item;
    return (
      <View style={styles.container}>
        {/* <TouchableWithoutFeedback onPress={this._onPress} >
          <Animatable.View ref={ref => (this.AnimationRef = ref)}>
            <Text style={{backgroundColor:colors.grey}}>{name}</Text>
          </Animatable.View>
        </TouchableWithoutFeedback> */}

        
        <ImageZoom
          cropWidth={Dimensions.get('window').width}
          cropHeight={Dimensions.get('window').height}
          imageWidth={300}
          imageHeight={300}
          
          >
         <StyledImage
        animation="bounceIn"
        delay={1000}
        useNativeDriver={true}
        source={image}
        style={{height:300,resizeMode:"contain",alignSelf:"center"}}
      />
        </ImageZoom>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ImageScreen;

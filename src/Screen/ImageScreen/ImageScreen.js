//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
// create a component
class ImageScreen extends Component {




    render() {
       console.log(this.props.route.params.item.image,"imagegge") 
       const{image}=this.props.route.params.item
        return (
            <View style={styles.container}>
               <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={200}
                       imageHeight={200}>
                <Image style={{width:200, height:200,resizeMode:"contain"}}
                       source={image}/>
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

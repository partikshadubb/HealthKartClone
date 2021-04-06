//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

// create a component
class Generator extends Component {




  render() {
    return (
      <View style={styles.container}>
        <QRCode value="http://awesome.link.qr" />
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
export default Generator;

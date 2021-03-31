import React from 'react';
import {View, Text, Image,StatusBar} from 'react-native';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';
import {textScale} from '../styles/responsiveSize';

export default function({bgColor}) {

    return(
        <StatusBar
        animated={true}
        backgroundColor={bgColor}
       
        />
    )
   
}
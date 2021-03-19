import React from 'react';
import ContentLoader, {FacebookLoader} from 'react-native-easy-content-loader';

import {View, Text} from 'react-native';
import {
  moderateScale,
  width,
  moderateScaleVertical,
  height,
} from '../../styles/responsiveSize';

export default function CardLoader({
  listSize = 1,
  cardWidth = width * 0.5 - moderateScale(12),
  height = moderateScaleVertical(128),
  containerStyle={},
  isRow = false,
}) {
  const contentCard = () => {
    return (
      <View style={{...containerStyle, width: cardWidth, padding: 0}}>
        <ContentLoader
          active
          listSize={listSize}
          tWidth={cardWidth}
          titleStyles={{marginLeft: 0, paddingLeft: 0}}
          tHeight={height}
          pRows={0}
          containerStyles={{
            marginLeft: 0,
            marginRight: 0,
            paddingHorizontal: 0,
            paddingBottom: 0,
          }}
        />
      </View>
    );
  };
  if (isRow) {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginHorizontal: moderateScale(8),
        }}>
        {contentCard()}
        {contentCard()}
      </View>
    );
  }
  return contentCard();
}

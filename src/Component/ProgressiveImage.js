import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  ActivityIndicator,
  Image,
} from 'react-native';
// import FastImage from 'react-native-fast-image';
import {DotIndicator as Bubbles} from 'react-native-indicators';
import {moderateScaleVertical, moderateScale} from '../styles/responsiveSize';
import colors from '../styles/colors';
import {getRandomColor} from '../utils/helperFunctions';
// const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);
const AnimatedFastImage = Animated.Image;
const ProgressiveImage = ({
  thumbnailSource,
  source,
  style = {},
  bgStyle = {},
  resizeMode = FastImage.resizeMode.cover,
  height,
  width,
  containerStyle = {},
  isCircular = false,
  defaultColor,
  borderRadius=4,
  borderStyle={},
  ...props
}) => {
  const [state, setState] = useState({
    randomColor: !!defaultColor ? defaultColor : getRandomColor(),
    showIndicator: true,
  });

  const updateState = (data) => setState((state) => ({...state, ...data}));

  const onImageLoad = () => {
    // Animated.timing(this.imageAnimated, {
    //   toValue: 1,
    //   useNativeDriver: false,
    // }).start();
    updateState({
      showIndicator: false,
    });
  };

  if (isCircular) {
    containerStyle.borderRadius = 100;
    style.borderRadius = 100;
  }
  let extraProp = {};
  if (height) {
    extraProp.height = height;
  }
  if (width) {
    extraProp.width = width;
  }

  const {randomColor, showIndicator} = state;
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: randomColor,
        borderRadius,
        ...extraProp,
        ...borderStyle,
        ...containerStyle,
      }}>
      {showIndicator && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {isCircular ? (
            <ActivityIndicator color={colors.themeMain} />
          ) : (
            <Bubbles size={10} color="#73B8C1" />
          )}
        </View>
      )}
      <AnimatedFastImage
        resizeMode={resizeMode}
        source={source}
        style={[styles.imageOverlay, {borderRadius,...borderStyle,...extraProp}, style]}
        onLoad={onImageLoad}
      />
    </View>
  );
};

export default ProgressiveImage;

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    borderRadius: 4,
  },
  container: {
    borderRadius: 4,
    overflow: 'hidden',
    height: moderateScale(152),
    width: moderateScale(264),
  },
});


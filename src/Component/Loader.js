import React from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';

import {BarIndicator} from 'react-native-indicators';
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';

const LoadingComponent = () => (
  <View
    style={{
      ...commonStyles.loader,
      backgroundColor: 'rgba(0,0,0,0.3)',
      elevation: 5,
    }}>
    <BarIndicator size={25} color={colors.themeMain} />
  </View>
);
const Loader = ({isLoading = false, withModal}) => {
  if (withModal) {
    return (
      <Modal transparent visible={isLoading}>
        <LoadingComponent />
      </Modal>
    );
  }
  if (isLoading) {
    return <LoadingComponent />;
  }
  return null;
};

export default Loader;

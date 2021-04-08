import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import navigationStrings from '../constants/navigationStrings';
import ButtonWithLoader from './ButtonWithLoader';
import {connect} from 'react-redux';
import {Charts} from '../Screen';
import actions from '../redux/actions';
import imagePath from '../constants/imagePath';

function DrawerContent(props) {
  const onLogout = () => {
    actions.logout();
  };
  const {navigation, themeColor} = props;
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={imagePath.profile}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Elijah</Title>
                <Caption style={styles.caption}>@elijah_tvd</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              onPress={() => {
                navigation.navigate(navigationStrings.TAB_ROUTES);
              }}
            />

            <DrawerItem
              label="Charts"
              onPress={() => {
                navigation.navigate(navigationStrings.CHARTS);
              }}
            />
            <DrawerItem
              label="Scaner"
              onPress={() => {
                navigation.navigate(navigationStrings.NOTIFICATIONS);
              }}
            />
<DrawerItem
              label="QR Generator"
              onPress={() => {
                navigation.navigate(navigationStrings.GENERATOR);
              }}
            />
            <DrawerItem
              label="Chats"
              onPress={() => {
                navigation.navigate(navigationStrings.ALL_USERS);
              }}
            />

            <DrawerItem label="Settings" />
            <DrawerItem label="Support" />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <ButtonWithLoader
          btnStyle={styles.buttonStyle}
          btnText="LogOut"
          bgColor={themeColor}
          btnTextStyle={20}
          onPress={() => onLogout()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  buttonStyle: {
    borderWidth: 0,
  },
});

const mapStateToProps = state => {
  return {
    themeColor: state.themeReducer.themeColor,
  };
};

export default connect(mapStateToProps)(DrawerContent);

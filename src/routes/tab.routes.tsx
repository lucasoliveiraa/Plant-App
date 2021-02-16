import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import Home from '../pages/Home';
import { Text, View } from 'react-native';
import { color } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: "10%"
  }
}

const CameraButton = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#00996D'
      }}
    >
      <Icon
        name="camera"
        size={23}
        color='#ffffff'
      />
    </View>
  )
}

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={tabOptions}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        const tintColor = focused ? '#00996D' : '#BEC1D2';

        switch (route.name) {
          case "Home":
            return(
              <Icon
                name="zap"
                size={25}
                style={{
                  color: tintColor,
                }}
              />
            );
          case "Box":
            return(
              <Icon
                name="box"
                size={25}
                style={{
                  color: tintColor,
                }}
              />
            );
          case "Camera":
            return(
              <CameraButton />
            );
          case "Search":
            return(
              <Icon
                name="search"
                size={25}
                style={{
                  color: tintColor,
                }}
              />
            );
          case "Favourite":
            return(
              <Icon
                name="heart"
                size={25}
                style={{
                  color: tintColor,
                }}
              />
            );
        }
      }
    })}
  >
    <Tab.Screen
      name="Home"
      component={Home}
    />
    <Tab.Screen
      name="Box"
      component={Home}
    />
    <Tab.Screen
      name="Camera"
      component={Home}
    />
    <Tab.Screen
      name="Search"
      component={Home}
    />
    <Tab.Screen
      name="Favourite"
      component={Home}
    />
  </Tab.Navigator>
);

export default TabRoutes;

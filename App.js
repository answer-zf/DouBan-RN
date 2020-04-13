/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// react navigation 相关导入
import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

// 图标库
import Ionicons from 'react-native-vector-icons/AntDesign';

// 组件
// TabBar
import Home from './components/tabbars/Home.js';
import Search from './components/tabbars/Search.js';
import ShopCar from './components/tabbars/ShopCar.js';
import Me from './components/tabbars/Me.js';

// 徽标
import IconWithBadge from './components/tabbars/IconWithBadge.js';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({color, size}) => (
                <Ionicons name="search1" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="ShopCar"
            component={ShopCar}
            options={{
              tabBarLabel: 'ShopCar',
              tabBarIcon: ({color, size}) => (
                <IconWithBadge
                  name="shoppingcart"
                  badgeCount={3}
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Me"
            component={Me}
            options={{
              tabBarLabel: 'Me',
              tabBarIcon: ({color, size}) => (
                <Ionicons name="user" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
});

export default App;

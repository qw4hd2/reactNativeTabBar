// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import CareScreen from '../Screens/CareScreen';
// import HomeScreen from '../Screens/HomeScreen';

// const Tab = createBottomTabNavigator();

// export default function BottomTabNavigato() {
//   return (
//     <Tab.Navigator>
//     <Tab.Screen options={{ta}} name="HomeScreen" component={HomeScreen} />
//     <Tab.Screen name="CareScreen" component={CareScreen} />
//   </Tab.Navigator>
//   )
// }

// const styles = StyleSheet.create({})
import * as React from 'react';
import { View, TouchableOpacity, StyleSheet,Text,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from './../Screens/Discover/Discover';
import Relax from './../Screens/Relax/Relax';

const Tab = createBottomTabNavigator();

const BottomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tabBarButton, isFocused ? styles.selectedTab : null]}
          >
          <Image resize style={{width:25,height:25}} source={require('../Assests/home.png')}/>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomTabNavigato = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: 'home-outline',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: 'settings-outline',
          tabBarLabelStyle:{
            fontSize:14,
            color:'#000'
          }
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: 'home-outline',
        }}
      />
       <Tab.Screen
        name="Relax"
        component={Relax}
        options={{
          tabBarLabel: 'Relax',
          tabBarIcon: 'home-outline',
        }}
      />
    </Tab.Navigator>
  );
};

// Example screens for Home and Settings
const HomeScreen = () => <View style={styles.screen}><Text>Home Screen</Text></View>;
const SettingsScreen = () => <View style={styles.screen}><Text>Settings Screen</Text></View>;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
  },
  tabBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTab: {
    backgroundColor: '#ff6f00',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -10,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomTabNavigato;

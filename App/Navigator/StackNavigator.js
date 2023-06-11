import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigato from './BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
           <Stack.Screen name="BottomTabNavigato" component={BottomTabNavigato} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
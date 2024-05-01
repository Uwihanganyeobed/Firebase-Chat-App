import { View, Text } from 'react-native'
import React from 'react'
import {Slot} from "expo-router";
import '../global.css';
// Import your global CSS file
export default function _layout() {
  return (
    <View>
      <Slot />
    </View>
  )
}




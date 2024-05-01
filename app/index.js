import { View, Text, TouchableOpacity, Button, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'

export default function StartPage() {
   const [state, setState]=useState(0);
  return (
    <View className='flex-1 justify-center items-center'>
      <ActivityIndicator size='large' color='gray' />
    </View>
  )
}
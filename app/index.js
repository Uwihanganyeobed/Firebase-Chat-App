import { View, Text, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'

export default function Home() {
   const [state, setState]=useState(0);
  return (
    <View className='bg-red-200 pt-20'>
      <Text className='text-3xl text-center'>Home</Text>
      <View className='bg-purple-100 pt-10 '>
         <Text className='text-1xl text-center '>{state}</Text>
         <Button className='btn btn-primary w-20 h-10' title='Increment'onPress={()=>setState(state+1)} />
         <Button className='btn btn-secondary w-20' title='Decrement'onPress={()=>state>0 && setState(state-1)} />
      </View>
    </View>
  )
}
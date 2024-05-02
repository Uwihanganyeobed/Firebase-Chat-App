import { View, Text, TouchableOpacity, Button, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function StartPage() {
   const [state, setState]=useState(0);
   useEffect(()=>{
    
   },[])
  return (
    <View className='flex-1 justify-center items-center'>
      <ActivityIndicator size='large' color='gray' />
      <Button title='Click here to fetch data'onPress={()=>alert('Data fetched')} />
    </View>
  )
}
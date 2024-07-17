import { View, Text, TouchableOpacity, Button, ActivityIndicator, ScrollView } from 'react-native'
import { useEffect, useState } from 'react'
import * as Icon from 'react-native-feather'

export default function StartPage() {
   const [post, setPost]=useState([]);
   const [isLoading, setIsLoading]=useState(true);
   const HandleData= async()=>{
    try{
      const responseData=  await fetch('https://jsonplaceholder.typicode.com/posts');
      const data= await responseData.json();
      setIsLoading(false);
      setPost(data);
    }
    catch(err){
      console.log('erro fetching data', err);
      setIsLoading(false);
    }
  };
   useEffect(()=>{
    HandleData();
   },[])
  return (
    <ScrollView>
    <View className='flex-1 justify-center items-center'>
      {isLoading?(
        <ActivityIndicator size='large'color='blue'/>
        
      ):(
      post.map((data, index)=>(
          <View key={index} className='flex-2 justify-center items-center w-300'>
            <Text  className='text-green-500'>{data.title}</Text>
            <Text className='text-yellow-500'>{data.body}</Text>
          </View>
        ))
      )}
      {/* <Button title='Click here to fetch data'onPress={HandleData} /> */}
      <TouchableOpacity>
      <Icon.ArrowLeft width={30} height={50} stroke='orange' strokeWidth={5}/>
      </TouchableOpacity>

    </View>
    </ScrollView>

  );
}

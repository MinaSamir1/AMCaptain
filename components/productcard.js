import { ActivityIndicator, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { SHADOWS } from '../constants'
import { useState } from 'react';

export default function  ProductCard ({ item, handleCardPress}) {
  const width = Dimensions.get('window').width;
  const [isLoaded, setLoaded] = useState(true)
    
  return (
    <TouchableOpacity
    style={ [{ width: '49%', height: width/1.5, marginTop: 4,
              justifyContent: 'space-between', borderRadius: 20,
              borderColor: 'lightgray', borderWidth: 1, backgroundColor: 'gray',overflow: 'hidden' }, SHADOWS.medium] }
    onPress={handleCardPress} >
    
    {isLoaded &&
      <View style={{ position: 'absolute', top:0, left:0, right:0, bottom: 0, alignItems: "center", 
                      justifyContent: "center" }}> 
        <ActivityIndicator size='large' color='black' />
      </View> }
      
      <Image
        source={{ uri: item.media.mainMedia.image.url }} 
        style={ {flex: 1} }
        resizeMode='cover'
        onLoad={()=> { setLoaded(false) }} />

      <View style={{ padding: 3, paddingLeft: 8 }}>
        <Text style={ { color: 'white', fontSize: width/20, width: '100%'} }
              numberOfLines={1} >
          {item.name}
        </Text>
        <Text style={ { color: 'white', fontSize: width/23, width: '100%', textAlign: 'left',
                        fontWeight: 'bold' ,fontStyle: 'italic'} }>
          {item.price.formatted.price}
        </Text>
      </View>
      
    </TouchableOpacity>
  )
}
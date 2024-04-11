import { Dimensions, Image, Text, TouchableOpacity } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

const CategoryCard = ({ item, handleCardPress}) => {
  const width = Dimensions.get('window').width;
    
  return (
    <TouchableOpacity 
    style={ { width: width/2, height: width/2,
              justifyContent: 'space-between', borderRadius: 20,
              backgroundColor: 'gray', overflow: 'hidden' } }

    onPress={() => handleCardPress(item)} >

    <Image
        source={{ uri: item.media.mainMedia.image.url }} 
        style={ {width: '100%', height: '100%', flex: 1} }
        resizeMode='stretch' />
    
    <LinearGradient
      colors= {['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
      style = {{width: '100%', height: '50%', position: 'absolute', bottom: 0}}
      start = {{ x: 0.5, y: 0.2 }}
      end   = {{ x: 0.5, y: 1 }} />

      <Text style={ {position: 'absolute', bottom: 0, color: 'white', fontSize: 20, 
                     padding: 10, width: '100%', 
                    textAlign: 'center'} }
            numberOfLines={1} >
        {item.name}
      </Text>
      
    </TouchableOpacity>
  )
}

export default CategoryCard
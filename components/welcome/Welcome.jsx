import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useState } from 'react'

import styles from './welcome.style'

const Welcome = () => {

  return (
    <View>

      <View style={styles.container}>
        <Text style={styles.userName}>Hello Mina</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Product</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            //value=''
            //onChange={() => { }}
            placeholder='What are you looking for?' />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Welcome
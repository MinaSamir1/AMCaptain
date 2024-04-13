import {
    ActivityIndicator,
    FlatList,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useEffect, useState } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from "../../components/categorycard";
import { SIZES } from "../../constants";
import Welcome from "../../components/welcome/Welcome";
import fetch_AllCollections from "../../API/Categories";
import styles from "./Home.style";

const Home = ({ navigation }) => {
    const [data, seData] = useState()
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {

      // Check if collections exist in AsyncStorage
      if(!AsyncStorage.getItem('collections')){
        console.log('Collections already exist in AsyncStorage');
        AsyncStorage.getItem('collections').then((res) => {
          seData(JSON.parse(res));
          console.log('Data from AsyncStorage:', JSON.parse(res));
          setIsLoading(false);
        })
      }
      else {
        console.log('Collections do not exist in AsyncStorage');
        fetch_AllCollections().then((res) => {
        seData(res['collections']);
        setIsLoading(false);
      })
      }
    }, []);
       
    const handleCardPress = (item) => {
      navigation.navigate('Category', item );
    };
    
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
          flex: 1,
          padding: SIZES.medium,
          paddingTop: 30
        }}>

          <Welcome />
          
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Product Categories</Text>
              <TouchableOpacity>
                <Text style={styles.headerBtn}>Show all</Text>
              </TouchableOpacity>
            </View>
      
            <View style={styles.cardsContainer}>
              {isLoading ? (
                <ActivityIndicator size='large' color='#312651' />
              )  : (
                <FlatList
                  data={data}
                  renderItem={({ item }) => (
                    <Card
                      item={item}
                      handleCardPress={handleCardPress}
                    />
                  )}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={{ columnGap: 16 }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              )}
            </View>
          </View>
      </View>
      </ScrollView>
    );
  };
  
  export default Home;
  
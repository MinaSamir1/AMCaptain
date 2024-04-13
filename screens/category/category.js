import { ActivityIndicator, Dimensions, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";

import ProductCard from "../../components/productcard";
import Profile from "../../components/profile";
import fetch_AllProducts from "../../API/CategoryProducts";

export default function Category({ route, navigation }) {
    const item = route.params
    width = Dimensions.get('window').width;
    const [data, setData] = useState([])

    useEffect(() => {
        fetch_AllProducts({ ID: item.id, offset: 0 }).then((data) => {
            console.log('Data');
            setData(data.products);
        });
    }, [])

    return (
        <SafeAreaView style={{padding: 5,  backgroundColor: 'white'}}>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<Profile item={item} />}
                data={data}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                renderItem={({ item }) => (
                    <ProductCard item={item} handleCardPress={()=> navigation.navigate('Product', item) } />
                )}
            />
            <TouchableOpacity style={{width: 40, height: 40, position: 'absolute', top: 40, left: 20,
                borderColor: 'black', backgroundColor: '#FF7754', borderRadius: 10}} 
                onPress={ () => navigation.goBack() }/>

        </SafeAreaView>
    );
}
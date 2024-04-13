import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import Profile from '../../components/profile';

export default function Product ({ route, navigation }) {
    const item = route.params;
    const description = item.description.replace(/<[^>]+>/g, '\n');
    return (
        <ScrollView>
        <SafeAreaView style={{ flex: 1 ,padding: 3, backgroundColor: 'lightgray'}}>
            <Profile item={item} />
            
            <View style={{ margin: 7, backgroundColor: 'white', borderRadius: 15 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 10 }}>Description</Text>
                <Text style={{ fontSize: 20, margin: 10 }}>{description}</Text>
            </View>
        </SafeAreaView>
        </ScrollView>
        )
}
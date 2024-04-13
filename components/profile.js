import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'

export default function Profile({ item }) {
    width = Dimensions.get('window').width;
    return (
        
        <View style={{ width: '100%', height: width, borderRadius: 25, overflow: 'hidden' }}>
                <Image
                    source={{ uri: item.media.mainMedia.image.url }}
                    resizeMode="stretch"
                    style={{ width: '100%', height: '100%'}} />
                
                <LinearGradient
                    colors= {['transparent', 'rgba(23, 23, 23, 0.6)', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
                    style = {{width: '100%', height: '50%', position: 'absolute', bottom: 0}}
                    start = {{ x: 0.5, y: 0.2 }}
                    end   = {{ x: 0.5, y: 1 }} />
                    
                <Text style={ {position: 'absolute', bottom: 5, color: 'white', fontSize: width/15, 
                                fontStyle: 'italic', fontVariant: ['small-caps'], fontWeight: 'bold',
                                padding: 5, width: '100%', textAlign: 'center'} }
                        numberOfLines={2} >
                    {item.name}
                </Text>
        </View>


    );
}
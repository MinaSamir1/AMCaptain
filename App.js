import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import Home from './screens/home/Home';
import { SIZES } from './constants';
import Welcome from './components/welcome/Welcome';

export default function App() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{
        flex: 1,
        padding: SIZES.medium,
        paddingTop: 30
    }}>
        <Welcome />
        <Home />
    </View>
</ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import getToken from './ClientID';

async function fetch_AllCollections() {
  try {
    const ACCTOKEN = await getToken();
    const request_data = {
      query: {},
      includeNumberOfProducts: true,
      includeDescription: true
    }

    const response = await axios.post('https://www.wixapis.com/stores/v1/collections/query', request_data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': ACCTOKEN
      }
    });
    const data = await response.data;
    await AsyncStorage.setItem('collections', JSON.stringify(data['collections']));
    return data;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    throw error;
  }
}

export default fetch_AllCollections;

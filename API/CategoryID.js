import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import get_token from './ClientID';

async function fetchCollection(COL_ID) {
  const COLLECTION_ID = "3a6fd253-442c-4bb2-32f7-88e01a0ef1d8";
  const ACCTOKEN = await get_token();
  console.log(ACCTOKEN);
  const options = {
    headers: {
      'Authorization': ACCTOKEN
    }
  };
  try {
    const response = await axios.get(`https://www.wixapis.com/stores/v1/collections/${COLLECTION_ID}?includeNumberOfProducts=true`, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching collection:', error);
    throw error;
  }
};

export default fetchCollection;
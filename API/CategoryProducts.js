import axios from 'axios';
import getToken from "./ClientID";

async function fetch_AllProducts() {
  try {
    const COLLECTION_ID = "3a6fd253-442c-4bb2-32f7-88e01a0ef1d8";
    const ACCTOKEN = await getToken();
    const request_data = { 
      query: { paging: { limit: 100, offset: 0 },
      filter: `{"collections.id": { "$hasSome": ["${COLLECTION_ID}"]} }`
    }};

    const response = await axios.post('https://www.wixapis.com/stores/v1/products/query', request_data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': ACCTOKEN
      },
    });

    const data = await response.data;
    return data;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    throw error;
  }
}

export default fetch_AllProducts;
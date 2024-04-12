import axios from 'axios';
import getToken from "./ClientID";

async function fetch_AllProducts({ ID , offset}) {
  try {
    const COLLECTION_ID = ID;
    const ACCTOKEN = await getToken();
    const request_data = { 
      query: { paging: { limit: 100, offset: offset },
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
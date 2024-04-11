import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

async function getToken() {

    try {
        if (await AsyncStorage.getItem('TOKENDATA')) {
            const data = await AsyncStorage.getItem('TOKENDATA');
            parse_data = JSON.parse(data);
            
            if (parse_data['expires_in'] > (Date.now() /1000)) {
                return parse_data['access_token'];
            } else {
                const refresh_token = parse_data['refresh_token'];
                const refred_data = await RefreshToken(refresh_token);
                return refred_data['access_token'];
            }
        }

        console.log('Fetching token');
        const data = await NewToken();
        return data['access_token'];

    } catch (error) {
        console.error('Error fetching token:', error);
        throw error;
    }
}
export default getToken;


async function MakeRequest(options) {
    const url = "https://www.wixapis.com/oauth2/token";

    const response = await axios.post(url, options);
    const data = await response.data;
    data['expires_in'] = data['expires_in'] + (Date.now() /1000);
    await AsyncStorage.setItem('TOKENDATA', JSON.stringify(data));
    return data;
}

async function NewToken(){
    const clientId = "d8ec7caf-7738-4f83-802d-d23786204f76";

    const options = {
        clientId: clientId,
        grantType: "anonymous",
        headers: {'Content-Type': 'application/json'}
    }
    const data = await MakeRequest(options);
    return data;
}

async function RefreshToken(refresh_token){

    const options = {
        "refresh_token": refresh_token,
        "grantType": "refresh_token"
    }
    const data = await MakeRequest(options);
    return data;
}
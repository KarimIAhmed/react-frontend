import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'localhost:8080/JooleMarketplace/users/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL);
    }
    
}

export default new UserService();

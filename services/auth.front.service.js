/**
 * @services layer at frontend.
 * @source: https://dev.to/julfikarhaidar/implementation-axios-and-vuejs-with-separate-service-2603
 *
 */
import axios from 'axios';
const URL = 'http://localhost:3000/api/sessions';

/**
 *
 * Config Header be used for every request data
 *
 */
export const headerConfig = {
    header: {
        "Content-Type": "application/json"
    }
}

/**
 * Frontend - Login Authentication Services
 *
 * @param { Object } data
 */
export async function login(data) {
    const loginUri = URL.toString() + '/login';
    const response = await axios.post(loginUri, data, headerConfig);

    return response.data;
}

/**
 * Frontend - Register Services
 *
 * @param { Object } data
 */
export async function register(data) {
    const registerUri = URL.toString() + '/register';
    const response = await axios.post(registerUri, data, headerConfig);

    return response.data;
}

/**
 * Frontend - Logout Notification
 * @returns { String } message
 */
export async function logout(){
    const logoutUri = URL.toString() + '/logout';
    const response = await axios.delete(logoutUri, headerConfig);
    const message = 'Succesfull logout'

    if (!response.data){
        return 'Cannot Logout'
    }

    return message;
}
import axios from 'axios'
import { host } from '../constants'
const encodedString = Buffer.from('Myhandyafrica@gmail.com:e2b1b93e3082485a308992c8c30e06c1').toString('base64');

const baseUrl = `${host}/api/v1`

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${encodedString}` 
}

export const createWorker = (data) => {
    const requestOptions = {
        method: "post",
        url: `${baseUrl}/provider/create-provider`,
        headers: headers,
        data: data
    }
    return axios(requestOptions);
}

export const loginWorker = (data) => {
    const requestOptions = {
        method: "post",
        url: `${baseUrl}/provider/login-provider`,
        headers: headers,
        data: data
    }
    return axios(requestOptions);
}

export const getWorker = (payload) => {
    headers.authorization = `Bearer ${payload}`
    const requestOptions = {
        method: "get",
        url: `${baseUrl}/provider/get-provider`,
        headers: headers,
    }
    return axios(requestOptions);
}

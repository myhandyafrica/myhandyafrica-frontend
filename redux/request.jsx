import axios from 'axios'
import { host } from '../constants'
const encodedString = Buffer.from('Myhandyafrica@gmail.com:e2b1b93e3082485a308992c8c30e06c1').toString('base64');

const baseUrl = `${host}/api/v1`

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${encodedString}`,
    crossdomain: true
}

export const setStorageItem = (name, value) => {
    return localStorage.setItem(name, value)
}

export const getStorageItem = (name) => {
    return localStorage.getItem(name)
}

export const removeStorageItem = (name) => {
    return localStorage.removeItem(name)
}

export const createAccount = (data) => {
    const requestOptions = {
        method: "post",
        mode: "cors",
        url: `${baseUrl}/account/create-account`,
        headers: headers,
        data: data
    }
    return axios(requestOptions);
}

export const loginWorker = (data) => {
    const requestOptions = {
        method: "post",
        url: `${baseUrl}/account/login-account`,
        headers: headers,
        data: data
    }
    return axios(requestOptions);
}

export const getWorker = (payload) => {
    headers.Authorization = `Bearer ${payload}`
    const requestOptions = {
        method: "get",
        url: `${baseUrl}/account/get-account`,
        headers: headers,
    }
    return axios(requestOptions);
}

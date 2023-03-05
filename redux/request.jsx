import axios from 'axios'
import { host } from '../constants'
const encodedString = Buffer.from(`${process.env.NEXT_PUBLIC_AUTH_EMAIL}:${process.env.NEXT_PUBLIC_AUTH_PASSWORD}`).toString('base64');
// const baseUrl = `${host}/api/v1`
const baseUrl = `https://myhandy-tluw.onrender.com/api/v1`

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

export const getProvidersByService = (serviceId) => {
    const requestOptions = {
        method: "get",
        url: `${baseUrl}/service/find-providers/${serviceId}`,
        headers: headers,
    }
    return axios(requestOptions);
}

export const getAllSercvices = () => {
    const requestOptions = {
        method: "get",
        url: `${baseUrl}/service/services`,
        headers: headers,
    }
    return axios(requestOptions);
}

import axios from 'axios';

const token = localStorage.getItem('tokenUser')

export const HTTP = axios.create({
  baseURL: `https://server-real-estate.herokuapp.com/`,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+ token
  }  
})

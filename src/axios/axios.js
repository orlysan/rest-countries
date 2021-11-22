import axios from 'axios';
import { URL } from './constants'

axios.defaults.baseURL = URL;   

export const getCounriesList = axios.get('https://restcountries.com/v2/all/', { 
    params: {
        name: 'peru',
        capital: 'lima',
        flags : 'https://restcountries.com/data/png/col.png',
        region: "South America",
        population: '48759958'
    }})
    .then(res => {
        console.log(res.data)
    })
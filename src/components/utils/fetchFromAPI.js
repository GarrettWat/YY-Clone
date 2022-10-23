import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'd7724e50d8msh3c2204b934f3164p15c9a4jsn8db31305e44c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
   const { data }=  await axios.get(`${BASE_URL}/${url}`, options)

   return data
  }
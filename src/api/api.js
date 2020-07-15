import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'e8ab444e0a1bcb76f157e56533d0e5ec'

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    },
  })
  return data
}

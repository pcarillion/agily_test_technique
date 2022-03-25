import axios from 'axios'




export const getCityCoordinates = async city => {
    return await axios.get('http://api.openweathermap.org/geo/1.0/direct', {
            params: {
                q : city,
                limit : 5,
                appid:process.env.REACT_APP_API_KEY
            }
        })
}

export const getMeteoForCity = async coordinates => {
    return await axios.get('https://api.openweathermap.org/data/2.5/onecall', {
        params: {
            lat: coordinates.lat,
            lon: coordinates.lon,
            appid: process.env.REACT_APP_API_KEY,
            units: "metric"
        }
    })
}
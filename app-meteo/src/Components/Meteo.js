import React, {useState, useEffect} from 'react'
import { getMeteoForCity} from '../api/meteo'
import '../styles/meteo.css'


const Meteo = ({handlePage, city}) => {

    const [data, setData] = useState()
    const [coordinates, setCoordinates] = useState({})

    // récupérer les coordonnées de la ville
    useEffect(() => {
        setCoordinates({lat: city.lat, lon: city.lon}) 
        // useEffect to be cleaned
    }, [city])
    
    // appeler l'API pour récupérer les données météorologiques
    useEffect(()=> {
        if (coordinates.lon && coordinates.lat) {
            getMeteoForCity(coordinates).then(res => {setData(res.data)})
        }
        // useEffect to be cleaned
    }, [coordinates])

    const getDateFR = i => {
        const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + i)
        return tomorrow.toLocaleDateString("fr")
    }

  return (

    <div className="meteo-container">
        {/* bouton de retour */}
        <div onClick={() => handlePage(city)}>Retour</div>
        {/* affichage des données */}
        {
            data &&
            <div>
                <h2>{city.name}, {city.country}</h2>
                <div>
                    <h3>Actuellement</h3>
                    <p>{getDateFR(0)}</p>
                    <p>Température: {data.current.temp} degrés C.</p>
                    <p>Pression: {data.current.pressure} hPa</p>
                    <p>Vent: {data.current.wind_speed * 3.6} km/H</p>
                </div>
                <div>
                    <h3>Les 7 prochains jours</h3>
                    {data.daily.map((day, i) => {
                        if (i > 0) {
                            return <p key={i}>{getDateFR(i)} <br/>{day.temp.day} degrés C.</p>
                        }
                    })}
                </div>
            </div>
        }
    </div>
  )
}

export default Meteo
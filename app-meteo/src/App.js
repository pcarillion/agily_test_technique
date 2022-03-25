import React, {useState} from 'react'
import Welcome from './Components/Welcome'
import Meteo from './Components/Meteo'
import './App.css';

const App = () => {
  const [isMeteoPage, setMeteoPage] = useState(false)
  const [city, setCity] = useState("")
  const handlePage = (city) => {
    setMeteoPage(!isMeteoPage)
    setCity(city)
  }

  return (
    <div>
    {isMeteoPage ?
      <Meteo handlePage={handlePage} city={city}/>:
      <Welcome handlePage={handlePage}/>}
    </div>
  )
}

export default App
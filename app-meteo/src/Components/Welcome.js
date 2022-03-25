import React, {useState, useEffect} from 'react'
import {getCityCoordinates} from '../api/meteo'
import '../styles/welcome.css'

const Welcome = ({handlePage}) => {

    const [search, setSearch] = useState('')
    const [apiResults, setResults] = useState([])

    // lorsque l'utilisateur entre un mot dans l'inpu
    const handleInputChange = e => {
        setSearch(e.target.value );
    }

    // si plus de 3 caractères, rechercher via l'API les 5 premiers résultats de villes
    useEffect(() => {
        if (search.length > 3) {
            getCityCoordinates(search)
            .then(res => {
                setResults(res.data)
            })
        } else {
            setResults([])
        }
        // useEffect to be cleaned
    }, [search])


    // au clic sur une des villes, lancer la recherche
    const onFormSubmit = (result) => {
        handlePage(result)
    }

  return (
    <div className="welcome-container">
        <h1>The Forcast <br/> Weather App</h1>
            <input className="searchbar" type="text" placeholder={'Search'} onChange={handleInputChange}/>
            {/* display des résultats de recherche */}
            <div className="results-container">
                <div className="results-content">
                    {apiResults.length > 0 && apiResults.map((result, i) => {
                        return <button key={i} onClick={() => onFormSubmit(result)}>
                            {result.name}, {result.country}
                        </button>
                    })}
                </div>
            </div>
    </div>
  )
}

export default Welcome
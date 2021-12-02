import React from 'react'
import axios from 'axios'
import {useState, useEffect} from "react"
import { Link } from 'react-router-dom'

function CountriesList() {
    const [countries, setCountries] = useState([])
        
    // this will run just once after the component has mouted     
    useEffect(async () => {
       let response =  await axios.get("https://restcountries.com/v3.1/all")
       setCountries(response.data)
    }, [])
    

    if (!countries.length) {
        return <p>Loading...</p>
    }

    return (
        <div>
        <h1>Countries</h1>
         {
             countries.map((elem, index)=> {
                 return (
                     <div className="countryList">
                     <img src={elem.flags.svg} alt="flag" height="100px"></img>
                     <p><Link to={`countries/${elem.cca3}`}>
                        {elem.name.common}
                    </Link></p>
                     </div>

                 )
             })
         }
         </div>
    )
}

export default CountriesList

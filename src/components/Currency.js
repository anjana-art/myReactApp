import React , {useState, useEffect} from 'react'
import axios from 'axios'

function Country(props){

    return(

    )

}

function Currency(){
    const [searchTerm, setSearchTerm] = useState("")
    const [countries, setCountries] = useState([])


    useEffect(() => {
        const searchCountry = async () => {
            const endpoint = ( " " ===searchTerm ? `https://restcountries.com/v3.1/all
            `)
            const{
                data: countryData;
            } = await axios.get(endpoint);
            setCountries(countryData);
            }
        }
    })
  return (
    <div>
      <SearchCountryINput  searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}/>
     {countries.map(country => {return <Country {...countries}/>}
    </div>
  )
  }

export default Currency

import React, {useState, useEffect } from 'react'
import axios from "axios";


function Axios(){

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(()=> {
        setIsLoading(true)
        axios.get(" https://www.boredapi.com/api/activity")
        .then(resopnse => setData(resopnse.data))
        .then(data => {setIsLoading(false)})
        .catch(error => console.error(error));
    },[]
    )

  return (
    <div>
      {isLoading ? <p>Loading...</p> :
                <p>Activity: {data.activity}
                <br></br>Type: {data.type}
                <br></br>Participant: {data.participants}
                <br></br>Price: {data.price}
                </p>}
    </div>
  )
}

export default Axios

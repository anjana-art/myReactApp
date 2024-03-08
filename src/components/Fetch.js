import React, { useState, useEffect } from 'react'


function Fetch() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        setIsLoading(true);
        fetch("https://www.boredapi.com/api/activity")
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            {isLoading ? <p>Loading...</p> :
                <p>Activity: {data.activity}
                <br></br>Type: {data.type}
                <br></br>Participant: {data.participants}
                <br></br>Price: {data.price}
                </p>}

        </div>
    );
}

export default Fetch

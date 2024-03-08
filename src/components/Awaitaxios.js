import axios from "axios";
import { useState, useEffect } from "react";


export default function Awaitaxios() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(" https://www.boredapi.com/api/activity");
      setData(response.data);
    } catch (err) {
      const errorMessage = "Error: " + err.message;
      setError(errorMessage);
      console.log(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return "Loading...";
  if (error) return error;

  return (
    <div className="App">
      
      <p>Activity:{data.activity}
      <br></br>Type: {data.type}
      <br></br>Participant: {data.participants}
      <br></br>Price: {data.price}
      </p>
    </div>
  );
}



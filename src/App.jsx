import Map from "./components/Map/Map";
import { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";
function App() {
  const [loading, setLoading] = useState(false);
  const [longitude, setLongitude] = useState(0.1276);
  const [latitude, setLatitude] = useState(51.5072);

  useEffect(() => {
    getLocation()
  }, [])

  const getLocation = async () => {
    setLoading(true);
    const res = await axios.get('http://api.open-notify.org/iss-now.json')
    const{longitude, latitude} = await res.data.iss_position;

    setLatitude(latitude);
    setLongitude(longitude);
    console.log(latitude)
    console.log(longitude)
    setLoading(false);
  }

  return (
    <div className="App">
      {!loading ? (
        <Map center={{ lat: latitude, lng: longitude }} zoom={4}/>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;

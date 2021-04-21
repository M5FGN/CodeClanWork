import {useState, useEffect} from "react";
import './App.css';

function App() {

    const [dogImgUrl, setDogImgUrl] = useState("");

    useEffect(()=>{
      fetchDog();
    }, [])

  const fetchDog = function(){

    // Fetch Request to get back promise from JSON and call then and response a promise is again returned so do another then.
    const request = fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    // .then((data) => console.log(data));
    .then((data) => {setDogImgUrl(data.message)});
  }
  

  return (
    <div id="app">
    <h1>RANDOGMISER</h1>
    <img id="dog-img" src={dogImgUrl} />
    <button onClick={fetchDog}>Gimme those dogs!</button>
    </div>
  );
}

export default App;

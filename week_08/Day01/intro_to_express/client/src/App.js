import './App.css';
import React, {useState, useEffect} from "react";

function App() {

  const [message, setMessage] = useState('');
  // Adds a fetch to get the API that we created and which is currently running on Port 5000
  useEffect(() => {
  fetch('http://localhost:5000')
  .then(res => res.json())
  .then(data => setMessage(data.message))
  })

  return (
    <div>
    <h1>Intro to Express</h1>
    <p>{message}</p>
    </div>

  );
}

export default App;
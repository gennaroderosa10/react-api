import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from "axios";

function App() {
  const [attrici, setAttrici] = useState([])

  useEffect(() => {
    fetchAttrici();
  }, []);

  function fetchAttrici() {
    axios
      .get(`https://lanciweb.github.io/demo/api/actresses/`)
      .then((resp) => {
        setAttrici(resp.data)
        console.log(resp.data)
      })
  }



  return (
    <>
      <header>
        <nav className="navbar bg-body-tertiary">
          <h1>
            ATTRICI

          </h1>
        </nav>
      </header>


    </>
  )
}

export default App

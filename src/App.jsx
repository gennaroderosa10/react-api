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

      <main className='container mt-4'>
        <div className="row">

          {attrici.map((attrice, index) => {
            return (
              <div className="card col-3 g-3" key={index}>
                <img src={attrice.image} className="card-img-top" alt={attrice.name} />
                <div className="card-body">
                  <h5 className="card-title">{attrice.name}</h5>
                  <p className="card-text">
                    {attrice.biography}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{attrice.birth_year}</li>
                  <li className="list-group-item">{attrice.nationality}</li>
                  <li className="list-group-item">{attrice.awards}</li>
                </ul>
              </div>
            );
          })}




        </div>



      </main>


    </>
  )
}

export default App

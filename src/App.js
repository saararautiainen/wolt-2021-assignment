import React, { useState, useEffect } from 'react';
import './App.css';
import Carousel from './Components/Carousel';
import { Grid } from '@material-ui/core';

function App() {

  const [data, setData] = useState([]);

  const getData = () => {
    fetch('data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {

        return response.json();
      })
      .then(function (myJson) {

        setData(myJson.sections);

      });
  }

  useEffect(() => {
    
    getData()
  });



  return (
    <Grid container justify="center" m={1} >
<div>
      {data.map((item, i) => {
        if (item.title) {

          return (
            <Carousel key={i} title={item.title} restaurants={item.restaurants} />

          ) 
        } else {
          return null
        }
      }
      )}

    </div>
    </Grid>


  );


}

export default App;

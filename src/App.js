import React, { useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000'
})

function App() {
  
 

useEffect(()=> {
  api.get('/').then(res => {
    console.log(res.data);
  })
}, [])

  return (
    <div >

    </div>
  );
}

export default App;

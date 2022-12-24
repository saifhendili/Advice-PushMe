import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Icon } from 'semantic-ui-react'
import './style.css';
import { Button } from 'semantic-ui-react'

function App() {
const [advice,setadvice]=useState("")
const fetchAdvice = () => {
  axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      const { advice } = response.data.slip;

      setadvice(advice)
    })
    .catch((error) => {
      console.log(error);
    });
}
    useEffect(()=>{
      fetchAdvice()
    },[])

 
    return !advice?<h1>loading</h1>: (
        <div className="app">
          <div className="card">
            <h1  style={{marginBottom:50,padding:20,color:"white"}}>{advice}</h1>
              
            <Button style={{padding:16,marginBottom:10}} onClick={fetchAdvice} color='orange'>
            <Icon name='sun' /> PUSH ME!
            </Button>
            
          </div>
        </div>
      );
}

export default App
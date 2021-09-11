import Navbar from '../components/NavBar'
import {useEffect, useState} from 'react'
import React from 'react';
import {api} from '../services/api'
import axios from 'axios'
import Guias from'../components/guias'
import '../styles/visualizar.css'



function Visualizar(props) {

const [data,setData]=  useState([]);  
const [id,setId]= useState(props.match.params.id)






useEffect(()=>{


  

  const getInformation = async ()=>{
    await axios.get(api + "/places/" + id)
    
    .then((response)=>{
      console.log(response.data.places)
      setData(response.data.places)
      
    })
    .catch(()=>{
 console.log("erro:tente mais tarde")
    })
  }
  getInformation()

},[id])






  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
    
      <main className="container">
    <div className="row container">
      <div className="col-md-6 mr-5 mt-5 col-xs-12 ">
        <img src={data.Images} className="img-fluid" alt="imagen de la ciudad que deseas conocer "/>

      </div>
      <div className="col-md-4  col-xs-12  ml-3 mt-5">

        <h1 className="text-primary ">{data.namePlaces}</h1>
        <p className="">{data.description}</p>
    
    


      </div>

      <Guias/>
    </div>

   
          
      </main>
      
   
    </div>
  );
}

export default Visualizar;
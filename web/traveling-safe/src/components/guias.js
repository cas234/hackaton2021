import axios from "axios"
import {useEffect, useState} from "react"
import {api} from '../services/api'

function Guias (props){
const [data,setData]= useState([])


useEffect(()=>{
    const getGuias = async () =>{
        await axios.get(api + "/guias/" )
        .then((response)=>{
            console.log(response.data.guias)
            setData(response.data.guias)
        })
        .catch(()=>{
            console.log("erro na conexao")
        })
       
    }
    getGuias()
})


    return(
        <div className="mt-5">
                {data.map((item) => (
                            <div>
                        <h1>{item.city}</h1>

        <img src={item.Images} alt="foto del guia"/>
                    <p>{item.name}</p>
        </div>

))}

        </div>


    )
    
}

export default Guias;
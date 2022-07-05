import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './App.css';
import './Principal.css';

export default function Pokemon() {
  const params = useParams()
  const [pokemon, setPokemon] = useState({
    sprites:{
      front_default:""
    }
  })
  const obtenerInformacion =async (id) =>{
    console.log(id)
    const data= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    setPokemon(data.data)
    console.log(data.data)

  
  } 
  useEffect(() => {
    obtenerInformacion(params.id)

  }, [params])

  return (
    <div className='principal'>
    <div > 
     <div className='img2'>
        <h1 >{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt="pokemon" className='img2' />
        </div>

    </div>
    </div>
  )
}

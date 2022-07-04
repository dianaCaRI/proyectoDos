import './App.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [lista, setLista] = useState([{}]);
  const [ocultar, setOcultar] = useState(false);
    const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    const get = async () => {
      const data = await axios.get("https://pokeapi.co/api/v2/pokemon")
      setLista(data.data.results)
      return data.data    
  }
  get()
   },[]);
  const obtenerInformacion =async (id) =>{
    console.log(id)
    navigate(`/pokemon/${id}`);
    const data= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    setPokemon(data.data)
    console.log(data.data)
    setOcultar(true)
  }
  
 
  return (
    <div className="App" >
    <p> LISTA POKEMON </p>

     <ul className='fondolist'>
        {lista.map((lista , index) => (
   <div>   
          <li key={lista.name} className="nombre">
         {lista.name}
         

          </li>
          <button onClick={() => obtenerInformacion(index+1)} className="boton">Mostrar</button>
          
   </div>
        ))}

      </ul> 

      <div >
        <img src='https://eltallerdehector.com/wp-content/uploads/2022/06/83327-pikachu-png-editable.png' className='pika'></img>
        <img src='https://cdn.icon-icons.com/icons2/896/PNG/512/pokemon_go_play_game_cinema_film_movie_icon-icons.com_69163.png' className='pokebola'></img>
      </div>
      
    </div>
  );
}

export default App;

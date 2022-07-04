import React from 'react'
import { NavLink } from 'react-router-dom'
import './Principal.css';
import './App.css';
import './Principal.css';



export default function Rutas() {
  return  (
    <div >
        <nav >
  <div>

    <div >
      <br></br>

      <ul>

        <button>
        <img src='https://cdn.icon-icons.com/icons2/896/PNG/512/pokemon_go_play_game_cinema_film_movie_icon-icons.com_69163.png' ></img>
                            <NavLink to="/"   className="ruta">                              Pokemon                          </NavLink>

        </button>
        </ul>

      <br></br>
      <ul>
        <button>
          <img src='https://cdn.20m.es/img2/recortes/2016/10/27/365243-944-1258.jpg?v=20161027203424' ></img>
                                   <NavLink to="/150245"  className="ruta" >                              Alumno                         </NavLink>
        </button>
      </ul>  
    </div>
  </div>
</nav>
    </div>
  )
}

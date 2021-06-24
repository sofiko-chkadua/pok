import './Cards.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"
import PokemonPage from '../PokemonPage/PokemonPage';


function Cards({ pokemons, catchClickHanlder, setCatchedPokemon }) {
  const [visiblePokemon, setvisiblePokemon] = useState(21)

  const handlerLoadMore = () => {
    setvisiblePokemon((prevValue) => prevValue + 21);
  }

  function catchHandler(pokemon) {
    catchClickHanlder(pokemon)
    setCatchedPokemon(pokemon)
  }


  return (
    <>
      <h2 className="cards__title">Welcome to <span className="cards__span">Pokedex</span> — pokemon catching app!</h2>
      <ul className="cards">
        {pokemons.slice(0, visiblePokemon).map(pokemon => (
          <li key={pokemon.id} className="cards__item margin">
            <button className="cards__button" disabled={pokemon.catched} onClick={() => catchHandler(pokemon)}>
              {
                pokemon.catched ? 'CATCHED' : 'CATCH'
              }
            </button>
            <Link className="cards__link" to={`/${pokemon.name}`}>
              <div className="cards__wrapper">
                <img className="cards__img" src={`img/${pokemon.id}.png`} alt={pokemon.name} />
                <div className="cards__info-wrapper">
                  <h3 className="cards__info cards__info_title">Name:</h3>
                  <h3 className="cards__info">{pokemon.name}</h3>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <button onClick={handlerLoadMore} className="cards__loadmore">LOAD MORE</button>

    </>
  )
}

export default Cards;

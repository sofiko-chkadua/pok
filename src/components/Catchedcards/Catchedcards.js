
import { Link } from 'react-router-dom';

function Catchedcards({ catchedPokemons }) {
  console.log('catchedPokemons', catchedPokemons)

  return (
    <>
      <ul className="cards">
        {catchedPokemons.map(pokemon => (
          <li key={pokemon.id} className="cards__item margin">
            <Link className="cards__link" to={`/${pokemon.name}`}>
              <div className="cards__id">{pokemon.id}</div>
              <img className="cards__img" src={`img/${pokemon.id}.png`} alt={pokemon.name} />
              <div className="cards__info-wrapper">
                <h3 className="cards__info cards__info_title">Name:</h3>
                <h3 className="cards__info">{pokemon.name}</h3>
                </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Catchedcards;

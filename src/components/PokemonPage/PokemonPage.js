import './PokemonPage.css';
import { useParams } from "react-router";
import { useEffect, useState } from 'react';

// эти pokemons - это покемонс со всеми св-вами
const PokemonPage = ({ pokemons }) => {
    const { name } = useParams();

    const pokemon = pokemons.find(pokemon => pokemon.name === name)
    console.log(pokemon.data)

    
    return (
        <>
            <div className="pokemonpage">
                <h2 className="pokemonpage__header">We are glad to introduce you {pokemon.name}! &#128526;</h2>
                <div className="pokemonpage__wrapper">
                    <img className="pokemonpage__img" src={`img/${pokemon.id}.png`} alt={pokemon.name} />
                    <div className="pokemonpage__descr">
                        <div className="pokemonpage__id-wrapper">
                            <h3 className="pokemonpage__id-title">ID:</h3>
                            <h3 className="pokemonpage__id">{pokemon.id}</h3>
                        </div>
                        <div className="pokemonpage__info-wrapper">
                            <h3 className="pokemonpage-title">Name:</h3>
                            <h3 className="pokemonpage__info">{pokemon.name}</h3>
                        </div>
                        <h3 className="pokemonpage__description">{pokemon.description}</h3>
                        <div className="pokemonpage__status">
                            <h3 className="pokemonpage__status-title">Status:</h3>
                            <p className="pokemonpage__status-value"> {pokemon.catched ? 'CATCHED' : 'NOT CATCHED'}</p>
                            <p className="pokemonpage__data">{pokemon.data}</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default PokemonPage;
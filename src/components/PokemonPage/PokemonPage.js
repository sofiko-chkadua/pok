import './PokemonPage.css';
import { useParams } from "react-router";

// const PokemonPage = ({pokemons, bla}) => {

//     return (
//         {pokemons}
//     )
// }



// const PokemonPage = (props) => {

//     return (
//         {props.pokemons}
//         {props.bla}
//     )
// }



const PokemonPage = ({ pokemons }) => {
    const { name } = useParams();

    const pokemon = pokemons.find(pokemon => pokemon.name === name)
console.log(pokemon)

    return (
        <>
            <div className="pokemonpage">
                <div className="pokemonpage__wrapper">
                <img className="pokemonpage__img" src={`img/${pokemon.id}.png`} alt={pokemon.name} /> 
                <div className="pokemonpage__descr">
                    <div className="pokemonpage__id-wrapper"></div>
                <div className="pokemonpage__id">{pokemon.id}</div> 
                <div className="pokemonpage__info-wrapper">
                    <h3 className="pokemonpage-title">Name:</h3>
                <h3 className="pokemonpage__info">{pokemon.name}</h3>
                </div>
                <h3 className="pokemonpage__description">{pokemon.description}</h3>
                <div className="pokemonpage__status">
                    <h3 className="pokemonpage__status-title">Status:</h3>
                    <p className="pokemonpage__status-value"> {pokemon.catched ? 'catched' : 'not catched'}</p>
                    <p className="pokemonpage__data">{pokemon.data}</p>
                    </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default PokemonPage;
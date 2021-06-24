import './App.css';
import Cards from './components/Cards/Cards'
import Catchedcards from './components/Catchedcards/Catchedcards'
import PokemonPage from './components/PokemonPage/PokemonPage';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

function App({ props }) {
  const [pokemons, setPokemon] = useState([]);
  const [catched, setCatched] = useState([]);


  function setCatchedPropToPokemon(pokemon) {
    const newPokemons = [...pokemons]
    const clickedPokemon = newPokemons.find(p => p.name === pokemon.name)
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newdate = day + "/" + month + "/" + year;
    clickedPokemon.catched = true
    clickedPokemon.data = newdate;

    setPokemon(newPokemons)
  }


  function addNewCatchedPokemon(pokemon) {
    setCatched(prev => ([...prev, pokemon]))
  }


  useEffect(() => {
    fetch("http://localhost:3000/pokemons")
      .then((response) => response.json())
      .then((json) => setPokemon(json));
  }, [])


  return (
    <>
      {<Router>
        <Navbar></Navbar>
        <Switch>
          <Route exaxt path="/Catchedcards" render={() => <Catchedcards catchedPokemons={catched}  />}></Route>
          <Route exaxt path="/Cards" render={() => <Cards pokemons={pokemons} catchClickHanlder={addNewCatchedPokemon} setCatchedPokemon={setCatchedPropToPokemon} />}></Route>
          <Route exaxt path="/:name" render={() => <PokemonPage pokemons={pokemons} />}></Route>
          <Redirect from="/" to="/Cards" />
        </Switch>
      </Router>}
    </>
  );

}

export default App;

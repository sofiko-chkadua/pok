import './App.css';
import Cards from './components/Cards/Cards'
import Catchedcards from './components/Catchedcards/Catchedcards'
import PokemonPage from './components/PokemonPage/PokemonPage';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

function App({ props }) {
  
  // setPokemon - через эту ф мы можем менять покемонов
  const [pokemons, setPokemon] = useState([]);
  const [catched, setCatched] = useState([]);


  function setCatchedPropToPokemon(clickedpokemon) {
    // копия старого массивапотому что нельзя менять стейт
    const newPokemons = [...pokemons]
    // найти покемона который кликнут был
    const clickedPokemon = newPokemons.find(p => p.name === clickedpokemon.name)
      // проставляем новое поле в кликнутом покемоне
      clickedPokemon.catched = true
      // в старых покемонах подменяем на новый массив из пойманных покемонов
    setPokemon(newPokemons)
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newdate = day + "/" + month + "/" + year;
    clickedPokemon.data = newdate || 100;

  }

// ф изменяет наших покемонов, зовем каждый раз когда кликаем на catch
// ф берет все старое и добавляет новое - каждого кликнутого покемона
  function addNewCatchedPokemon(clickedpokemon) {
    setCatched(prev => ([...prev, clickedpokemon]))
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
          {/* setCatchedPokemon - прокидываем setCatchedPropToPokemon*/}
          <Route exaxt path="/Cards" render={() => <Cards pokemons={pokemons} catchClickHanlder={addNewCatchedPokemon} setCatchedPokemon={setCatchedPropToPokemon} />}></Route>
          <Route exaxt path="/:name" render={() => <PokemonPage pokemons={pokemons}  />}></Route>
          <Redirect from="/" to="/Cards" />
        </Switch>
      </Router>}
    </>
  );

}

export default App;

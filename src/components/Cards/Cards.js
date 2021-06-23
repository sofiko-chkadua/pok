import './Cards.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom"
import PokemonPage from '../PokemonPage/PokemonPage';


function Cards({ pokemons, catchClickHanlder, setCatchedPokemon }) {
  const [currentPage, setcurrentPage] = useState(1);
  const [pokemonPerPage, setpokemonPerPage] = useState(21);

  const [pageNumberLimit, setpageNumberLimit] = useState(10);
  const [maxPageNaumber, setmaxPageNaumber] = useState(10);
  const [minPageNaumber, setminPageNaumber] = useState(0);

  // кнопка по нажатию на которую переключаются стр пагинации
  const handlerClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  // логика отрисовки страниц

  const pages = [];
  for (let i = 1; i < Math.ceil(pokemons.length / pokemonPerPage); i++) {
    pages.push(i)
  }

  const indexOfLastItem = currentPage * pokemonPerPage;
  const indexOfFirstItem = indexOfLastItem - pokemonPerPage;
  const currentItems = pokemons.slice(indexOfFirstItem, indexOfLastItem)


  const renderagesNumbers = pages.map(number => {
    if (number < maxPageNaumber + 1 && number > minPageNaumber) {
      return (
        <li onClick={handlerClick} className="pagination__item" key={number} id={number}>{number}</li>
      )
    } else {
      return null;
    }
  })

  // кнопка вперед
  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNaumber) {
      setmaxPageNaumber(maxPageNaumber + pageNumberLimit);
      setminPageNaumber(minPageNaumber + pageNumberLimit);
    }
  };
  // кнопка назад

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNaumber(maxPageNaumber - pageNumberLimit);
      setminPageNaumber(minPageNaumber - pageNumberLimit);
    }
  };

  // многоточие вперед

  let pageIncrementBtn = null;
  if (pages.length > maxPageNaumber) {
    pageIncrementBtn = <li className="paginarion__doths" onClick={handleNextbtn}> &hellip; </li>;
  }

  // многоточие назад
  let pageDecrementBtn = null;
  if (minPageNaumber >= 1) {
    pageDecrementBtn = <li className="paginarion__doths" onClick={handlePrevbtn}> &hellip; </li>;
  }
 

  function catchHandler(pokemon) {
    catchClickHanlder(pokemon)
    setCatchedPokemon(pokemon)
  }


  return (
    <>

      <ul className="cards">
        {currentItems.map(pokemon => (
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

      {/* пагинация */}
      <div className="pagination">
        <div className="pagination__container">
          <button className="pagination__button" onClick={handlePrevbtn} disabled={currentPage == pages[0] ? true : false}>&lang; </button>
          {pageDecrementBtn}
          <ul className="pagination__list">{renderagesNumbers}</ul>
          {pageIncrementBtn}
          <button className="pagination__button" onClick={handleNextbtn} disabled={currentPage == pages[pages.length - 1] ? true : false}>	&rang;</button>
        </div>
      </div>

    </>
  )
}

export default Cards;

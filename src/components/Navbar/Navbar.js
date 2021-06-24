import './Navbar.css';
import { NavLink } from "react-router-dom"

function Navbar() {

    return (
        <>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__item"><NavLink className="navbar__link" to="/Cards" activeStyle={{
                        fontWeight: "bold"
                    }}>All pokemons</NavLink></li>
                    <li className="navbar__item"><NavLink className="navbar__link" to="/Catchedcards" activeStyle={{
                        fontWeight: "bold"
                    }}>Catched pokemons</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;

import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return (
      <nav className="navbar-fixed blue darken-2">
        <div className="nav-wrapper row">
          <ul>
            <li><NavLink to="/">Logo</NavLink></li>
            <li>
            <NavLink to="/shop" className="waves-effect waves-light blue lighten-5 btn blue-text text-darken-4">Каталог</NavLink>
              </li>
          </ul>
          <div className="input-field center col s6">
                <i className="material-icons prefix">search</i>
                <input type="text" id="autocomplete-input" className="autocomplete"/>
                <label for="autocomplete-input">Поиск</label>
              </div>
          <ul className="right">
            <li><NavLink to="/home">Корзина</NavLink></li>
            <li><NavLink to="/auth">Войти</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}



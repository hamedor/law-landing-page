import React from 'react';
import {Link} from 'gatsby';
import {navigation ,navigation__list, navigation__item, navigation__link} from '../styles/Navigation.module.css'

const Navigation = () =>{
    return(
      <nav className={navigation}>
        <ul className={navigation__list}>
          <li className={navigation__item}>
            <button className={navigation__link}>link</button>
          </li>
          <li className={navigation__item}>
            <button className={navigation__link}>link</button>
          </li>
          <li className={navigation__item}>
            <button className={navigation__link}>link</button>
          </li>
          <li className={navigation__item}>
            <button className={navigation__link}>link</button>
          </li>
        </ul>   
      </nav>
    )
  } 

export default Navigation;
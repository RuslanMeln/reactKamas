import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return  <header className={s.header}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgDXCjFU1e_y9DJRligw4Nb6gg_7CkwUAV9A&usqp=CAU'></img>
    <div className={s.loginBlock}>
      {props.isAuth 
      ? <div>{props.login} - <button onClick={props.logout}>Log Out</button> </div>
      : <NavLink to={'/login'}>Login</NavLink>}
    </div>
  </header>
}

export default Header;
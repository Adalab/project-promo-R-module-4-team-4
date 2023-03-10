import '../styles/layout/Header.scss';
import logoCards from '../images/logo-duquesas-2.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
     <NavLink className="header__logo" to="/"><img className="header__logo" src={logoCards} alt="logo" /></NavLink> 
    </header>
  );
}

export default Header;

import { NavLink } from 'react-router-dom';
import style from 'components/Navigations/Navigations.module.css';

const Navigation = () => {
  return (
    <nav className={style.nav}>
      <NavLink
        className={({ isActive }) =>
          isActive ? ` ${style.active}` : style.link
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? ` ${style.active}` : style.link
        }
        to="/contacts"
      >
        Phonebook
      </NavLink>
    </nav>
  );
};

export default Navigation;

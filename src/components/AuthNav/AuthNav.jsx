import { NavLink } from 'react-router-dom';
import style from 'components/AuthNav/AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={style.authNav}>
      <NavLink to="/register">
        <button type="button" className={style.Btn}>
          Sign Up
        </button>
      </NavLink>
      <NavLink to="/login">
        <button type="button" className={style.Btn}>
          Log In
        </button>
      </NavLink>
    </div>
  );
};

export default AuthNav;

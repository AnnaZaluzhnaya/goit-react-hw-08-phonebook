import Navigation from 'components/Navigations/Navigations';
import style from 'components/AppBar.module.css';
import AuthNav from './AuthNav';

const AppBar = () => {
  return (
    <header className={style.header}>
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default AppBar;

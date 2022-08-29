import Navigation from 'components/Navigations/Navigations';
import style from 'components/AppBar.module.css';

const AppBar = () => {
  return (
    <header className={style.header}>
      <Navigation />
    </header>
  );
};

export default AppBar;

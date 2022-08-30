import Navigation from 'components/Navigations/Navigations';
import style from 'components/AppBar.module.css';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

const AppBar = () => {
  return (
    <header className={style.header}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
};

export default AppBar;

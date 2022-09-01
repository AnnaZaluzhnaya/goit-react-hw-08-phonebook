import style from 'components/App.module.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import AppBar from 'components/AppBar';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export const App = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={style.wrapper}>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" exact element={<RegisterPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        {isLoggedIn ? (
          <Route path="/contacts" exact element={<ContactsPage />} />
        ) : (
          <Route path="/" element={<HomePage />} />
        )}

        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};

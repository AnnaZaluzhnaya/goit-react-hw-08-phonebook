// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
// import ContactList from 'components/ContactList';
import style from 'components/App.module.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';

export const App = () => {
  return (
    <div className={style.wrapper}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <div className={style.phonebookWrapper}>
        <ContactForm />
        <Filter />
      </div>
      <ContactList /> */}
    </div>
  );
};

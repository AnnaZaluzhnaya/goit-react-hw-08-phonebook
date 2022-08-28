import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import style from 'components/App.module.css';

export const App = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.phonebookWrapper}>
        <ContactForm />
        <Filter />
      </div>
      <ContactList />
    </div>
  );
};

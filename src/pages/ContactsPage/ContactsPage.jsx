import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import style from 'pages/ContactsPage/ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={style.phonebookWrapper}>
      <Filter />
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;

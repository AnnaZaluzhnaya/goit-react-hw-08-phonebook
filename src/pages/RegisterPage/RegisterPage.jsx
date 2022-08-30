// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import style from 'pages/RegisterPage/RegisterPage.module.css';

const RegisterPage = () => {
  //   const dispatch = useDispatch();
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  //   const handleChange = ({ target: { name, value } }) => {
  //     switch (name) {
  //       case 'name':
  //         return setName(value);
  //       case 'email':
  //         return setEmail(value);
  //       case 'password':
  //         return setPassword(value);
  //       default:
  //         return;
  //     }
  //   };

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     dispatch(authOperations.register({ name, email, password }));
  //     setName('');
  //     setEmail('');
  //     setPassword('');
  //   };

  return (
    <div>
      <h1 className={style.formTitle}>Registration form</h1>

      <form className={style.registerForm} autoComplete="off">
        <label>
          <span className={style.labelName}>|Name</span>
          <input className={style.registerInput} type="text" name="name" />
        </label>

        <label>
          <span className={style.labelName}>|Phone</span>
          <input className={style.registerInput} type="tel" name="number" />
        </label>

        <label>
          <span className={style.labelName}>|Your mail</span>
          <input type="email" name="email" />
        </label>

        <label>
          <span className={style.labelName}>|Password</span>
          <input type="password" name="password" />
        </label>

        <button className={style.formBtn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;

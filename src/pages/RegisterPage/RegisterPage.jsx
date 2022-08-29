// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

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
      <h1>Registration form</h1>

      <form autoComplete="off">
        <label>
          Name
          <input type="text" name="name" />
        </label>

        <label>
          Mail
          <input type="email" name="email" />
        </label>

        <label>
          Password
          <input type="password" name="password" />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;

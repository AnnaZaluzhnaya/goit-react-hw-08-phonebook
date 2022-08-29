import style from 'pages/LoginPage/LoginPage.module.css';

const LoginPage = () => {
  return (
    <div>
      <h1>Login form</h1>

      <form className={style.loginForm} autoComplete="off">
        <label>
          Mail
          <input type="email" name="email" />
        </label>

        <label>
          Password
          <input type="password" name="password" />
        </label>

        <button type="submit">log in</button>
      </form>
    </div>
  );
};

export default LoginPage;

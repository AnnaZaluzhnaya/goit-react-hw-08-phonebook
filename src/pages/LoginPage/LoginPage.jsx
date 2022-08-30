import style from 'pages/LoginPage/LoginPage.module.css';

const LoginPage = () => {
  return (
    <div>
      <h1 className={style.formTitle}>Login form</h1>

      <form className={style.loginForm} autoComplete="off">
        <label style={style.LogLabel}>
          <span className={style.labelName}>|Your mail</span>
          <input type="email" name="email" />
        </label>

        <label style={style.LogLabel}>
          <span className={style.labelName}>|Password</span>
          <input type="password" name="password" />
        </label>

        <button type="submit" className={style.formBtn}>
          log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

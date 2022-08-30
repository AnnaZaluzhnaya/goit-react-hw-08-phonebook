import style from 'components/UserMenu/UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={style.userMenu}>
      <p className={style.userTitle}>Welcome, dear </p>
      <br />
      <button className={style.outBtn} type="button">
        LOG OUT
      </button>
    </div>
  );
};

export default UserMenu;
